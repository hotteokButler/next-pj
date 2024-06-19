
'use client';

import { PostConentWrap } from '@/components/style/post.style';
import React from 'react'
import { IData } from './Post';
import { useRouter ,usePathname} from 'next/navigation';

export default function PostArticleWrap({ children ,data }: { children: React.ReactNode , data : IData}) {
  const {postId ,User :{id}} = data;
  const router = useRouter();
  const pathname = usePathname();
  const pathnameArr = pathname.split('/')

  const onClick  = (e: React.MouseEvent<HTMLElement> ) => {
    e.preventDefault();
   if( e.target.nodeName === 'ARTICLE' && !(pathnameArr.includes('status'))) router.replace(`/${id}/status/${postId}`);
  }
  return (
    <PostConentWrap onClick={onClick}>{children}</PostConentWrap>
  )
}


