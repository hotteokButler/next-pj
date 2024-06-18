'use client';

import ExploreMainCon from '../_components/ExploreMainCon';
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
    </ExploreMainCon>
  );
}
