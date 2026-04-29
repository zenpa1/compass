import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getSession } from "@/lib/session";

export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const userId = parseInt(id);
  const body = await req.json(); // ← parse body first
  console.log("PATCH hit — id:", id, "body:", body);

  const session = await getSession();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });
  if (session.user_type !== "OWNER") return new NextResponse("Forbidden", { status: 403 });
  if (!userId) return new NextResponse("Invalid user ID", { status: 400 });
  if (userId === session.userId) {
    return NextResponse.json({ error: "Cannot edit your own account" }, { status: 403 });
  }

  const { permission } = body; // ← now body exists

  if (!permission || !["Admin", "Employee"].includes(permission)) {
    return NextResponse.json({ error: "Invalid permission value" }, { status: 400 });
  }

  try {
    const target = await db.user.findUnique({ where: { user_id: userId } });
    if (!target) return NextResponse.json({ error: "User not found" }, { status: 404 });
    if (target.user_type === "OWNER") {
      return NextResponse.json({ error: "Cannot change the role of an Owner account" }, { status: 403 });
    }

    const user_type = permission === "Admin" ? "ADMIN" : "EMPLOYEE";

    console.log("PATCH payload:", { userId, permission, resolved_user_type: user_type });
    console.log("Target before update:", target);

    const updated = await db.user.update({
      where: { user_id: userId },
      data: { user_type },
      select: { user_id: true, full_name: true, email: true, user_type: true },
    });

    return NextResponse.json(updated);
  } catch (err) {
    console.error("Edit user route error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;
  const userId = parseInt(id);

  const session = await getSession();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });
  if (session.user_type !== "OWNER") return new NextResponse("Forbidden", { status: 403 });
  if (!userId) return new NextResponse("Invalid user ID", { status: 400 });
  if (userId === session.userId) {
    return NextResponse.json({ error: "Cannot delete your own account" }, { status: 403 });
  }

  try {
    const target = await db.user.findUnique({ where: { user_id: userId } });
    if (!target) return NextResponse.json({ error: "User not found" }, { status: 404 });
    if (target.user_type === "OWNER") {
      return NextResponse.json({ error: "Cannot delete an Owner account" }, { status: 403 });
    }

    await db.user.update({
      where: { user_id: userId },
      data: { inactive: true },
    });

    return NextResponse.json({ message: "User deactivated successfully" });
  } catch (err) {
    console.error("Delete user route error:", err);
    return new NextResponse("Server error", { status: 500 });
  }
}