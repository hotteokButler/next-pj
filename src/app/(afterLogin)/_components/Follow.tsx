'use client';

import { ProfileImg } from '@/components/style/common/commonStyle';
import * as S from '@/components/style/follow.styled';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { User as IUser } from '@/model/User';



export default function Follow({ follower }: { follower: IUser }) {
  const { data } = useSession();

  const onFollow: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
  };

  return (
    <S.FollowerRecommendLis>
      <div aria-label='profile_info'>
        <Link href={`/${follower.id}`}>
          <ProfileImg>
            <img src={follower.image} alt={follower.nickname} />
          </ProfileImg>
        </Link>
        <div aria-label='profile_txt'>
          <Link href={`/${follower.id}`}>
            <S.FolloerTxt $isId={false}>{follower.nickname}</S.FolloerTxt>
          </Link>
          <S.FolloerTxt $isId={true}>&#64;{follower.id}</S.FolloerTxt>
        </div>
      </div>

      {data?.user && (
        <S.FollowBtn type='button' onClick={onFollow}>
          팔로우
        </S.FollowBtn>
      )}

      {!data?.user && (
        <S.FollowBtn type='button' onClick={onFollow}>
          <Link href='/login'>팔로우</Link>
        </S.FollowBtn>
      )}
    </S.FollowerRecommendLis>
  );
}
