import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.SESSION_SECRET!);

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    return NextResponse.json({ error: "No session" }, { status: 401 });
  }

  try {
    const { payload } = await jwtVerify(token, SECRET);
    return NextResponse.json({
      user_type: payload.user_type,
    });
  } catch (err) {
    return NextResponse.json({ error: "Invalid token" }, { status: 401 });
  }
}