'use client';

import React from 'react';
import * as S from '@/components/style/afterLoginLayout.styled';
import { ProfileImg } from '@/components/style/common/commonStyle';
import { BiSolidLock  ,BiSolidLockOpen} from "react-icons/bi";

export default function LogoutBtn() {
  const user = {
    // 임시
    id: 'hotteokButler',
    nickname: '호떡집사',
    image: '/hotteokButler.jpg',
    private : false
  };
  return (
    <S.LogoutBtn>
      <ProfileImg>
        <img src={user.image} alt={user.nickname} />
      </ProfileImg>
      <span>
        <S.LogoutBtnTxt $isId={false}>
          {user.nickname}
          {user.private ? <BiSolidLock/> : <BiSolidLockOpen/>}
          </S.LogoutBtnTxt>
        <S.LogoutBtnTxt $isId={true}>&#64;{user.id}</S.LogoutBtnTxt>
      </span>
    </S.LogoutBtn>
  );
}
