import * as S from '@/components/style/searchCon.styled';
import { GoSearch } from 'react-icons/go';

export default function SearchInput() {
  return (
    <S.SearchInputWrap>
      <S.SearchInputForm name='s_qurey'>
        <S.SearchInputLabel htmlFor='search_query'>
          <GoSearch />
          <S.SearchInputEl id='search_query' name='search_query' placeholder='검색' />
        </S.SearchInputLabel>
      </S.SearchInputForm>
    </S.SearchInputWrap>
  );
}
