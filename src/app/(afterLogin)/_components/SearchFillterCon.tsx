'use client';

import * as S from '@/components/style/searchFillter.style';
import { RightSideCon } from '@/components/style/afterLoginLayout.styled';
import React, { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function SearchFillterCon() {
  const [fillterUser , setFillterUser] = useState('');
  const [fillterLocation , setFillterLocation] = useState('');
  const pathname = usePathname();
  const fPathname = pathname.replace('/', '');

  const onChangeUser  : React.ChangeEventHandler<HTMLInputElement> = e  => {
    setFillterUser(e.target?.value);
  }
  const onChangeLocation  :React.ChangeEventHandler<HTMLInputElement> = e  => {
    setFillterLocation(e.target?.value);
    
  }


  return (
    <>
      <RightSideCon $isExplore={fPathname === 'explore'} $bg_white={fPathname === 'explore'}>
        <h3 style={{ marginBottom: '0px' }}>검색 필터</h3>
      </RightSideCon>
      <RightSideCon
        aria-label='search_fillter'
        $isExplore={fPathname === 'explore'}
        $bg_white={fPathname === 'explore'}
      >
        <S.SearchFillterForm name='search_fillter'>
          <S.SearchFillterLi>
            <h4>사용자</h4>
            <S.SearchRadio data-id='f_all'>
              <label htmlFor='f_all'>모든 사용자</label>
              <input type='radio' name='f_user' onChange={onChangeUser}  id='f_all' />
            </S.SearchRadio>
            <S.SearchRadio data-id='f_me'>
              <label htmlFor='f_me'>내가 팔로우하는 사람들</label>
              <input type='radio' name='f_user' onChange={onChangeUser}  id='f_me' />
            </S.SearchRadio>
          </S.SearchFillterLi>
          <S.SearchFillterLi>
            <h4>위치</h4>
            <S.SearchRadio data-id='lf_any'>
              <label htmlFor='lf_any'>어디에서나</label>
              <input type='radio' name='location' onChange={onChangeLocation}  id='lf_any' />
            </S.SearchRadio>
            <S.SearchRadio data-id='lf_me'>
              <label htmlFor='lf_me'>내가 팔로우하는 사람들</label>
              <input type='radio' name='location' onChange={onChangeLocation}  id='lf_me' />
            </S.SearchRadio>
          </S.SearchFillterLi>
        </S.SearchFillterForm>
      </RightSideCon>
    </>
  );
}
