'use client';

import React from 'react';
import { faker } from '@faker-js/faker';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useRouter } from 'next/navigation';
import * as S from '@/components/style/message.styled';
import { ProfileImg } from '@/components/style/common/commonStyle';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function MessageRoomLi() {
  const router = useRouter();
  const user = {
    id: 'lalala',
    nickname: '랄라',
    Messages: [
      { roomId: 123, content: '안녕하세요.', createdAt: new Date() },
      { roomId: 123, content: '그럼 이만.', createdAt: new Date() },
    ],
  };
 
  const onClick : React.MouseEventHandler<HTMLElement> = (e) =>{
    e.preventDefault();
    router.push(`/messages/${user.Messages.at(-1)?.roomId}`)
  } 
  return (
    <S.MessageRoomLis onClickCapture={onClick}>
      <ProfileImg>
        <img src={faker.image.avatar()} alt={user.nickname} />
      </ProfileImg>
      <S.MessageRoomInfo>
        <S.MessageRoomInfoUser>
          <b>{user.nickname}</b>
          <span>&#64;{user.id}</span>
          <span>&middot;</span>
          <span>{dayjs(user.Messages.at(-1)?.createdAt).fromNow(true)}</span>
        </S.MessageRoomInfoUser>
        <S.MessageRoomPreview>{user.Messages.at(-1)?.content}</S.MessageRoomPreview>
      </S.MessageRoomInfo>
    </S.MessageRoomLis>
  );
}
