'use client';

import { ProfileImg } from '@/components/style/common/commonStyle';
import * as S from '@/components/style/modal.styled';

import { useRouter } from 'next/navigation';
import { useState, ChangeEventHandler, FormEventHandler, useRef } from 'react';
import { RxImage } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

export default function ComposePostCommentModal() {
  const imgRef = useRef<HTMLInputElement>(null);
  const [content, setContent] = useState('');
  const [validate, setValidate] = useState(false);

  const router = useRouter();
  const user = {
    id: 'hotteokButler',
    image: '/hotteokbutler.jpg',
  };
  const onClickCloseBtn = (e: React.MouseEvent) => {
    e.preventDefault();
    router.back();
  };
  const onClickBtn = () => {
    imgRef.current?.click();
  };
  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {};
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
  };

  return (
    <S.ModalWrap>
      <S.PostModalCon>
        {/* 닫기버튼 ========= */}
        <S.ModalClose type='button' onClick={onClickCloseBtn}>
          <IoClose />
        </S.ModalClose>

        {/* 내용 */}
        <S.PostFormCon>
          <ProfileImg>
            <img src={user.image} alt={user.id} />
          </ProfileImg>
          <S.PostFormWrap name='posting' onSubmit={onSubmit}>
            <textarea name='post_contents' id='post_contents' placeholder='답글 게시하기'></textarea>
            <hr />
            <input type='file' name='post_img' id='post_img' ref={imgRef} hidden multiple accept='image/*' />
            <S.PostIconBox>
              <span onClick={onClickBtn}>
                <RxImage />
              </span>
              <S.PostSubmitBtn $validate={validate} type='submit' disabled={validate}>
                답글
              </S.PostSubmitBtn>
            </S.PostIconBox>
          </S.PostFormWrap>
        </S.PostFormCon>
      </S.PostModalCon>
    </S.ModalWrap>
  );
}
