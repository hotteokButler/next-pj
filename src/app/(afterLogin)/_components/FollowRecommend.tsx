import { RightSideCon } from "@/components/style/afterLoginLayout.styled";
import Follow from './Follow';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function FollowRecommend() {
  const segment = useSelectedLayoutSegment();
  const f_user = {
    // 임시
    id: 'anonymous02',
    nickname: '익명02',
    image: '/user_02.jpg',
  };
  return (
    <RightSideCon aria-label="follow_recommend" $isExplore={false} $bg_white={false}>
      <h3>팔로우 추천</h3>
      <Follow follower={f_user} />
      <Follow follower={f_user} />
      <Follow follower={f_user} />
    </RightSideCon>
  )
}
