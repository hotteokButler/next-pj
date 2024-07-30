'use client';

import * as S from '@/components/style/modal.styled';
import React from 'react';
import {onSubmit} from '../_lib/signup';
import { useRouter } from 'next/navigation';
import { BsTwitterX } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { TbAlertCircle } from "react-icons/tb";
import { useFormState, useFormStatus } from 'react-dom';

const showMessage = (message ?: string  | null) : string  => {
  if (message === 'no_id') return '아이디를 입력하세요';
  if (message === 'no_nickname') return '닉네임을 입력하세요';
  if (message === 'no_password') return '비밀번호를 입력하세요';
  if (message === 'no_image') return '이미지를 업로드하세요';
  if (message === 'user_exists') return '이미 사용 중인 아이디 입니다.';
  return '';
};

export default function SignUpModal() {
  const [state, formAction] = useFormState(onSubmit, null);
  const { pending } = useFormStatus();

  const router = useRouter();

  const onClickCloseBtn = (e: React.MouseEvent) => {
    e.preventDefault();
    router.back();
  };

  const onChangeId = () => {};
  const onChangeNickname = () => {};
  const onChangePassword = () => {};
  const onChangeFile = () => {};

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
        <S.ModalSubTitle>계정을 생성하세요.</S.ModalSubTitle>
        {/* 상단 E N D =============== */}
        {/* 본문 START =============== */}
        <S.ModalForm name='login_f' action={formAction}>
          <S.ModalLabel htmlFor='user_id'>
            <S.ModalTag>아이디</S.ModalTag>
            <S.ModalInputText
              type='text'
              id='user_id'
              name='user_id'
              placeholder='아이디를 입력해 주세요.'
              onChange={onChangeId}
            />
          </S.ModalLabel>
          <S.ModalLabel htmlFor='user_nick'>
            <S.ModalTag>닉네임</S.ModalTag>
            <S.ModalInputText
              type='text'
              id='user_nick'
              name='user_nick'
              placeholder='닉네임을 입력해 주세요.'
              onChange={onChangeNickname}
            />
          </S.ModalLabel>
          <S.ModalLabel htmlFor='user_password'>
            <S.ModalTag>비밀번호</S.ModalTag>
            <S.ModalInputText
              type='password'
              id='user_password'
              name='user_password'
              placeholder='비밀번호를 입력해 주세요.'
              onChange={onChangePassword}
            />
          </S.ModalLabel>
          <S.ModalLabel htmlFor='user_profile'>
            <S.ModalTag>프로필</S.ModalTag>
            <S.ModalInputText
              type='file'
              accept='image/*'
              id='user_profile'
              name='user_profile'
              onChange={onChangeFile}
            />
          </S.ModalLabel>
          {state  && (
            <S.ErrorMessage>
              <TbAlertCircle />
              {showMessage(state?.message ? state?.message : '')}
            </S.ErrorMessage>
          )}

          <S.ModalSubmitBtn $varified={state?.message !== null} disabled={pending}>
            가입하기
          </S.ModalSubmitBtn>
        </S.ModalForm>

        {/* 본문 E N D =============== */}
      </S.ModalCon>
    </S.ModalWrap>
  );
}
