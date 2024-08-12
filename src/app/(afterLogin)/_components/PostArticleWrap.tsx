
'use client';

import { PostConentWrap } from '@/components/style/post.style';
import React from 'react'
import { useRouter ,usePathname} from 'next/navigation';
import { Post } from '@/model/Post';

export default function PostArticleWrap({ children ,post }: { children: React.ReactNode , post : Post}) {
  const {postId ,User :{id}} = post;
  const router = useRouter();
  const pathname = usePathname();
  const pathnameArr = pathname.split('/');

  const onClick : React.MouseEventHandler<HTMLElement> = (e ) => {
    e.preventDefault();
    const {nodeName} = e.target as HTMLElement
    if( nodeName === 'ARTICLE' && !(pathnameArr.includes('status'))) router.push(`/${id}/status/${postId}`);
  }
  return (
    <PostConentWrap onClick={onClick}>{children}</PostConentWrap>
  )
}


