'use client';

import * as S from '@/components/style/searchCon.styled';
import { GoSearch, GoArrowLeft } from 'react-icons/go';
import { usePathname ,useRouter} from 'next/navigation';
interface IProps {
  isFixed: boolean;
}

export default function SearchInput({ isFixed }: IProps) {
  const pathname = usePathname();
  const fPathname = pathname.replace('/', '');
  const router = useRouter();

  const onClickBackBtn = ()  => {
    router.back();
  }

  return (
    <S.SearchInputWrap $fixed={isFixed}>
      {['explore', 'search'].includes(String(fPathname)) && (
        <S.SearchBackBtn onClick={onClickBackBtn}>
          <GoArrowLeft />
        </S.SearchBackBtn>
      )}

      <S.SearchInputForm name='s_qurey' $fixed={isFixed}>
        <S.SearchInputLabel htmlFor='search_query'>
          <GoSearch />
          <S.SearchInputEl id='search_query' name='search_query' placeholder='검색' />
        </S.SearchInputLabel>
      </S.SearchInputForm>
    </S.SearchInputWrap>
  );
}
