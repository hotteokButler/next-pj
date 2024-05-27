/*
main page
url : '/'
*/
'use client';
import * as S from '@/components/style/main';
import Link from 'next/link';
import { BsTwitterX } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

export default function RootPage() {
  return (
    <S.MainWrapper>
      {/* Main Logo START====== */}
      <S.MainLogo>
        <Link href='/'>
          <BsTwitterX />
        </Link>
      </S.MainLogo>
      {/* Main Logo E N D====== */}
      {/* Main Content START====== */}
      <S.MainContent>
        <S.MainTitle>지금 일어나고 있는 일</S.MainTitle>
        <S.MainSubTitle>지금 가입하세요.</S.MainSubTitle>
        <S.MainLis $mggap='5%'>
          <Link href='/'>
            <S.MainButton>
              <S.MainButtonIcon>
                <FcGoogle />
              </S.MainButtonIcon>
              <span> Google 계정으로 가입하기</span>
            </S.MainButton>
          </Link>

          <S.MainSection>
            <span>또는</span>
          </S.MainSection>
          <Link href='/i/flow/signup'>
            <S.MainButton
              $noneIcon={true}
              $bgcolor='#1d9bf0'
              $bordercolor='#1d9bf0'
              $hbgcolor='#178cda'
              $fontcolor='#fff'
              $hfontcolor='#fff'
            >
              <span>계정만들기</span>
            </S.MainButton>
          </Link>
        </S.MainLis>
        <S.MainLis>
          <S.MainSubTitle $ftsize='1.2rem' $smft='4vw'>이미 트위터에 가입하셨나요?</S.MainSubTitle>
          <Link href='/login'>
            <S.MainButton
              $noneIcon={true}
              $fontcolor='#1d9bf0'
              $hfontcolor='#1272b2'
              $hbgcolor='#0f86d63a'
            >
              <span>로그인</span>
            </S.MainButton>
          </Link>
        </S.MainLis>
      </S.MainContent>
      {/* Main Content` E N D====== */}
    </S.MainWrapper>
  );
}
