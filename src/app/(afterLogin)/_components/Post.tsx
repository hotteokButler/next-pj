import { ProfileImg } from '@/components/style/common/commonStyle';
import * as S from '@/components/style/post.style';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import Link from 'next/link';
import {useEffect, useState} from 'react';
import 'dayjs/locale/ko';
import PostActionButtons from './PostActionButtons';
import { faker } from '@faker-js/faker';


dayjs.locale('ko');
dayjs.extend(relativeTime);


type IData = {
  postId : number | string,
  User : {
    id : string,
    nickname : string,
    image : string,
  },
  content : string | undefined,
  createdAt : number | string | Date,
  Images : any[],
} | undefined;

interface IProp {
  noImage ?: boolean;
}
export default function Post({noImage} : IProp) {

  const [data,setData] = useState<IData>(undefined);
  const [imgCnt ,setImgCnt] = useState(1);

  useEffect(()=> {
    const randomNum = Math.floor(Math.random() * 10 + 1);
    const getImageCnt = randomNum > 4 ? 4 : randomNum;
    const user = faker.internet.userName();
    const newData : IData = {
      postId: faker.string.uuid(),
      User: {
        id: user,
        nickname: user,
        image: '/hotteokButler.jpg',
      },
      content: '테스트 게시글 입니다',
      createdAt: faker.date.anytime(),
      Images: [],
    }
  
    if(Math.random() > 0.5 && !noImage) {
      for (let i = 0; i <getImageCnt; i++) {
        newData.Images.push({imageId : i, link: faker.image.urlLoremFlickr()});
      }
    }

    setData(()=> newData);
    setImgCnt (() => Number(getImageCnt));
  },[]);
  
  if (!data) return;

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
              data.Images.length > 0 &&
              <S.PostImagesUl $imgCnt={imgCnt}>
                {data.Images.map((images,idx) => <S.PostImages key={idx}><img src={images.link}/></S.PostImages>)}
              </S.PostImagesUl>
            }
        </S.PostContents>
        {/* post action 버튼 */}
        <PostActionButtons/>
        
      </S.PostConentCon>
    </S.PostConentWrap>
  );
}
