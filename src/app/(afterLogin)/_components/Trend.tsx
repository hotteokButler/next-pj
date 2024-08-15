import * as S from '@/components/style/trends.styled';
import { HashTag } from '@/model/HashTag';
import Link from 'next/link';


export default function Trend({ trend }: { trend: HashTag }) {
  return (
    <S.TrendLi>
      <Link href={`/search?q=${trend.title}&src=trend_click&vertical=trends`}>
        <S.TrendSub>실시간트렌드</S.TrendSub>
        <S.TrendTit>{trend.title}</S.TrendTit>
        <S.TrendPostCnt>{trend.count.toLocaleString()} posts</S.TrendPostCnt>
      </Link>
    </S.TrendLi>
  );
}
