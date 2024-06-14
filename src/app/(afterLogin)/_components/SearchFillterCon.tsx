'use client';

import * as S from '@/components/style/afterLoginLayout.styled';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function SearchFillterCon() {
  const pathname = usePathname();
  const fPathname = pathname.replace('/', '');
  return (
    <>
      <S.RightSideCon
        aria-label='search_fillter'
        $isExplore={fPathname === 'explore'}
        $bg_white={fPathname === 'explore'}
      >
        <h3 style={{marginBottom:'0px'}}>검색 필터</h3>
      </S.RightSideCon>
    </>
  );
}
