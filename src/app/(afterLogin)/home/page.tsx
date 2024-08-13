'use client';

import * as S from '@/components/style/home.styled';
import HomeFixedTab from '../_components/HomeFixedTab';
import HomeFixedTabProvider from '../_components/HomeFixedTabProvider';
import PostForm from '../_components/PostForm';
import RecommendPosts from './_components/RecommendPosts';
import FollowingPosts from './_components/FollowingPosts';

export default function Home() {


  return (
    <HomeFixedTabProvider>
      <S.HomeCon>
        <HomeFixedTab />
        <PostForm />
        {/* Posting 노출 */}
        <RecommendPosts/>
      </S.HomeCon>
    </HomeFixedTabProvider>
  );
}
