import { Router, Request, Response } from 'express';
import { AuthService } from '../services/authService';
import type { 
  userprofile_primary_role, 
  userprofile_secondary_role 
} from '../../../generated/prisma';

const router = Router();
const authService = new AuthService();

/**
 * POST /api/auth/google
 * Authenticate user with Google ID token
 */
router.post('/google', async (req: Request, res: Response) => {
  try {
    const { idToken } = req.body;

    if (!idToken) {
      return res.status(400).json({
        success: false,
        message: 'ID token is required'
      });
    }

    const result = await authService.verifyAndAuthenticateUser(idToken);

    if (!result.success) {
      return res.status(403).json(result);
    }

    // Create session
    if (req.session) {
      req.session.userId = result.user!.userId;
    }

    // Determine redirect path based on profile completion
    const redirectTo = result.user!.hasProfile ? '/dashboard' : '/setup-roles';

    return res.status(200).json({
      success: true,
      user: result.user,
      redirectTo
    });

  } catch (error) {
    console.error('Auth route error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

/**
 * POST /api/auth/setup-profile
 * Create user profile with primary and secondary roles
 */
router.post('/setup-profile', async (req: Request, res: Response) => {
  try {
    const { userId, primaryRole, secondaryRole } = req.body;

    // Validate input
    if (!userId || !primaryRole || !secondaryRole) {
      return res.status(400).json({
        success: false,
        message: 'User ID, primary role, and secondary role are required'
      });
    }

    // Validate that roles are valid enum values
    const validPrimaryRoles: userprofile_primary_role[] = ['PHOTO', 'VIDEO', 'EDITOR'];
    const validSecondaryRoles: userprofile_secondary_role[] = ['PHOTO', 'VIDEO', 'EDITOR', 'ASSISTANT', 'ANY'];
    
    if (!validPrimaryRoles.includes(primaryRole as userprofile_primary_role) || 
        !validSecondaryRoles.includes(secondaryRole as userprofile_secondary_role)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid role specified'
      });
    }

    const result = await authService.createUserProfile(
      userId,
      primaryRole as userprofile_primary_role,
      secondaryRole as userprofile_secondary_role
    );

    if (result.success) {
      return res.status(200).json({
        success: true,
        message: 'Profile created successfully',
        redirectTo: '/dashboard'
      });
    }

    return res.status(400).json(result);

  } catch (error) {
    console.error('Profile setup route error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

/**
 * GET /api/auth/me
 * Get current authenticated user with profile
 */
router.get('/me', async (req: Request, res: Response) => {
  try {
    const userId = req.session?.userId;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: 'Not authenticated'
      });
    }

    const user = await authService.getUserWithProfile(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    return res.status(200).json({
      success: true,
      user: {
        userId: user.user_id,
        email: user.email,
        fullName: user.full_name,
        avatarUrl: user.avatar_url,
        userType: user.user_type,
        profile: user.userprofile ? {
          profileId: user.userprofile.profile_id,
          primaryRole: user.userprofile.primary_role,
          secondaryRole: user.userprofile.secondary_role,
          reliabilityScore: user.userprofile.reliability_score
        } : null
      }
    });

  } catch (error) {
    console.error('Get user route error:', error);
    return res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

/**
 * POST /api/auth/logout
 * Logout current user
 */
router.post('/logout', (req: Request, res: Response) => {
  if (!req.session) {
    return res.status(400).json({
      success: false,
      message: 'No session found'
    });
  }

  req.session.destroy((err: Error | null) => {
    if (err) {
      return res.status(500).json({
        success: false,
        message: 'Logout failed'
      });
    }
    res.clearCookie('connect.sid'); // Default session cookie name
    return res.status(200).json({
      success: true,
      message: 'Logged out successfully'
    });
  });
});

export default router;