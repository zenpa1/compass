import { NextResponse } from 'next/server';
import { OAuth2Client } from 'google-auth-library';
import { prisma } from '@/lib/db';
import { createSession } from '@/lib/session';

const client = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

// ==================================================================
// HELPER: Dynamic CORS Headers
// ==================================================================
function corsHeaders() {
  const origin = process.env.NODE_ENV === 'production'
    ? 'https://compass-ten-kappa.vercel.app'
    : 'http://127.0.0.1:5500';

  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };
}

// ==================================================================
// 1. PREFLIGHT HANDLER (Required for CORS)
// ==================================================================
export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: corsHeaders(),
  });
}

// ==================================================================
// 2. MAIN LOGIN HANDLER
// ==================================================================
export async function POST(request: Request) {
    try {
        const { token } = await request.json();

        // Verify google token
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        if (!payload || !payload.email) {
            return NextResponse.json(
                { message: "Invalid token" }, 
                { status: 400, headers: corsHeaders() } // Correctly separated options
            );
        }

        const { email, sub: googleId, name, picture } = payload;

        // Check if user exists
        const user = await prisma.user.findUnique({
            where: { email },
            include: { userprofile: true },
        });

        if (!user) {
            return NextResponse.json(
                { message: "Access Denied", errorType: "PRIVATE_APP" },
                { status: 403, headers: corsHeaders() } // Correctly separated options
            );
        }

        // Update google id if missing
        if (!user.google_id) {
            await prisma.user.update({
                where: { user_id: user.user_id },
                data: { google_id: googleId, full_name: name, avatar_url: picture }
            });
        }

        // Checks if user is OWNER
        if (user.user_type === 'OWNER') {
            // Create cookie for session handling
            await createSession({
                userId: user.user_id,
                email: user.email,
                role: 'OWNER',
            });

            return NextResponse.json({
                message: "Login Successful (Owner)",
                redirect: "/projects",
                user: {
                    id: user.user_id,
                    email: user.email,
                    role: 'OWNER'
                }
            }, {
                status: 200, 
                headers: corsHeaders() // Correctly separated options
            });
        }

        /*-----CODE FOR HANDLING EMPLOYEES-----*/
        // Check profile stat
        let profile = user.userprofile;

        // If no profile exists, create default
        if (!profile) {
            profile = await prisma.userprofile.create({
                data: {
                    user_id: user.user_id,
                    primary_role: 'PHOTO',
                    is_setup_complete: false
                }
            });
        }

        // Redirect to role setup if first time
        if (profile.is_setup_complete === false) {
            await createSession({
                userId: user.user_id,
                email: user.email,
                role: 'EMPLOYEE',
            });

            return NextResponse.json({
                message: "Setup Required",
                redirect: "/setup",
                user: { id: user.user_id, email: user.email }
            }, {
                status: 200, 
                headers: corsHeaders() // Correctly separated options
            });
        }

        // Create cookie for employee
        await createSession({
            userId: user.user_id,
            email: user.email,
            role: user.userprofile?.primary_role ?? 'EMPLOYEE',
        });

        // Send to freelancers if profile already exists
        return NextResponse.json(
            { message: "Login Success", redirect: "/work" },
            { status: 200, headers: corsHeaders() } // Correctly separated options
        );

    } catch (error) {
        console.error("Auth Error: ", error);
        return NextResponse.json(
            { message: "Server Error" }, 
            { status: 500, headers: corsHeaders() } // Added missing CORS headers here
        );
    }
}