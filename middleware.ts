import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'; // <--- IMPORT THIS

// Change 'Request' to 'NextRequest' here 👇
export function middleware(request: NextRequest) {
  
  // Now TypeScript knows that 'cookies' exists!
  const token = request.cookies.get('auth_token')?.value;
  
  const { pathname } = request.nextUrl;

  // Define paths that do NOT require authentication
  // 1. /login (obviously)
  // 2. /api/auth (so the login fetch works)
  // 3. /_next (static files, images, etc.)
  // 4. /favicon.ico
  const isPublicPath = 
    pathname === '/login' || 
    pathname.startsWith('/api/auth') || 
    pathname.startsWith('/_next') || 
    pathname === '/favicon.ico';

  // SCENARIO 1: User is NOT logged in and tries to access a protected page
  if (!token && !isPublicPath) {
    // Redirect them to login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // SCENARIO 2: User IS logged in but tries to go back to /login
  if (token && pathname === '/login') {
    // Redirect them to dashboard (or projects for owners)
    // Note: Middleware can't easily know if they are OWNER or EMPLOYEE 
    // without decoding the cookie, so we default to dashboard.
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

// Ensure middleware runs on all paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};