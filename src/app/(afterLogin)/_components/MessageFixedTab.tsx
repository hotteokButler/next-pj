'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import * as S from '@/components/style/fixedTab.styled';
import { GoArrowLeft } from 'react-icons/go';


type IProp = {
  userNickname ?: string,
}
export default function MessageFixedTab({userNickname} : IProp) {
  const router = useRouter();

  const onClickBackBtn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.back();
  };

  return (
    <S.FixedTabWrap>
      <S.FixedTabBackBtn onClick={onClickBackBtn}>
        <GoArrowLeft />
      </S.FixedTabBackBtn>
      <S.FixedTabH4>{userNickname ? userNickname : '쪽지'}</S.FixedTabH4>
    </S.FixedTabWrap>
  );
}
