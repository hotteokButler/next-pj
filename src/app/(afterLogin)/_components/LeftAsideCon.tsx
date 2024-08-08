'use client';

import * as S from '@/components/style/afterLoginLayout.styled';
import { BsTwitterX } from 'react-icons/bs';
import { GoHome, GoSearch } from 'react-icons/go';
import { IoMailOutline, IoPersonOutline } from 'react-icons/io5';
import { RiQuillPenLine } from 'react-icons/ri';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import LogoutBtn from './LogoutBtn';
import { useSession } from 'next-auth/react';

export default function LeftAsideCon() {
  const segment = useSelectedLayoutSegment();
  const { data } = useSession();

  return (
    <S.LeftSideWrap>
      <div aria-label='side_main_menu'>
        <S.LeftSideMenu>
          {/* logo ==== */}
          <S.ConLogo>
            <Link href={data?.user ? '/home' : '/'} scroll={false}>
              <BsTwitterX />
            </Link>
          </S.ConLogo>

          {/* tab menus ==== */}
          {data?.user && (
            <S.TabMenu>
              <Link href='/home' scroll={false}>
                <S.LinkIcon $state={segment === 'home'} $getNew={false}>
                  <GoHome />
                </S.LinkIcon>
                <S.LinkTxt $state={segment === 'home'}>홈</S.LinkTxt>
              </Link>
              <Link href='/explore'  scroll={false}>
                <S.LinkIcon $state={segment === 'explore' || segment === 'search'} $getNew={false}>
                  <GoSearch />
                </S.LinkIcon>
                <S.LinkTxt $state={segment === 'explore' || segment === 'search'}>탐색하기</S.LinkTxt>
              </Link>
              <Link href='/messages'  scroll={false}>
                <S.LinkIcon $state={segment === 'messages'} $getNew={false}>
                  <IoMailOutline />
                </S.LinkIcon>
                <S.LinkTxt $state={segment === 'messages'}>쪽지</S.LinkTxt>
              </Link>

              {data?.user.email && ( // typescript auth.js 때문에 id 대신 id값 할당한, email 사용
                <Link href={`/${data.user.email}`}  scroll={false}>
                  <S.LinkIcon $state={segment === data.user.email} $getNew={false}>
                    <IoPersonOutline />
                  </S.LinkIcon>
                  <S.LinkTxt $state={segment === data.user.email}>프로필</S.LinkTxt>
                </Link>
              )}

              <S.ComposePostBtn>
                <Link href='/compose/post'  scroll={false}>
                  <RiQuillPenLine />
                  <span>게시하기</span>
                </Link>
              </S.ComposePostBtn>
            </S.TabMenu>
          )}
        </S.LeftSideMenu>

        {data?.user && <LogoutBtn />}
      </div>
    </S.LeftSideWrap>
  );
}
