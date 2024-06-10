import { ProfileImg } from '@/components/style/common/commonStyle';
import * as S from '@/components/style/post.style';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import React from 'react';
import 'dayjs/locale/ko';
import PostActionButtons from './PostActionButtons';


dayjs.locale('ko');
dayjs.extend(relativeTime);

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
        {/* user 정보 */}
        <S.PostMeta>
          <Link href={`/${data.User.id}`}>
            <span aria-label='user_nickname'>{data.User.nickname}</span>
            &nbsp;
            <span aria-label='user_id'>&#64;{data.User.id}</span>
            &nbsp;
            <span aria-label='post_data'>&middot;&nbsp;{dayjs(data.createdAt).fromNow()}</span>
          </Link>
        </S.PostMeta>
        {/* 게시글 시작 */}
        <S.PostContents>
            <p aria-label='content_text'>{data.content}</p>
            {
              data.Images &&
              <ul aria-label='content_images'>
                {data.Images.map((images,idx) => <S.PostImages key={idx}><img src={images}/></S.PostImages>)}
              </ul>
            }
        </S.PostContents>
        {/* post action 버튼 */}
        <PostActionButtons/>
        
      </S.PostConentCon>
    </S.PostConentWrap>
  );
}
