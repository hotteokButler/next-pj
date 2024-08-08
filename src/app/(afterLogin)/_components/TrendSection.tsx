'use client';

import { RightSideCon } from '@/components/style/afterLoginLayout.styled';
import Trend from './Trend';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function TrendSection() {
  const pathname = usePathname();
  const {data} = useSession();

  const fPathname = pathname.replace('/','');
  const trend = {
    trendSub: '실시간트렌드',
    trendTit: '호떡집사',
    trendPostCnt: 1234,
  };

  if(data?.user) {
    return (
      <RightSideCon aria-label='trends' $isExplore={ fPathname === 'explore'} $bg_white={fPathname === 'explore'}>
        <h3>나를 위한 트렌드</h3>
        <Trend trend={trend} />
        <Trend trend={trend} />
        <Trend trend={trend} />
        <Trend trend={trend} />
        <Trend trend={trend} />
        <Trend trend={trend} />
        <Trend trend={trend} />
        <Trend trend={trend} />
        <Trend trend={trend} />
        <Trend trend={trend} />
      </RightSideCon>
    );
  }

  return (
    <RightSideCon aria-label='trends' $isExplore={ fPathname === 'explore'} $bg_white={fPathname === 'explore'}>
      <h4>트렌드를 가져올 수 없습니다.</h4>
    </RightSideCon>

  )

}
