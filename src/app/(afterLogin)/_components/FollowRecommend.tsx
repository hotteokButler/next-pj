import { RightSideCon } from '@/components/style/afterLoginLayout.styled';
import Follow from './Follow';
import { User as IUser } from '@/model/User';
import getFollowingRecommends from '../_lib/getFollowingRecommends';
import { useQuery } from '@tanstack/react-query';

export default function FollowRecommend() {

  const { data, isSuccess } = useQuery<IUser[]>({
    queryKey: ['users', 'followRecommends'],
    queryFn: getFollowingRecommends,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  return (
    <RightSideCon aria-label='follow_recommend' $isExplore={false} $bg_white={false}>
      <h3>팔로우 추천</h3>
      {isSuccess ? (
        <>
          {data.map((user) => <Follow key={user.id}  follower={user}/>)}
        </>
      ) : (
        <h6>추천인을 불러올 수 없습니다.</h6>
      )}
    </RightSideCon>
  );
}
