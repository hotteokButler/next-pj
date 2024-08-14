import React from 'react';
import { getSearchResult } from '../_lib/getSearchResult';
import { useQuery } from '@tanstack/react-query';
import { Post as IPost } from '@/model/Post';
import Post from '../../_components/Post';

type Props = {
  searchParams: {
    q: string;
    pf?: string;
    lf?: string;
  };
};

export default function SearchResult({ searchParams }: Props) {
  const { data, isSuccess } = useQuery<IPost[], Object, IPost[], [_1: string, _2: string, Props['searchParams']]>({
    //queryKey가 dynamic하는 경우 타이핑 설정, 네번째 자리가 key에 대한 type
    queryKey: ['posts', 'search', searchParams], // dynamic queyKey
    queryFn: getSearchResult,
    staleTime: 60 * 1000,
    gcTime: 3 * 60 * 1000,
  });

  if (!isSuccess) return null;

  console.log(data);

  return <>{data && data.map((post: IPost) => <Post key={post.postId} post={post} />)}</>;
}
