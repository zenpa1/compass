import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// PATCH /api/users/[id]
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }  // ← Next.js 15: params is a Promise
) {
  const { id } = await params;  // ← must await it
  const userId = parseInt(id);

  if (isNaN(userId)) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  const body = await req.json();
  const { full_name, email, permission } = body;

  try {
    const updated = await prisma.user.update({
      where: { user_id: userId },
      data: {
        ...(full_name && { full_name }),
        ...(email && { email }),
        ...(permission && { user_type: permission === "Admin" ? "ADMIN" : "EMPLOYEE" }),
      },
    });
    return NextResponse.json(updated);
  } catch (err: any) {
    if (err.code === "P2025") {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    if (err.code === "P2002") {
      return NextResponse.json({ error: "Email already exists" }, { status: 409 });
    }
    console.error(err);
    return NextResponse.json({ error: "Failed to update user" }, { status: 500 });
  }
}

// DELETE /api/users/[id]
/*export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }  // ← same fix here
) {
  const { id } = await params;  // ← must await it
  const userId = parseInt(id);

  if (isNaN(userId)) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  try {
    await prisma.user.delete({
      where: { user_id: userId },
    });
    return NextResponse.json({ success: true });
  } catch (err: any) {
    if (err.code === "P2025") {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    console.error(err);
    return NextResponse.json({ error: "Failed to delete user" }, { status: 500 });
  }
}*/