'use client';

import * as S from '@/components/style/fixedTab.styled';
import React, { useContext } from 'react';
import { GoArrowLeft } from 'react-icons/go';
import { ProfileFixedTabContext } from './ProfileFixedTabProvider';
import { useRouter } from 'next/navigation';
import { BiSolidLock  ,BiSolidLockOpen} from "react-icons/bi";
import {ProfileWrap ,ProfilePageImg,ProfileTxtWrap,ProfileFollowBtn } from '@/components/style/common/commonStyle'

export default function ProfileFixedTab() {
  const { tab, setTab } = useContext(ProfileFixedTabContext);
  const router = useRouter();
  const user = {
    // 임시
    id: 'hotteokButler',
    nickname: '호떡집사',
    image: '/hotteokButler.jpg',
    private: true,
  };
  const onClickBackBtn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.back();
  };

  const onClickMain = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTab('main');
  };
  const onClickWithReply = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTab('with_reply');
  };
  const onClickLikes = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setTab('likes');
  };

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
            {user.private ? <BiSolidLock/> : <BiSolidLockOpen/>}
          </b>
          <span>&#64;{user.id}</span>
        </ProfileTxtWrap>
        <ProfileFollowBtn type="button">팔로우</ProfileFollowBtn >
      </ProfileWrap>

      <S.TabBtns $tab_cnt={3}>
        <S.TabBtn type='button' onClick={onClickMain} $tabState={Boolean(tab === 'main')}>
          게시물
        </S.TabBtn>
        <S.TabBtn type='button' onClick={onClickWithReply} $tabState={Boolean(tab === 'with_reply')}>
          답글
        </S.TabBtn>
        <S.TabBtn type='button' onClick={onClickLikes} $tabState={Boolean(tab === 'likes')}>
          마음에 들어요
        </S.TabBtn>
      </S.TabBtns>
    </>
  );
}
