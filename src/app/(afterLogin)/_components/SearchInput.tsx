"use client";

import * as S from '@/components/style/searchCon.styled';
import { GoSearch } from 'react-icons/go';

interface IProps {
  isFixed : boolean;
}

export default function SearchInput({isFixed } : IProps ) {
  return (
    <S.SearchInputWrap $fixed={isFixed}>
      <S.SearchInputForm name='s_qurey' $fixed={isFixed}>
        <S.SearchInputLabel htmlFor='search_query'>
          <GoSearch />
          <S.SearchInputEl id='search_query' name='search_query' placeholder='검색' />
        </S.SearchInputLabel>
      </S.SearchInputForm>
    </S.SearchInputWrap>
  );
}
