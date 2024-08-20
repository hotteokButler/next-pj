'use client';

import React from 'react';
import ProfileFixedTabProvider from './ProfileFixedTabProvider';
import ProfileFixedTab from './ProfileFixedTab';
import Post from './Post';
import { Post as IPost } from '@/model/Post';
import { useQuery } from '@tanstack/react-query';
import { getUserPosts } from '../[username]/_lib/getUserPosts';

type IProp = {
  children?: React.ReactNode;
  ariaLabel?: string;
  params: { username: string };
};

export default function UserProfilePage({ children, ariaLabel, params }: IProp) {
  const { username } = params;

  const { data: postData, isSuccess: postIsSuccess } = useQuery<
    IPost[],
    Object,
    IPost[],
    [_1: string, _2: string, string]
  >({
    queryKey: ['users', 'posts', username],
    queryFn: getUserPosts,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });




  return (
    <ProfileFixedTabProvider>
      <ProfileFixedTab />
      <div aria-label={ariaLabel ? ariaLabel : 'user_article'}>
        {postIsSuccess ? (
          <>
            {postData.map((post: IPost) => (
              <Post key={post.postId} post={post} />
            ))}
          </>
        ) : (
          <h3>게시글이 없습니다.</h3>
        )}
      </div>
      {children && children}
    </ProfileFixedTabProvider>
  );
}
