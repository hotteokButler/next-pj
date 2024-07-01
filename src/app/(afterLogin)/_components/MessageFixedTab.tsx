'use client';


import { useRouter } from 'next/navigation';
import React from 'react';
import * as S from '@/components/style/fixedTab.styled';
import { GoArrowLeft } from 'react-icons/go';

export default function MessageFixedTab() {
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
      <S.FixedTabH4>쪽지</S.FixedTabH4>
    </S.FixedTabWrap>
  );
}
