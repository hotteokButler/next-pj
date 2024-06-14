'use client';

import { RightSideCon } from '@/components/style/afterLoginLayout.styled';
import Trend from './Trend';
import { usePathname } from 'next/navigation';

export default function TrendSection() {
  const pathname = usePathname();

  const fPathname = pathname.replace('/','');
  const trend = {
    trendSub: '실시간트렌드',
    trendTit: '호떡집사',
    trendPostCnt: 1234,
  };
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
