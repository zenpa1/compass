import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const targetId = parseInt(id);
    const body = await req.json();
    const session = await getSession();

    if (!session || session.user_type !== "OWNER") {
      return new NextResponse("Forbidden", { status: 403 });
    }

    if (targetId === Number(session.userId)) {
      return NextResponse.json({ error: "Cannot edit self" }, { status: 403 });
    }

    const targetUser = await db.user.findUnique({ where: { user_id: targetId } });
    if (!targetUser) return NextResponse.json({ error: "User not found" }, { status: 404 });
    if (targetUser.user_type === "OWNER") {
      return NextResponse.json({ error: "Cannot modify an Owner account" }, { status: 403 });
    }

    // RESTORE (undelete)
    if (body.restore === true) {
      const updated = await db.user.update({
        where: { user_id: targetId },
        data: { inactive: false },
      });
      return NextResponse.json(updated);
    }

    // PERMISSION CHANGE
    let resolvedRole: "ADMIN" | "EMPLOYEE";
    const input = String(body.permission).toUpperCase();
    if (input === "ADMIN") {
      resolvedRole = "ADMIN";
    } else if (input === "EMPLOYEE") {
      resolvedRole = "EMPLOYEE";
    } else {
      return NextResponse.json({ error: "Invalid role value" }, { status: 400 });
    }

    const updated = await db.user.update({
      where: { user_id: targetId },
      data: { user_type: resolvedRole },
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error("PATCH ERROR:", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await context.params;
    const targetId = parseInt(id);
    const session = await getSession();

    if (!session || session.user_type !== "OWNER") {
      return new NextResponse("Forbidden", { status: 403 });
    }

    if (targetId === Number(session.userId)) {
      return NextResponse.json({ error: "Cannot delete self" }, { status: 403 });
    }

    const targetUser = await db.user.findUnique({ where: { user_id: targetId } });
    if (!targetUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    if (targetUser.user_type === "OWNER") {
      return NextResponse.json({ error: "Cannot delete an Owner account" }, { status: 403 });
    }

    await db.user.update({
      where: { user_id: targetId },
      data: { inactive: true },
    });

    // Send deactivation email, non-blocking, won't fail the request
    try {
      await transporter.sendMail({
        from: `"COMPASS" <${process.env.EMAIL_USER}>`,
        to: targetUser.email,
        subject: "Your COMPASS account has been deactivated",
        html: `
          <p>Hi${targetUser.full_name ? ` ${targetUser.full_name}` : ""},</p>
          <p>Your <strong>COMPASS</strong> account has been deactivated.</p>
          <p>You will no longer be able to log in. If you believe this is a mistake, please contact the owner.</p>
        `,
      });
    } catch (emailError) {
      console.error("Failed to send deactivation email:", emailError);
    }

    return new NextResponse(null, { status: 204 });
  } catch (err) {
    console.error("DELETE ERROR:", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}