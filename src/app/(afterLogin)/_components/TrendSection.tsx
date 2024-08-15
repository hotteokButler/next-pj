'use client';

import { RightSideCon } from '@/components/style/afterLoginLayout.styled';
import Trend from './Trend';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import getTrends from '../_lib/getTrends';
import { HashTag } from '@/model/HashTag';

export default function TrendSection() {
  const pathname = usePathname();
  const { data: session } = useSession();

  const fPathname = pathname.replace('/', '');

  const { data, isSuccess } = useQuery<HashTag[]>({
    queryKey: ['trends'],
    queryFn: getTrends,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
    enabled: !!session?.user // query 자동 실행 방지 하려면 false로 설정
  });


  if (session?.user) {
    return (
      <RightSideCon aria-label='trends' $isExplore={fPathname === 'explore'} $bg_white={fPathname === 'explore'}>
        <h3>나를 위한 트렌드</h3>
        {isSuccess && 
          data.map((hashTag) => <Trend key={hashTag.tagId} trend={hashTag}/>)
        }
      </RightSideCon>
    );
  }

  return (
    <RightSideCon aria-label='trends' $isExplore={fPathname === 'explore'} $bg_white={fPathname === 'explore'}>
      <h4>트렌드를 가져올 수 없습니다.</h4>
    </RightSideCon>
  );
}
