'use client';

import ExploreMainCon from '../_components/ExploreMainCon';
import Post from '../_components/Post';
import SearchFixedTab from '../_components/SearchFixedTab';
import SearchResult from './_components/SearchResult';


type Props = {
  searchParams: {
    q: string;
    pf?: string;
    lf?: string;
  };
};

export default function Search({searchParams} : Props) {
  
  return (
    <ExploreMainCon>
      <SearchFixedTab q={searchParams.q} />
      <SearchResult searchParams={searchParams}/>
    </ExploreMainCon>
  );
}
