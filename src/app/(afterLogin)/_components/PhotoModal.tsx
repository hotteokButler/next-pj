'use client';

import * as S from '@/components/style/modal.styled';
import Post from './Post';
import { useState } from 'react';

import PostCommentForm from './PostCommentForm';
import PostActionButtons from './PostActionButtons';
import { GoArrowLeft } from 'react-icons/go';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useRouter } from 'next/navigation';

interface IProps {
  params: {
    username: string;
    id: string;
    photoId: string;
  };
}

export default function PhotoModal({ params }: IProps) {
  const [openState ,setOpenState] = useState(true);

  const router = useRouter();
  const onClickBackBtn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    router.back();
  };
  const onClickArticleOpenBtn: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setOpenState(prev => !prev);
  };

  return (
    <S.PhotoModalWrap>
      <S.PhotoArea>
        <S.PhotoImagesCon>
          <img src='/test_.jpeg' />
        </S.PhotoImagesCon>
        <S.PhotoBtnArea>
          <PostActionButtons colorDefSet={false} />
        </S.PhotoBtnArea>

        <S.PostImageBackBtn onClick={onClickBackBtn}>
          <GoArrowLeft />
        </S.PostImageBackBtn>
        
        <S.PostArticleOpenBtn onClick={onClickArticleOpenBtn}>
          <MdKeyboardDoubleArrowRight />
        </S.PostArticleOpenBtn>

      </S.PhotoArea>

      {/* article영역 */}
      <S.PhotoArticleArea $set_open={openState}>
        <Post noImage />
        <PostCommentForm />
        <Post />
        <Post />
        <Post />
      </S.PhotoArticleArea>
    </S.PhotoModalWrap>
  );
}
