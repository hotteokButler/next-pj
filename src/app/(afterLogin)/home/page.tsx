'use client';

import * as S from '@/components/style/home.styled';
import HomeFixedTab from '../_components/HomeFixedTab';
import HomeFixedTabProvider from '../_components/HomeFixedTabProvider';
import PostForm from '../_components/PostForm';
import Post from '../_components/Post';
import { Post as IPost } from '@/model/Post';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import getPostRecommens from '../_lib/getPostRecommens';

export default function Home() {
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
    <HomeFixedTabProvider>
      <S.HomeCon>
        <HomeFixedTab />
        <PostForm />
        {/* Posting 노출 */}
        {data && data.map((post: IPost) => <Post key={post.postId} post={post} />)}
      </S.HomeCon>
    </HomeFixedTabProvider>
  );
}
