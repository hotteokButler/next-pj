'use client';

import * as S from '@/components/style/post.style';
import React from 'react';
import { FaRegHeart, FaRetweet, FaRegComment, FaArrowUpFromBracket } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PostActionButtons() {
  const commented = false;
  const reposted = false;
  const liked = true;
  const router = useRouter();

  const onClickComment = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const onClickRepost = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log('repost');
  };
  const onClickLike = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log('like');
  };
  const onClickShare = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    console.log('share');
  };

  return (
    <S.PostActionBtnWrap>
      <div data-fill='blue' onClickCapture={onClickComment}>
        <Link href='/compose/comment'>
          <button type='button' className={commented ? 'active' : ''}>
            <FaRegComment />
          </button>
          <span>3</span>
        </Link>
      </div>
      <div data-fill='green' onClickCapture={onClickRepost}>
        <button type='button' className={reposted ? 'active' : ''}>
          <FaRetweet />
        </button>
        <span>4</span>
      </div>
      <div data-fill='pink' onClickCapture={onClickLike}>
        <button type='button' className={liked ? 'active' : ''}>
          <FaRegHeart />
        </button>
        <span>10</span>
      </div>
      <div data-fill='blue' onClickCapture={onClickShare}>
        <button type='button'>
          <FaArrowUpFromBracket />
        </button>
      </div>
    </S.PostActionBtnWrap>
  );
}
