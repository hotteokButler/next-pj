import { Post as IPost } from '@/model/Post';
import { QueryFunction } from '@tanstack/react-query';

export const getSearchResult: QueryFunction<
  IPost[],
  [_1: string, _2: string, searchParams: { q: string; pf?: string; lf?: string }]
> = async ({ queryKey }) => {
  const [_1, _2, searchParams] = queryKey;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/search/${searchParams.q}?${searchParams.toString()}`, {
    next: {
      tags: ['posts', 'search',searchParams.q], //next caching은 객체가 들어갈 수 없음
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
