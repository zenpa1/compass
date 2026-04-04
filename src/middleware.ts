import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET = new TextEncoder().encode(process.env.SESSION_SECRET!);

const PUBLIC_ROUTES = ['/', '/login'];

// export async function middleware(req: NextRequest) {
//   console.log('Middleware running on:', req.nextUrl.pathname);
  
//   const { pathname } = req.nextUrl;

//   // Allow public routes through
//   if (PUBLIC_ROUTES.includes(pathname)) return NextResponse.next();

//   const token = req.cookies.get('auth_token')?.value;

//   if (!token) {
//     return NextResponse.redirect(new URL('/login', req.url));
//   }

//   try {
//     await jwtVerify(token, SECRET);
//     const response = NextResponse.next();
//     response.headers.set('Cache-Control', 'no-store, max-age=0, must-revalidate');
//     return response;
//   } catch(error) {
//     // Token expired or invalid
//     console.error('JWT Verification failed:', error);
//     const response = NextResponse.redirect(new URL('/login', req.url));
//     response.cookies.delete('auth_token');
//     return response;
//   }
// }

export async function middleware(req: NextRequest) {
  console.log('Middleware running on:', req.nextUrl.pathname);
  return NextResponse.next(); // bypass auth completely
}

//match page paths here
export const config = { 
  matcher: [ 
    '/calendar/:path*',
    '/freelancers/:path*',
    '/projects/:path*',
    '/work/:path*',
    '/setup/:path*',
    '/employee/open-work/:path*',
    '/employee/personal-tasks/:path*',],
};