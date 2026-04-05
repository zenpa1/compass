import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// ==========================================
// GET: Fetch the user's existing profile
// ==========================================
export async function GET(request: NextRequest) {
    try {
        // Grab the userId from the URL query params (e.g., ?userId=16)
        const searchParams = request.nextUrl.searchParams;
        const userId = searchParams.get('userId');

        if (!userId) {
            return NextResponse.json({ message: "User ID is required" }, { status: 400 });
        }

        const numericUserId = parseInt(userId, 10);

        const profile = await prisma.userprofile.findUnique({
            where: { user_id: numericUserId },
        });

        if (!profile) {
            // If they don't have a profile yet, just return empty values
            return NextResponse.json({ primaryRole: "", secondaryRole: "NONE" });
        }

        return NextResponse.json({ 
            primaryRole: profile.primary_role, 
            secondaryRole: profile.secondary_role || "NONE" 
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

        // Using upsert just in case the profile doesn't exist yet!
        await prisma.userprofile.upsert({
            where: { user_id: numericUserId },
            update: {
                primary_role: primaryRole,
                secondary_role: secondaryRole || null,
                is_setup_complete: true, // Mark setup as complete just to be safe
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