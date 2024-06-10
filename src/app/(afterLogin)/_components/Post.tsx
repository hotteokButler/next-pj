import { ProfileImg } from '@/components/style/common/commonStyle';
import * as S from '@/components/style/post.style';
import Link from 'next/link';
import React from 'react';

export default function Post() {
  const data = {
    User: {
      id: 'hotteokButler',
      nickname: '호떡집사',
      image: '/hotteokButler.jpg',
    },
    content: '테스트 게시글 입니다',
    createdAt: new Date(),
    Images: ['/test_.jpeg'],
  };

  return (
    <S.PostConentWrap>
      {/* profile  ===== */}
      <ProfileImg>
        <Link href={`/${data.User.id}`}>
          <img src={data.User.image} alt={data.User.nickname} />
        </Link>
      </ProfileImg> 
      {/* posting contents */}
      <S.PostConentCon>
        <S.PostMeta>
          <Link href={`/${data.User.id}`}>
            <span aria-label='user_nickname'>{data.User.nickname}</span>
            &nbsp;
            <span aria-label='user_id'>&#64;{data.User.id}</span>
            &nbsp;
            <span aria-label='post_data'></span>
          </Link>
        </S.PostMeta>

      </S.PostConentCon>
    </S.PostConentWrap>
  );
}
