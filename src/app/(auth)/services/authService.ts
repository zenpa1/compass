import { OAuth2Client } from 'google-auth-library';
import { PrismaClient } from '../../../generated/prisma';
import type { 
  userprofile_primary_role, 
  userprofile_secondary_role 
} from '../../../generated/prisma';

const prisma = new PrismaClient();
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
      //verify the token with Google
      const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });
      
      const payload = ticket.getPayload();
      
      if (!payload || !payload.email) {
        return {
          success: false,
          message: 'Invalid token payload'
        };
      }

      const { email, sub: googleId, name, picture } = payload;

      //check if user exists(whitelisted if exists)
      let user = await prisma.user.findUnique({
        where: { email },
        include: {
          userprofile: true
        }
      });

      //if user doesn't exist they're not whitelisted, deny access
      if (!user) {
        return {
          success: false,
          message: 'Access Denied: You are not authorized to access this application'
        };
      }

      //update Google info if it changed
      if (user.google_id !== googleId || user.avatar_url !== picture || user.full_name !== name) {
        user = await prisma.user.update({
          where: { user_id: user.user_id },
          data: {
            google_id: googleId,
            avatar_url: picture || user.avatar_url,
            full_name: name || user.full_name
          },
          include: {
            userprofile: true
          }
        });
      }

      //return success with user data and profile status
      return {
        success: true,
        user: {
          userId: user.user_id,
          email: user.email,
          fullName: user.full_name,
          avatarUrl: user.avatar_url,
          userType: user.user_type,
          hasProfile: !!user.userprofile
        }
      };

    } catch (error) {
      console.error('Authentication error:', error);
      return {
        success: false,
        message: 'Authentication failed'
      };
    }
  }

  async createUserProfile(
    userId: number,
    primaryRole: userprofile_primary_role,
    secondaryRole: userprofile_secondary_role
  ): Promise<{ success: boolean; message?: string }> {
    try {
      //validate that primary and secondary roles are different
      if (primaryRole === secondaryRole) {
        return {
          success: false,
          message: 'Primary and secondary roles must be different'
        };
      }

      //validate secondary role constraints
      //ASSISTANT and ANY can only be secondary, never primary
      if (primaryRole === 'ASSISTANT' || primaryRole === 'ANY') {
        return {
          success: false,
          message: 'ASSISTANT and ANY can only be selected as secondary roles'
        };
      }

      //check if user exists
      const user = await prisma.user.findUnique({
        where: { user_id: userId },
        include: { userprofile: true }
      });

      if (!user) {
        return {
          success: false,
          message: 'User not found'
        };
      }

      //check if profile already exists
      if (user.userprofile) {
        return {
          success: false,
          message: 'User profile already exists'
        };
      }

      //create the profile
      await prisma.userprofile.create({
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
      return {
        success: false,
        message: 'Failed to create user profile'
      };
    }
  }

  //get user info
  async getUserWithProfile(userId: number) {
    return await prisma.user.findUnique({
      where: { user_id: userId },
      include: {
        userprofile: true
      }
    });
  }

  //update user profile
  async updateUserProfile(
    userId: number,
    primaryRole: userprofile_primary_role,
    secondaryRole: userprofile_secondary_role
  ): Promise<{ success: boolean; message?: string }> {
    try {
      //same validation as creation
      if (primaryRole === secondaryRole) {
        return {
          success: false,
          message: 'Primary and secondary roles must be different'
        };
      }

      if (primaryRole === 'ASSISTANT' || primaryRole === 'ANY') {
        return {
          success: false,
          message: 'ASSISTANT and ANY can only be selected as secondary roles'
        };
      }

      await prisma.userprofile.update({
        where: { user_id: userId },
        data: {
          primary_role: primaryRole,
          secondary_role: secondaryRole
        }
      });

      return { success: true };

    } catch (error) {
      console.error('Profile update error:', error);
      return {
        success: false,
        message: 'Failed to update user profile'
      };
    }
  }
}