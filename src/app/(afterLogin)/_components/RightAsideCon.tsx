'use client';

import * as S from '@/components/style/afterLoginLayout';
import SearchInput from './SearchInput';

export default function RightAsideCon() {
  return (
      <S.RightSideWrap>
        <SearchInput/>
        <div aria-label='aside_content'>

          
        </div>
      </S.RightSideWrap>
  );
}
