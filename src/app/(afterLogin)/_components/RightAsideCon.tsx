'use client';

import * as S from '@/components/style/afterLoginLayout.styled';
import SearchInput from './SearchInput';
import TrendSection from './TrendSection';
import FollowRecommend from './FollowRecommend';
import { useSelectedLayoutSegment } from 'next/navigation';
import SearchFillterCon from './SearchFillterCon';

export default function RightAsideCon() {
  const segment = useSelectedLayoutSegment();

  return (
    <S.RightSideWrap $noGap={['explore','search'].includes(String(segment))}>
      {['explore','search'].includes(String(segment)) || <SearchInput isFixed={true}/>}

      <div aria-label='aside_content'>
        {segment === 'search' && <SearchFillterCon />}
        {/* 나를 위한 트렌드 ========== */}
        {segment !== 'explore' && <TrendSection />}

        {/* 팔로우추천 ========== */}
        <FollowRecommend />
      </div>
    </S.RightSideWrap>
  );
}
