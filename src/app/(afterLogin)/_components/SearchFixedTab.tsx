'use client';

import * as S from '@/components/style/fixedTab.styled';
import React, { useCallback, useState } from 'react';
import SearchInput from './SearchInput';
import { useRouter, useSearchParams } from 'next/navigation';

interface IProps {
  q: string;
}

export default function SearchFixedTab({ q }: IProps) {
  const [tab, setTab] = useState('hot');
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleQuery = useCallback(
    (name: string, value: string, queryRemove: boolean) => {
      const params = new URLSearchParams(searchParams.toString());
      queryRemove && params.delete(name);
      queryRemove || params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const onClickHot = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTab('hot');
    router.replace(`/search?q=${q}`, { scroll: false });
  };
  const onClickLive = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTab('live');
    router.replace(`/search?${handleQuery('f', tab ,false)}`, { scroll: false });
  };
  const onClickUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTab('user');
    router.replace(`/search?${handleQuery('f', tab,false)}`, { scroll: false });
  };

  return (
    <S.FixedTabWrap>
      <SearchInput isFixed={false} />
      <S.TabBtns $tab_cnt={3}>
        <S.TabBtn type='button' onClick={onClickHot} $tabState={Boolean(tab === 'hot')}>
          인기
        </S.TabBtn>
        <S.TabBtn type='button' onClick={onClickLive} $tabState={Boolean(tab === 'live')}>
          실시간
        </S.TabBtn>
        <S.TabBtn type='button' onClick={onClickUser} $tabState={Boolean(tab === 'user')}>
          사용자
        </S.TabBtn>
      </S.TabBtns>
    </S.FixedTabWrap>
  );
}
