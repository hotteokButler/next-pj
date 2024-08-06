'use client';
import { SessionProvider } from "next-auth/react";

 // provider 들은 거의 다 Client component


type Props = ({
  children : React.ReactNode;
})

export default function AuthSession( {children} : Props) {
  return <SessionProvider>{children}</SessionProvider>
}

