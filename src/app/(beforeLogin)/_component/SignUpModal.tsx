'use client';
import * as S from '@/components/style/modal';
import { useState } from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

export default function SignUpModal() {
  const [id, setId] = useState();
  const [nickname, setNickname] = useState();
  const [password, setPassword] = useState();
  const [file, setFile] = useState();

  const [message, setMessage] = useState();
  const [varified, setVarified] = useState(false);
  const [state, setState] = useState(false);

  const onClickCloseBtn = () => {};
  const onSubmit = () => {};
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
          <S.ModalLabel htmlFor='user_nick' className={state ? 'on' : ''}>
            <S.ModalTag>닉네임</S.ModalTag>
            <S.ModalInputText
              type='text'
              id='user_nick'
              name='user_nick'
              placeholder='닉네임을 입력해 주세요.'
              onChange={onChangeNickname}
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
          <S.ModalLabel htmlFor='user_profile' className={state ? 'on' : ''}>
            <S.ModalTag>프로필</S.ModalTag>
            <S.ModalInputText
              type='file'
              accept="image/*"
              id='user_profile'
              name='user_profile'
              onChange={onChangeFile}
            />
          </S.ModalLabel>
          <S.ModalSubmitBtn $varified={varified} disabled={varified}>가입하기</S.ModalSubmitBtn>
        </S.ModalForm>

        {/* 본문 E N D =============== */}
      </S.ModalCon>
    </S.ModalWrap>
  );
}
