'use client';

import { ProfileImg } from '@/components/style/common/commonStyle';
import * as S from '@/components/style/follow';
import Link from 'next/link';

interface IFollower {
  id: string;
  nickname: string;
  image: string;
}

export default function Follow({ follower }: { follower: IFollower }) {
  const onFollow = () => {};
  return (
    <S.FollowerRecommendLis>
      <div aria-label='profile_info'>
        <ProfileImg>
          <img src={follower.image} alt={follower.nickname} />
        </ProfileImg>
        <div aria-label='profile_txt'>
          <Link href={`/${follower.id}`}>
            <S.FolloerTxt $isId={false}>{follower.nickname}</S.FolloerTxt>
          </Link>
          <S.FolloerTxt $isId={true}>&#64;{follower.id}</S.FolloerTxt>
        </div>
      </div>

      <S.FollowBtn type='button' onClick={onFollow}>
        팔로우
      </S.FollowBtn>
    </S.FollowerRecommendLis>
  );
}
