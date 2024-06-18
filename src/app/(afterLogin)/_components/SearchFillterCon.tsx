'use client';

import * as S from '@/components/style/searchFillter.style';
import { RightSideCon } from '@/components/style/afterLoginLayout.styled';
import React, { useState, useCallback } from 'react';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

export default function SearchFillterCon() {
  const [fillterUser, setFillterUser] = useState('');
  const [fillterLocation, setFillterLocation] = useState('');
  const pathname = usePathname();
  const fPathname = pathname.replace('/', '');
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleQuery = useCallback(
    (name: string, value: string, queryRemove: boolean) => {
      const params = new URLSearchParams(searchParams.toString());
      queryRemove && params.delete(name);
      queryRemove || params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  const onChangeUser: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {
      target: { value },
    } = e;
    value === 'none'
    ? router.replace(`/search?${handleQuery('pf', value, true)}`, { scroll: false })
    : router.replace(`/search?${handleQuery('pf', value, false)}`, { scroll: false });
    setFillterUser(() => value);
  };
  const onChangeLocation: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {
      target: { value },
    } = e;
    value === 'none' ? router.replace(`/search?${handleQuery('lf', value, true)}`, { scroll: false })
    : router.replace(`/search?${handleQuery('lf', value, false)}`, { scroll: false });
    fillterLocation === 'none'
    setFillterLocation(() => value);
  };

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
            <S.SearchRadio>
              <label htmlFor='f_all'>모든 사용자</label>
              <input
                type='radio'
                name='pf'
                defaultChecked={searchParams.get('pf') === 'f_all' || !searchParams.get('pf')}
                onChange={onChangeUser}
                id='f_all'
                value='none'
              />
            </S.SearchRadio>
            <S.SearchRadio data-id='f_me'>
              <label htmlFor='f_me'>내가 팔로우하는 사람들</label>
              <input
                type='radio'
                name='pf'
                defaultChecked={searchParams.get('pf') === 'f_me'}
                onChange={onChangeUser}
                id='f_me'
                value='on'
              />
            </S.SearchRadio>
          </S.SearchFillterLi>
          <S.SearchFillterLi>
            <h4>위치</h4>
            <S.SearchRadio>
              <label htmlFor='lf_any'>어디에서나</label>
              <input
                type='radio'
                name='lf'
                defaultChecked={searchParams.get('lf') === 'lf_any' || !searchParams.get('lf')}
                onChange={onChangeLocation}
                id='lf_any'
                value='none'
              />
            </S.SearchRadio>
            <S.SearchRadio data-id='lf_me'>
              <label htmlFor='lf_me'>내가 팔로우하는 사람들</label>
              <input
                type='radio'
                name='lf'
                defaultChecked={searchParams.get('lf') === 'lf_me'}
                onChange={onChangeLocation}
                id='lf_me'
                value='on'
              />
            </S.SearchRadio>
          </S.SearchFillterLi>
        </S.SearchFillterForm>
      </RightSideCon>
    </>
  );
}
