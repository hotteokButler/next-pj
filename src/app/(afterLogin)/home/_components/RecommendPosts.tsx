'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import getPostRecommens from '../../_lib/getPostRecommens';
import { Post as IPost } from '@/model/Post';
import Post from '../../_components/Post';

export default function RecommendPosts() {
  const queryClient = useQueryClient();
  const { data, isSuccess } = useQuery({
    queryKey: ['posts', 'recommends'],
    queryFn: getPostRecommens,
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
