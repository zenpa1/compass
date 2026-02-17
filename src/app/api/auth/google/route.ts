import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
// We use the relative path to be safe
import { AuthService } from '../../../(auth)/services/authService'; 

const authService = new AuthService();

// ==================================================================
// 1. THE "PREFLIGHT" HANDLER (Fixes your specific error)
// ==================================================================
export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5500', // MUST match your frontend URL exactly
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Access-Control-Allow-Credentials': 'true',
    },
  });
}

// ==================================================================
// 2. THE MAIN LOGIN HANDLER
// ==================================================================
export async function POST(request: Request) {
  try {
    const { idToken } = await request.json();

    if (!idToken) {
      return NextResponse.json(
        { success: false, message: 'ID token is required' },
        { status: 400, headers: corsHeaders() } // Attach headers to error too
      );
    }

    const result = await authService.verifyAndAuthenticateUser(idToken);

    if (!result.success) {
      return NextResponse.json(result, { status: 403, headers: corsHeaders() });
    }

    // Set Cookie
    const cookieStore = await cookies();
    cookieStore.set('userId', String(result.user!.userId), { 
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7 
    });

    // Return Success with CORS Headers
    return NextResponse.json({
      success: true,
      user: result.user,
      redirectTo: result.user!.hasProfile ? '/dashboard' : '/setup-roles'
    }, {
      status: 200,
      headers: corsHeaders() // <--- CRITICAL: Allow the response back out
    });

  } catch (error) {
    console.error('Auth route error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' }, 
      { status: 500, headers: corsHeaders() }
    );
  }
}

// Helper function to avoid repeating headers
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  };
}