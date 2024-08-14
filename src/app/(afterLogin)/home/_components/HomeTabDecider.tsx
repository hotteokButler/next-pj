import React, { useContext } from 'react';
import { FixedTabContext } from '../../_components/HomeFixedTabProvider';
import RecommendPosts from './RecommendPosts';
import FollowingPosts from './FollowingPosts';

export default function HomeTabDecider() {
  const { tab } = useContext(FixedTabContext);

  if (tab === 'rec') return <RecommendPosts />;
  
  return <FollowingPosts />;
}
