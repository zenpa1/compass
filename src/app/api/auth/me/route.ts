import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET = new TextEncoder().encode(process.env.SESSION_SECRET!);

export async function GET(req: NextRequest) {
  const token = req.cookies.get('auth_token')?.value;

  if (!token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    // Verify the token just like you do in your middleware
    const { payload } = await jwtVerify(token, SECRET);
    
    // Return the payload data! Make sure 'userId' matches whatever key you used when signing the JWT.
    return NextResponse.json({ userId: payload.userId }); 
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}