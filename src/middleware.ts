import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.SESSION_SECRET!);
const PUBLIC_FILE = /\.(.*)$/;

const PUBLIC_ROUTES = ["/", "/login"];

const OWNER_ROUTES = ["/projects", "/freelancers", "/user-management"];
const EMPLOYEE_ROUTES = ["/work", "/setup", "/employee"];
const SHARED_ROUTES = ["/calendar", "/tasks", "/manageprofile"];

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get("auth_token")?.value;

  // Let static assets in /public pass through (e.g., login logo image).
  if (PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  // 1. Handle Public Routes (like /login)
  if (PUBLIC_ROUTES.includes(pathname)) {
    if (token) {
      try {
        const { payload } = await jwtVerify(token, SECRET);
        const userType = payload.user_type as string; // <-- FIXED: Changed from role to user_type

        // Send them to their specific dashboard
        if (userType === "OWNER")
          return NextResponse.redirect(new URL("/projects", req.url));
        return NextResponse.redirect(new URL("/work", req.url));
      } catch (error) {
        // Token is invalid, let them stay on the login page
        return NextResponse.next();
      }
    }
    // No token, let them view the public page
    return NextResponse.next();
  }

  // 2. Handle Protected Routes
  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    const { payload } = await jwtVerify(token, SECRET);
    const userType = payload.user_type as string;

    const isSharedRoute = SHARED_ROUTES.some((route) =>
      pathname.startsWith(route),
    );

    if (!isSharedRoute) {
      const isOwnerRoute = OWNER_ROUTES.some((route) =>
        pathname.startsWith(route),
      );
      const isEmployeeRoute = EMPLOYEE_ROUTES.some((route) =>
        pathname.startsWith(route),
      );

      // Prevent Owners from accessing Employee spaces
      if (userType === "OWNER" && isEmployeeRoute) {
        return NextResponse.redirect(new URL("/projects", req.url));
      }

      // Prevent Employees from accessing Owner spaces
      if (userType === "EMPLOYEE" && isOwnerRoute) {
        return NextResponse.redirect(new URL("/work", req.url));
      }
    }

    // <-- FIXED: Added this back! Without it, your pages won't load
    const response = NextResponse.next();
    response.headers.set(
      "Cache-Control",
      "no-store, max-age=0, must-revalidate",
    );
    return response;
  } catch (error) {
    console.error("JWT Verification failed:", error);
    const response = NextResponse.redirect(new URL("/login", req.url));
    response.cookies.delete("auth_token");
    return response;
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
