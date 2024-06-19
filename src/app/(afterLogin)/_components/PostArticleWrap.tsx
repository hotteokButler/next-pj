
'use client';

import { PostConentWrap } from '@/components/style/post.style';
import React from 'react'
import { useRouter ,usePathname} from 'next/navigation';
import { IData } from './Post';

export default function PostArticleWrap({ children ,data }: { children: React.ReactNode , data : IData}) {
  const {postId ,User :{id}} = data;
  const router = useRouter();
  const pathname = usePathname();
  const pathnameArr = pathname.split('/');

  const onClick : React.MouseEventHandler<HTMLElement> = (e ) => {
    e.preventDefault();
    const {nodeName} = e.target as HTMLElement
    if( nodeName === 'ARTICLE' && !(pathnameArr.includes('status'))) router.replace(`/${id}/status/${postId}`);
  }
  return (
    <PostConentWrap onClick={onClick}>{children}</PostConentWrap>
  )
}


