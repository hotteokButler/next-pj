import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = null;

        const authResponse = await fetch('/user/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'applicatoin/json',
          },
          body: JSON.stringify(credentials),
        });

        if (!authResponse.ok) {
          return null;
        }

        if (!user) {
          throw new Error('User not found.');
        }

        // return user object with their profile data
        return user;
      },
    }),
  ],
});
