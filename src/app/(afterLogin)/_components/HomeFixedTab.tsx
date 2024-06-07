'use client';

import * as S from '@/components/style/fixedTab.styled';
import React, { useContext, useState } from 'react';
import { FixedTabContext } from './HomeFixedTabProvider';

export default function HomeFixedTab() {
  const { tab, setTab } = useContext(FixedTabContext);
  const onClickRec = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTab('rec');
  };
  const onClickFollow = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTab('follow');
  };

  return (
    <S.FixedTabWrap>
      <h4>홈</h4>
      <S.TabBtns>
        <S.TabBtn type='button' onClick={onClickRec} $tabState={Boolean(tab === 'rec')}>
          추천
        </S.TabBtn>
        <S.TabBtn type='button' onClick={onClickFollow} $tabState={Boolean(tab === 'follow')}>
          팔로우 중
        </S.TabBtn>
      </S.TabBtns>
    </S.FixedTabWrap>
  );
}
