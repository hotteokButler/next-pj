
'use client';

import { PostConentWrap } from '@/components/style/post.style';
import React from 'react'
import { IData } from './Post';
import { useRouter } from 'next/navigation';

export default function PostArticleWrap({ children ,data }: { children: React.ReactNode , data : IData}) {
  const {postId ,User :{id}} = data;
  const router = useRouter();

  const onClick  = (e: React.MouseEvent<HTMLElement> ) => {
    router.replace(`/${id}/status/${postId}`);
  }
  return (
    <PostConentWrap onClickCapture={onClick}>{children}</PostConentWrap>
  )
}


