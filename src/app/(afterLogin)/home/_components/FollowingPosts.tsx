'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { Post as IPost } from '@/model/Post';
import Post from '../../_components/Post';
import getFollowingPosts from '../../_lib/getFollowingPosts';

export default function FollowingPosts() {
  const queryClient = useQueryClient();
  const { data, isSuccess } = useQuery({
    queryKey: ['posts', 'followings'],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000,
    gcTime: 5 * 60 * 1000,
  });

  if (!isSuccess) return null;

  console.log(data);

  return (
    <>
    {data && data.map((post: IPost) => <Post key={post.postId} post={post} />)}
   </>
  )
}
