'use client';

import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Post as IPost } from '@/model/Post';
import { getUserPosts } from '../_lib/getUserPosts';
import Post from '../../_components/Post';

export default function UserPostLists({ username }: { username: string }) {
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

  const queryClient = useQueryClient();
  const user = queryClient.getQueryData(['users',username]);
  console.log('user',user);
  
  if(!user) return null;
  
  return (
    <>
      {postIsSuccess ? (
        <>
          {postData.map((post: IPost) => (
            <Post key={post.postId} post={post} />
          ))}
        </>
      ) : (
        <h3>게시글이 없습니다.</h3>
      )}
    </>
  );
}
