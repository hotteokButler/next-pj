'use client';

import * as S from '@/components/style/fixedTab.styled';
import React, { useContext } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { ProfileFixedTabContext } from './ProfileFixedTabProvider';
import { useRouter } from 'next/navigation';
import { User as IUser } from '@/model/User';
import { BiSolidLock, BiSolidLockOpen } from 'react-icons/bi';
import { ProfileWrap, ProfilePageImg, ProfileTxtWrap, ProfileFollowBtn } from '@/components/style/common/commonStyle';
import { useQuery } from '@tanstack/react-query';
import { getUser } from '../[username]/_lib/getUser';

export default function ProfileFixedTab({ username }: { username: string }) {
  const { tab, setTab } = useContext(ProfileFixedTabContext);
  const router = useRouter();

  const {
    data: user,
    isSuccess: userDataIsSuccess,
    error,
  } = useQuery<IUser, Object, IUser, [_1: string, _2: string]>({
    queryKey: ['users', username],
    queryFn: getUser,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  console.log(error);

  const onClickBackBtn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.back();
  };

  const onClickMain = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTab('main');
    userDataIsSuccess && router.replace(`/${user.id}`);
  };
  const onClickWithReply = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTab('with_replies');
    userDataIsSuccess && router.replace(`/${user.id}/with_replies`);
  };
  const onClickLikes = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTab('likes');
    userDataIsSuccess && router.replace(`/${user.id}/likes`);
  };

  if (error)
    return (
      <>
        <S.FixedTabWrap>
          <S.FixedTabBackBtn onClick={onClickBackBtn}>
            <GoArrowLeft />
          </S.FixedTabBackBtn>
          <S.FixedTabH4>프로필</S.FixedTabH4>
        </S.FixedTabWrap>
        <ProfileWrap>
          <ProfilePageImg>
          </ProfilePageImg>
          <ProfileTxtWrap>
            <b>{username} 계정이 존재하지 않습니다.</b>
          </ProfileTxtWrap>
        </ProfileWrap>
      </>
    );

  if (!user) return null;

  return (
    <>
      <S.FixedTabWrap>
        <S.FixedTabBackBtn onClick={onClickBackBtn}>
          <GoArrowLeft />
        </S.FixedTabBackBtn>
        <S.FixedTabH4>{user.nickname}</S.FixedTabH4>
      </S.FixedTabWrap>
      <ProfileWrap>
        <ProfilePageImg>
          <img src={user.image} alt={user.nickname} />
        </ProfilePageImg>
        <ProfileTxtWrap>
          <b>
            {user.nickname}
            {user.isPrivate ? <BiSolidLock /> : <BiSolidLockOpen />}
          </b>
          <span>&#64;{user.id}</span>
        </ProfileTxtWrap>
        <ProfileFollowBtn type='button'>팔로우</ProfileFollowBtn>
      </ProfileWrap>

      <S.TabBtns $tab_cnt={3} $bd_btm={true}>
        <S.TabBtn type='button' onClick={onClickMain} $tabState={Boolean(tab === 'main')}>
          게시물
        </S.TabBtn>
        <S.TabBtn type='button' onClick={onClickWithReply} $tabState={Boolean(tab === 'with_replies')}>
          답글
        </S.TabBtn>
        <S.TabBtn type='button' onClick={onClickLikes} $tabState={Boolean(tab === 'likes')}>
          마음에 들어요
        </S.TabBtn>
      </S.TabBtns>
    </>
  );
}
