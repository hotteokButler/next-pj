'use client';

import ExploreMainCon from '../_components/ExploreMainCon';
import Post from '../_components/Post';
import SearchFixedTab from '../_components/SearchFixedTab';


interface IProps {
  searchParams : {
    q : string;
    pf ?: string;
    lf ?: string;
  }
}


export default function Search({searchParams} : IProps) {
  
  return (
    <ExploreMainCon>
      <SearchFixedTab q={searchParams.q} />
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </ExploreMainCon>
  );
}
