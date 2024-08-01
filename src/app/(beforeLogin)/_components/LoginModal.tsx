'use client';
import * as S from '@/components/style/modal.styled';
import { signIn } from 'next-auth/react'; // client일때
// import { signIn } from '@/auth'; // server일때

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { TbAlertCircle } from 'react-icons/tb';

export default function LoginModal() {
  const [id, setId] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();

  const onClickCloseBtn = (e: React.MouseEvent) => {
    e.preventDefault();
    router.back();
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setMessage(null);

    try {
      await signIn('credentials', {
        username: id,
        password: password,
        redirect: false, //true 설정 시 server에서 Redirect
      });

      router.replace('/home', {scroll : false});
    } catch (error) {
      console.log(error);
      setMessage('아이디와 비밀번호가 일치하지 않습니다.');
    }
  };
  const onChangeId: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {
      target: { value },
    } = e;
    setId(value);
  };
  const onChangePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const {
      target: { value },
    } = e;
    setPassword(value);
  };

  useEffect(() => {
  }, [id, password]);

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
          <S.ModalLabel htmlFor='user_id' className={id ? 'on' : ''}>
            <S.ModalTag>아이디</S.ModalTag>
            <S.ModalInputText
              type='text'
              id='user_id'
              name='user_id'
              placeholder='아이디를 입력해 주세요.'
              onChange={onChangeId}
            />
          </S.ModalLabel>
          <S.ModalLabel htmlFor='user_password' className={password ? 'on' : ''}>
            <S.ModalTag>비밀번호</S.ModalTag>
            <S.ModalInputText
              type='password'
              id='user_password'
              name='user_password'
              placeholder='비밀번호를 입력해 주세요.'
              onChange={onChangePassword}
            />
          </S.ModalLabel>
          <S.ModalSubmitBtn $varified={Boolean(id && password)} disabled={!Boolean(id && password)}>
            로그인
          </S.ModalSubmitBtn>
        </S.ModalForm>
        {message && (
          <S.ErrorMessage>
            <TbAlertCircle />
            {message}
          </S.ErrorMessage>
        )}

        {/* 본문 E N D =============== */}
      </S.ModalCon>
    </S.ModalWrap>
  );
}
