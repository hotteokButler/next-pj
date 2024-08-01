import NextAuth, { type DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      private : bollean;
      nickname: string;
      role: 'admin' | 'user';
    } & DefaultSession['user'];
  }
}

import { JWT } from '@auth/core/jwt';

declare module '@auth/core/jwt' {
  interface JWT {
    private : bollean;
    nickname: string;
    role: 'admin' | 'user';
  }
}