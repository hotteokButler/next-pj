'use client';

import * as S from '@/components/style/post.style';
import React from 'react';
import { FaRegHeart, FaRetweet, FaRegComment, FaArrowUpFromBracket } from 'react-icons/fa6';

export default function PostActionButtons() {
  const commented = false;
  const reposted = false;
  const liked = true;

  const onClickComment = () => {};
  const onClickRepost = () => {};
  const onClickLike = () => {};
  const onClickShare = () => {};

  return (
    <S.PostActionBtnWrap>
      <div data-fill='blue'>
        <button type='button' onClick={onClickComment} className={commented ? 'active':''}>
          <FaRegComment />
        </button>
        <span>3</span>
      </div>
      <div data-fill='green' >
        <button type='button' onClick={onClickRepost} className={reposted ? 'active':''}>
          <FaRetweet />
        </button>
        <span>4</span>
      </div>
      <div data-fill='pink' >
        <button type='button' onClick={onClickLike} className={liked ? 'active':''}>
          <FaRegHeart />
        </button>
        <span>10</span>
      </div>
      <div data-fill='blue'>
        <button type='button' onClick={onClickShare}>
          <FaArrowUpFromBracket />
        </button>
      </div>
    </S.PostActionBtnWrap>
  );
}
