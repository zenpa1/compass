import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const SECRET = new TextEncoder().encode(process.env.SESSION_SECRET!);
const COOKIE_NAME = 'auth_token';

// Create a single source of truth for your session data shape
export type SessionPayload = {
  userId: number;
  email: string;
  user_type: string;
  primary_role?: string | null;
};

export async function createSession(payload: SessionPayload) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .sign(SECRET);

  (await cookies()).set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
}

export async function getSession() {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) return null;

  try {
    const { payload } = await jwtVerify(token, SECRET);
    // <-- FIXED: Now uses the correct SessionPayload type
    return payload as SessionPayload; 
  } catch {
    return null; // expired or tampered
  }
}

export async function deleteSession() {
  (await cookies()).delete(COOKIE_NAME);
}