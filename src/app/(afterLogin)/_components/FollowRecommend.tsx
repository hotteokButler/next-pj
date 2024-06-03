import { RightSideCon } from "@/components/style/afterLoginLayout";
import Follow from './Follow';

export default function FollowRecommend() {
  const f_user = {
    // 임시
    id: 'anonymous02',
    nickname: '익명02',
    image: '/user_02.jpg',
  };
  return (
    <RightSideCon aria-label="follow_recommend">
      <h3>팔로우 추천</h3>
      <Follow follower={f_user} />
      <Follow follower={f_user} />
      <Follow follower={f_user} />
    </RightSideCon>
  )
}
