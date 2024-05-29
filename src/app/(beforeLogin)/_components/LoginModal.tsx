'use client';
import * as S from '@/components/style/modal';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

export default function LoginModal() {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState();
  const [varified, setVarified] = useState(false);
  const [state, setState] = useState(false);
  const router = useRouter();

  const onClickCloseBtn = (e: React.MouseEvent) => {
    e.preventDefault();
    router.back();
  };
  
  const onSubmit = () => {};
  const onChangeId = () => {};
  const onChangePassword = () => {};

  return (
    <S.ModalWrap>
      <S.ModalCon>
        {/* 상단 START =============== */}
        <S.ModalLogo>
          <BsTwitterX />
        </S.ModalLogo>
        <S.ModalClose type='button' onClick={onClickCloseBtn}>
          <IoClose />
        </S.ModalClose>
        <S.ModalSubTitle>계정을 입력해주세요</S.ModalSubTitle>
        {/* 상단 E N D =============== */}
        {/* 본문 START =============== */}
        <S.ModalForm name='login_f' onSubmit={onSubmit}>
          <S.ModalLabel htmlFor='user_id' className={state ? 'on' : ''}>
            <S.ModalTag>아이디</S.ModalTag>
            <S.ModalInputText
              type='text'
              id='user_id'
              name='user_id'
              placeholder='아이디를 입력해 주세요.'
              onChange={onChangeId}
            />
          </S.ModalLabel>
          <S.ModalLabel htmlFor='user_password' className={state ? 'on' : ''}>
            <S.ModalTag>비밀번호</S.ModalTag>
            <S.ModalInputText
              type='password'
              id='user_password'
              name='user_password'
              placeholder='비밀번호를 입력해 주세요.'
              onChange={onChangePassword}
            />
          </S.ModalLabel>
          <S.ModalSubmitBtn $varified={varified} disabled={varified}>로그인</S.ModalSubmitBtn>
        </S.ModalForm>

        {/* 본문 E N D =============== */}
      </S.ModalCon>
    </S.ModalWrap>
  );
}
