'use client';

import { ProfileImg } from '@/components/style/common/commonStyle';
import * as S from '@/components/style/post.style';
import React, { ChangeEventHandler, FormEventHandler, useRef, useState } from 'react';
import { RxImage } from 'react-icons/rx';

export default function PostForm() {
  const imgRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState('');
  const [validate, setValidate] = useState(false);

  const user = {
    id: 'hotteokButler',
    image: '/hotteokbutler.jpg',
  };

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {};
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };
  const onClickBtn = () => {
    imgRef.current?.click();
  };
  return (
    <S.PostFormCon>
      <ProfileImg>
        <img src={user.image} alt={user.id} />
      </ProfileImg>
      <S.PostFormWrap name='posting' onSubmit={onSubmit}>
        <textarea name='post_contents' id='post_contents' placeholder='무슨일이 일어나고 있나요?'></textarea>
        <hr />
        <input type='file' name='post_img' id='post_img' ref={imgRef} hidden multiple accept='image/*' />
        <S.PostIconBox>
          <span onClick={onClickBtn}>
            <RxImage />
          </span>
          <S.PostSubmitBtn $validate={validate} type="submit" disabled={validate} >게시하기</S.PostSubmitBtn>
        </S.PostIconBox>
      </S.PostFormWrap>
    </S.PostFormCon>
  );
}
