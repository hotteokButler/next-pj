'use client';

import * as S from '@/components/style/searchCon.styled';
import { GoSearch, GoArrowLeft } from 'react-icons/go';
import { usePathname ,useRouter ,useSearchParams} from 'next/navigation';

import { useRef } from 'react';
interface IProps {
  isFixed: boolean;
}

export default function SearchInput({ isFixed }: IProps) {
  const pathname = usePathname();
  const fPathname = pathname.replace('/', '');
  const router = useRouter();
  const queryRef = useRef<HTMLInputElement>(null);
  const searchParam = useSearchParams();
  const nowSearchParam = searchParam.get('q');


  const onClickBackBtn : React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.back();
  };

  const onSubmit : React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    router.replace( `/search?q=${queryRef.current?.value}`, { scroll: false })

  };
  return (
    <S.SearchInputWrap $fixed={isFixed}>
      {['explore', 'search'].includes(String(fPathname)) && (
        <S.SearchBackBtn onClick={onClickBackBtn}>
          <GoArrowLeft />
        </S.SearchBackBtn>
      )}

      <S.SearchInputForm name='s_qurey' $fixed={isFixed} onSubmit={onSubmit}>
        <S.SearchInputLabel htmlFor='q'>
          <GoSearch />
          <S.SearchInputEl id='q' name='q' ref={queryRef} placeholder='검색' defaultValue={ nowSearchParam ? nowSearchParam : '' } />
        </S.SearchInputLabel>
      </S.SearchInputForm>
    </S.SearchInputWrap>
  );
}
