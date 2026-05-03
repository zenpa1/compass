import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";
import { getSession } from "@/lib/session";
import { user_user_type } from "@/generated/client";

export async function GET(req: Request) {
  const session = await getSession();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });
  if (session.user_type !== "OWNER") return new NextResponse("Forbidden", { status: 403 });

  const { searchParams } = new URL(req.url);
  const search = searchParams.get("search") ?? "";
  const permission = searchParams.get("permission");
  const sortBy = searchParams.get("sortBy") === "email" ? "email" : "full_name";
  const status = searchParams.get("status");

  const userTypeFilter =
    permission === "Admin" ? "ADMIN" :
    permission === "Employee" ? "EMPLOYEE" :
    permission === "Owner" ? "OWNER" :
    undefined;

  const inactiveFilter =
    status === "inactive" ? true :
    status === "active" ? false :
    undefined;

  const users = await db.user.findMany({
    where: {
      user_id: { not: session.userId },
      ...(userTypeFilter && { user_type: userTypeFilter as user_user_type }),
      ...(inactiveFilter !== undefined && { inactive: inactiveFilter }),
      ...(search && {
        OR: [
          { full_name: { contains: search } },
          { email: { contains: search } },
        ],
      }),
    },
    select: { 
      user_id: true, 
      full_name: true, 
      email: true, 
      user_type: true,
      inactive: true,  // ← add this
    },
    orderBy: { [sortBy]: "asc" },
  });

  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const session = await getSession();
  if (!session) return new NextResponse("Unauthorized", { status: 401 });
  if (session.user_type !== "OWNER") return new NextResponse("Forbidden", { status: 403 });

  const { full_name, email, permission } = await req.json();

  if (!email || !permission) {
    return NextResponse.json({ error: "Email and permission are required" }, { status: 400 });
  }

  if (!["Admin", "Employee"].includes(permission)) {
    return NextResponse.json({ error: "Invalid permission value" }, { status: 400 });
  }

  const existing = await db.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "A user with this email already exists" }, { status: 409 });
  }

  const user_type = permission === "Admin" ? "ADMIN" : "EMPLOYEE";

  const newUser = await db.user.create({
    data: { full_name: full_name ?? null, email, user_type: user_type as user_user_type },
    select: { user_id: true, full_name: true, email: true, user_type: true },
  });

  return NextResponse.json(newUser, { status: 201 });
}