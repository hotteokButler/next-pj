'use client';

import * as S from '@/components/style/afterLoginLayout';
import SearchInput from './SearchInput';
import TrendSection from './TrendSection';
import FollowRecommend from './FollowRecommend';

export default function RightAsideCon() {
  return (
    <S.RightSideWrap>
      <SearchInput />
      <div aria-label='aside_content'>
        {/* 나를 위한 트렌드 ========== */}
          <TrendSection/>

        {/* 팔로우추천 ========== */}
        <FollowRecommend/>
      </div>
    </S.RightSideWrap>
  );
}
