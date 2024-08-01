'use client';

import React from 'react';
import * as S from '@/components/style/afterLoginLayout.styled';
import { ProfileImg } from '@/components/style/common/commonStyle';
import { BiSolidLock, BiSolidLockOpen } from 'react-icons/bi';
import { signOut, useSession  } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { User } from 'next-auth';

export interface LoginUser extends User {
  
}


export default function LogoutBtn() {
  const router = useRouter();
  const {data} = useSession();
  const me = data ;

  const handleLogoutBtn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    signOut({ redirect: false }).then(() => {
      router.replace('/');
    });
  };

  if(!me?.user) {return null};

  return (
    <S.LogoutBtn>
      <ProfileImg>
        <img src={me.user?.image!} alt={me.user?.nickname} />
      </ProfileImg>
      <span>
        <S.LogoutBtnTxt $isId={false}>
          {me.user?.nickname}
          {me.user?.private ? <BiSolidLock /> : <BiSolidLockOpen />}
        </S.LogoutBtnTxt>
        <S.LogoutBtnTxt $isId={true}>&#64;{me.user?.id}</S.LogoutBtnTxt>
      </span>
    </S.LogoutBtn>
  );
}
