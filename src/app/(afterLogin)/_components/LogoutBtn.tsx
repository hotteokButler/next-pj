'use client';

import React from 'react';
import * as S from '@/components/style/afterLoginLayout.styled';
import { ProfileImg } from '@/components/style/common/commonStyle';
import { BiSolidLock, BiSolidLockOpen } from 'react-icons/bi';
import { signOut, useSession  } from 'next-auth/react';
import { useRouter } from 'next/navigation';




export default function LogoutBtn() {
  const router = useRouter();
  const {data : me} = useSession();

  console.log(me);

  const handleLogoutBtn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    signOut({ redirect: false }).then(() => {
      router.replace('/');
    });
  };

  if(!me?.user) {return null};

  return (
    <S.LogoutBtn onClick={handleLogoutBtn}>
      <ProfileImg>
        <img src={me.user?.image!} alt={me.user?.name as string} />
      </ProfileImg>
      <span>
        <S.LogoutBtnTxt $isId={false}>
          {me.user?.name}
          {me.user?.isPrivate === 'true' ? <BiSolidLock /> : <BiSolidLockOpen />}
        </S.LogoutBtnTxt>
        <S.LogoutBtnTxt $isId={true}>&#64;{me.user?.name}</S.LogoutBtnTxt>
      </span>
    </S.LogoutBtn>
  );
}
