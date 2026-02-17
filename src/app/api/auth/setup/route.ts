import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(request: Request){
    try{
        const body = await request.json();
        const {userId, primaryRole, secondaryRole} = body;

        if(!userId || !primaryRole){
            return NextResponse.json({message: "Missing required fields"}, {status: 400});
        }

        //update profile and mark as complete
        await prisma.userprofile.update({
            where: {user_id: userId},
            data: {
                primary_role: primaryRole,
                secondary_role: secondaryRole || null,
                is_setup_complete: true,
            },
        });
        
        return NextResponse.json({message: "Setup Complete", redirect: "/dashboard"});
    } catch(error){
        console.error("Setup Error: ", error);
        return NextResponse.json({message: "Internal Server Error"}, {status: 500});
    }
}