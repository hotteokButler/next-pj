import NextAuth, { type DefaultSession } from 'next-auth';

// session data에 custom data 추가 하기

declare module 'next-auth' {
  interface Session {
    user: {
      private : boolean;
      role: 'admin' | 'user';
    } & DefaultSession['user'];
  }
}

import { JWT } from '@auth/core/jwt';

declare module '@auth/core/jwt' {
  interface JWT {
    private : boolean;
    role: 'admin' | 'user';
  }
}