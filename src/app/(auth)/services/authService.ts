import { OAuth2Client } from 'google-auth-library';
// Import the singleton instance
import { prisma } from '../../../lib/prisma'; 
// Import the types/enums you need
import { RoleCategory, UserType, PrismaClient } from '@prisma/client';

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

interface AuthResult {
  success: boolean;
  user?: {
    userId: number;
    email: string;
    fullName: string | null;
    avatarUrl: string | null;
    userType: string;
    hasProfile: boolean;
  };
  message?: string;
}

export class AuthService {
  async verifyAndAuthenticateUser(idToken: string): Promise<AuthResult> {
    try {
      // 1. Verify token with Google
      const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      
      const payload = ticket.getPayload();
      
      if (!payload || !payload.email) {
        return { success: false, message: 'Invalid token payload' };
      }

      const { email, sub: googleId, name, picture } = payload;

      // 2. Check if user exists
      // Note: We use include: { profile: true } because your schema says 'profile UserProfile?'
      let user = await prisma.user.findUnique({
        where: { email },
        include: {
          profile: true 
        }
      });

      // 3. Deny if not whitelisted (User must exist in DB first)
      if (!user) {
        return {
          success: false,
          message: 'Access Denied: You are not authorized to access this application'
        };
      }

      // 4. Update Google info if it changed
      if (user.google_id !== googleId || user.avatar_url !== picture || user.full_name !== name) {
        user = await prisma.user.update({
          where: { user_id: user.user_id },
          data: {
            google_id: googleId,
            avatar_url: picture || user.avatar_url,
            full_name: name || user.full_name
          },
          include: {
            profile: true
          }
        });
      }

      // 5. Return success
      return {
        success: true,
        user: {
          userId: user.user_id,
          email: user.email,
          fullName: user.full_name,
          avatarUrl: user.avatar_url,
          userType: user.user_type,
          // Check 'user.profile', not 'user.userprofile'
          hasProfile: !!user.profile 
        }
      };

    } catch (error) {
      console.error('Authentication error:', error);
      return { success: false, message: 'Authentication failed' };
    }
  }

  async createUserProfile(
    userId: number,
    primaryRole: RoleCategory,        // UPDATED: Use the Enum
    secondaryRole: RoleCategory | null // UPDATED: Can be null
  ): Promise<{ success: boolean; message?: string }> {
    try {
      // Validate: Roles must be different (if secondary exists)
      if (secondaryRole && primaryRole === secondaryRole) {
        return {
          success: false,
          message: 'Primary and secondary roles must be different'
        };
      }

      // Validate: ASSISTANT/ANY cannot be primary
      // We use the Enum values for safer checking
      if (primaryRole === RoleCategory.ASSISTANT || primaryRole === RoleCategory.ANY) {
        return {
          success: false,
          message: 'ASSISTANT and ANY can only be selected as secondary roles'
        };
      }

      // Check if user exists
      const user = await prisma.user.findUnique({
        where: { user_id: userId },
        include: { profile: true }
      });

      if (!user) {
        return { success: false, message: 'User not found' };
      }

      if (user.profile) {
        return { success: false, message: 'User profile already exists' };
      }

      // Create the profile
      // Note: prisma.userProfile (camelCase) matches model UserProfile
      await prisma.userProfile.create({
        data: {
          user_id: userId,
          primary_role: primaryRole,
          secondary_role: secondaryRole,
          reliability_score: 100.0
        }
      });

      return { success: true };

    } catch (error) {
      console.error('Profile creation error:', error);
      return { success: false, message: 'Failed to create user profile' };
    }
  }

  // Get user info
  async getUserWithProfile(userId: number) {
    return await prisma.user.findUnique({
      where: { user_id: userId },
      include: {
        profile: true
      }
    });
  }

  // Update user profile
  async updateUserProfile(
    userId: number,
    primaryRole: RoleCategory,
    secondaryRole: RoleCategory | null
  ): Promise<{ success: boolean; message?: string }> {
    try {
      if (secondaryRole && primaryRole === secondaryRole) {
        return {
          success: false,
          message: 'Primary and secondary roles must be different'
        };
      }

      if (primaryRole === RoleCategory.ASSISTANT || primaryRole === RoleCategory.ANY) {
        return {
          success: false,
          message: 'ASSISTANT and ANY can only be selected as secondary roles'
        };
      }

      await prisma.userProfile.update({
        where: { user_id: userId },
        data: {
          primary_role: primaryRole,
          secondary_role: secondaryRole
        }
      });

      return { success: true };

    } catch (error) {
      console.error('Profile update error:', error);
      return { success: false, message: 'Failed to update user profile' };
    }
  }
}