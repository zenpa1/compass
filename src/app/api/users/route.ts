import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// GET /api/users?search=&permission=
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const search = searchParams.get("search") || "";
  const permission = searchParams.get("permission") || "All";
  const sortBy = searchParams.get("sortBy") || "name";

  try {
    const users = await prisma.user.findMany({
      where: {
        ...(search && {
          OR: [
            { full_name: { contains: search } },
            { email: { contains: search } },
          ],
        }),
        ...(permission !== "All" && {
          user_type: permission === "Admin" ? "OWNER" : "EMPLOYEE",
        }),
      },
      select: {
        user_id: true,
        full_name: true,
        email: true,
        user_type: true,
      },
      orderBy: sortBy === "email" ? { email: "asc" } : { full_name: "asc" },
    });

    return NextResponse.json(users);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch users" }, { status: 500 });
  }
}

// POST /api/users — create new user
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { full_name, email, permission } = body;

  if (!full_name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }

  try {
    const user = await prisma.user.create({
      data: {
        full_name,
        email,
        user_type: permission === "Admin" ? "ADMIN" : "EMPLOYEE",
      },
    });
    return NextResponse.json(user, { status: 201 });
  } catch (err: any) {
    if (err.code === "P2002") {
      return NextResponse.json({ error: "Email already exists" }, { status: 409 });
    }
    console.error(err);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}