import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { isPrivateType, roleType } from './app/_types/next-auth';

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  pages : { // custom 페이지 연결
    signIn: '/i/flow/login',
    newUser: '/i/flow/signip',
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      if (session.user && token.role) {
        session.user.role = token.role as roleType;
      }
      if (session.user && token.isPrivate) {
        session.user.isPrivate = token.isPrivate as isPrivateType;
      }
      return session;
    },
  },
  providers: [
    Credentials({
      credentials: {
        username: { label: "user_id", type : "text" },
        password: { label: "user_password", type: "password" },
      },
      authorize: async (credentials) => {
        const authResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'applicatoin/json',
          },
          body: JSON.stringify({
            id: credentials.username,
            password : credentials.password
          }),
        });

        if (!authResponse.ok) {//로그인 실패
          return null;
        }

        const user = await authResponse.json();
        console.log('user : ', user);

       
        // return user object with their profile data
        return {
          email:user.id,
          name:user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
  ],
});
