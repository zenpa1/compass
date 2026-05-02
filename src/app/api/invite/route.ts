import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const token = searchParams.get("token");

    console.log("Token received:", token);

    if (!token) {
        return NextResponse.json({ error: "Missing token" }, { status: 400 });
    }

    const user = await db.user.findUnique({ where: { invite_token: token } });

    console.log("User found:", user);

    if (!user) {
        return NextResponse.json({ error: "Invalid or expired invite link" }, { status: 404 });
    }

    try {
        const updated = await db.user.update({
            where: { user_id: user.user_id },
            data: { inactive: false, invite_token: null },
        });
        console.log("Updated:", updated);
    } catch (err) {
        console.error("Update failed:", err);
        return NextResponse.json({ error: "Failed to activate account" }, { status: 500 });
    }

    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_APP_URL}/login?activated=true`);
}