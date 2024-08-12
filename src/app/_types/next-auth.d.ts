import { isPrivateType, roleType } from '@/model/User';
import NextAuth, { type DefaultSession } from 'next-auth';

// session data에 custom data 추가 하기


 
declare module "next-auth" {
  /**
   * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      isPrivate ?: isPrivateType;
      role?: roleType;

    } & DefaultSession["user"]
  }
}
 
export const { auth, handlers } = NextAuth({
  callbacks: {
    session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          isPrivate ?: user.isPrivate,
          role?: user.role,
        },
      }
    },
  },
})
