import { NextResponse } from 'next/server';
import { OAuth2Client } from 'google-auth-library';
import { prisma } from '@/lib/db';
import { cookies } from 'next/headers';

const client = new OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

export async function POST(request: Request){
    try{
        const {token} = await request.json();

        //verify google token
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        if(!payload || !payload.email){
            return NextResponse.json({message: "Invalid token"}, {status: 400});
        }

        const {email, sub: googleId, name, picture} = payload;

        //check if user exists
        const user = await prisma.user.findUnique({
            where: {email},
            include: {userprofile: true},
        });

        if(!user){
            return NextResponse.json(
                {message: "Access Denied", errorType: "PRIVATE_APP"},
                {status: 403}
            );
        }

        //update google id if missing
        if(!user.google_id){
            await prisma.user.update({
                where: {user_id: user.user_id},
                data: {google_id: googleId, full_name: name, avatar_url: picture}
            });
        }

        //checks if user is OWNER
        if (user.user_type === 'OWNER') {
            //create cookie for session handling
            (await cookies()).set('auth_token', 'logged-in', { 
                httpOnly: true, 
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 7, //1 week
                path: '/',
            });
            
            return NextResponse.json({
                message: "Login Successful (Owner)",
                redirect: "/projects",
                user: { 
                    id: user.user_id, 
                    email: user.email,
                    role: 'OWNER'
                }
            });
        }

        /*-----CODE FOR HANDLING EMPLOYEES-----*/
        //check profuile stat
        let profile = user.userprofile;

        //if no profile exists, create default
        if(!profile){
            profile = await prisma.userprofile.create({
                data: {
                    user_id: user.user_id,
                    primary_role: 'PHOTO',
                    is_setup_complete: false
                }
            });
        }

        //redirect to role setup if first time
        if(profile.is_setup_complete === false){
            return NextResponse.json({
                message: "Setup Required",
                redirect: "/setup",
                user: {id: user.user_id, email: user.email}
            });
        }

        //create cookie for employee
        (await cookies()).set('auth_token', 'logged-in', { 
            httpOnly: true, 
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24 * 7, //1 week
            path: '/',
        });

        //send to freelancers if profile already exists
        return NextResponse.json({
            message: "Login Success",
            redirect: "/freelancers",
        });
    } catch(error){
        console.error("Auth Error: ", error);
        return NextResponse.json({message: "Server Error"}, {status: 500});
    }
}