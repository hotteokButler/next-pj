import * as S from '@/components/style/trends.styled';
import Link from 'next/link';

interface ITrend {
  trendSub: string;
  trendTit: string;
  trendPostCnt: number | string;
}
export default function Trend({ trend }: { trend: ITrend }) {
  return (
    <S.TrendLi>
      <Link href='/home'>
        <S.TrendSub>{trend.trendSub}</S.TrendSub>
        <S.TrendTit>{trend.trendTit}</S.TrendTit>
        <S.TrendPostCnt>{trend.trendPostCnt} posts</S.TrendPostCnt>
      </Link>
    </S.TrendLi>
  );
}
