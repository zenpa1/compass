import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// ==========================================
// GET: Fetch the user's existing profile
// ==========================================
export async function GET(request: NextRequest) {
    try {
        const searchParams = request.nextUrl.searchParams;
        const userId = searchParams.get('userId');

        if (!userId) {
            return NextResponse.json({ message: "User ID is required" }, { status: 400 });
        }

        const numericUserId = parseInt(userId, 10);

        // Fetch profile and check if they have accepted work (assignments)
        const [profile, assignmentCount] = await Promise.all([
            prisma.userprofile.findUnique({
                where: { user_id: numericUserId },
            }),
            prisma.assignment.count({
                where: { 
                    user_id: numericUserId,
                    work: { work_status: { notIn: ["COMPLETED"] } }
                }
            })
        ]);

        const hasAcceptedWork = assignmentCount != 0;

        if (!profile) {
            return NextResponse.json({ primaryRole: "", secondaryRole: "NONE", hasAcceptedWork });
        }

        return NextResponse.json({ 
            primaryRole: profile.primary_role, 
            secondaryRole: profile.secondary_role || "NONE",
            hasAcceptedWork
        });

    } catch (error) {
        console.error("Profile Fetch Error: ", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

// ==========================================
// POST: Update the user's profile
// ==========================================
export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { userId, primaryRole, secondaryRole } = body;

        if (!userId || !primaryRole) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        const numericUserId = parseInt(userId, 10);

        if (isNaN(numericUserId)) {
            return NextResponse.json({ message: "Invalid User ID format" }, { status: 400 });
        }

        // SECURITY CHECK: Ensure they don't have active work before updating
        const assignmentCount = await prisma.assignment.count({
            where: { user_id: numericUserId }
        });

        if (assignmentCount > 0) {
            return NextResponse.json({ message: "Cannot change roles while assigned to active work." }, { status: 403 });
        }

        await prisma.userprofile.upsert({
            where: { user_id: numericUserId },
            update: {
                primary_role: primaryRole,
                secondary_role: secondaryRole || null,
                is_setup_complete: true, 
            },
            create: {
                user_id: numericUserId,
                primary_role: primaryRole,
                secondary_role: secondaryRole || null,
                is_setup_complete: true,
            }
        });
        
        return NextResponse.json({ message: "Profile updated successfully" });
    } catch (error) {
        console.error("Profile Update Error: ", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}