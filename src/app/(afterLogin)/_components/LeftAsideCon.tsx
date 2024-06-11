'use client';

import * as S from '@/components/style/afterLoginLayout.styled';
import { BsTwitterX } from 'react-icons/bs';
import { GoHome, GoSearch } from 'react-icons/go';
import { IoMailOutline, IoPersonOutline } from 'react-icons/io5';
import { RiQuillPenLine } from 'react-icons/ri';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import LogoutBtn from './LogoutBtn';

export default function LeftAsideCon() {
  const segment = useSelectedLayoutSegment();

  const user = {
      // 임시
      id: 'hotteokButler',
      nickname: '호떡집사',
      image: '/hotteokButler.jpg',
      private : false
  };

  return (
    <S.LeftSideWrap>
      <div aria-label='side_main_menu'>
        <S.LeftSideMenu>
          {/* logo ==== */}
          <S.ConLogo>
            <Link href='/home'>
              <BsTwitterX />
            </Link>
          </S.ConLogo>

          {/* tab menus ==== */}
          <S.TabMenu>
            <Link href='/home'>
              <S.LinkIcon $state={segment === 'home'} $getNew={false}>
                <GoHome />
              </S.LinkIcon>
              <S.LinkTxt $state={segment === 'home'}>홈</S.LinkTxt>
            </Link>
            <Link href='/explore'>
              <S.LinkIcon $state={segment === 'explore'} $getNew={false}>
                <GoSearch />
              </S.LinkIcon>
              <S.LinkTxt $state={segment === 'explore'}>탐색하기</S.LinkTxt>
            </Link>
            <Link href='/messages'>
              <S.LinkIcon $state={segment === 'messages'} $getNew={false}>
                <IoMailOutline />
              </S.LinkIcon>
              <S.LinkTxt $state={segment === 'messages'}>쪽지</S.LinkTxt>
            </Link>

            {user.id && (
              <Link href={`/${user.id}`}>
                <S.LinkIcon $state={segment === user.id} $getNew={false}>
                  <IoPersonOutline />
                </S.LinkIcon>
                <S.LinkTxt $state={segment === user.id}>프로필</S.LinkTxt>
              </Link>
            )}

            <S.ComposePostBtn>
              <Link href='/compose/post'>
                <RiQuillPenLine />
                <span>게시하기</span>
              </Link>
            </S.ComposePostBtn>
          </S.TabMenu>
        </S.LeftSideMenu>

        <LogoutBtn/>
      </div>
    </S.LeftSideWrap>
  );
}
