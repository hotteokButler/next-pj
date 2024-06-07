'use client';

import * as S from '@/components/style/home.styled';
import HomeFixedTab from '../_components/HomeFixedTab';
import HomeFixedTabProvider from '../_components/HomeFixedTabProvider';

export default function Home() {
  return (
    <HomeFixedTabProvider>
      <S.HomeCon>
        <HomeFixedTab />
      </S.HomeCon>
    </HomeFixedTabProvider>
  );
}
