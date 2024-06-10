'use client';

import * as S from '@/components/style/post.style';
import React from 'react';
import { FaRegHeart, FaRetweet, FaRegComment, FaArrowUpFromBracket } from 'react-icons/fa6';

export default function PostActionButtons() {
  return (
    <S.PostActionBtnWrap>
      <div>
        <button type='button' data-fill='blue'>
          <FaRegComment />
        </button>
        <span></span>
      </div>
      <div>
        <button type='button' data-fill='green'>
          <FaRetweet />
        </button>
        <span></span>
      </div>
      <div>
        <button type='button' data-fill='pink'>
          <FaRegHeart />
        </button>
        <span></span>
      </div>
      <button type='button' data-fill='blue'>
        <FaArrowUpFromBracket />
      </button>
    </S.PostActionBtnWrap>
  );
}
