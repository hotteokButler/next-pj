'use client';

import { faker } from '@faker-js/faker';
import MessageFixedTab from '../../_components/MessageFixedTab';
import 'dayjs/locale/ko';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import * as S from '@/components/style/message.styled';
import { ProfileImg } from '@/components/style/common/commonStyle';

dayjs.locale('ko');
dayjs.extend(relativeTime);

export default function MessageRoomPage() {
  const user = {
    id: 'lalala',
    nickname: '랄라',
    image: faker.image.avatar(),
  };

  const messages = [
    { messageId: 1, roomId: 123, id: 'me', content: '안녕하세요~~ 오랜만입니다 어떻게 지내시고 계신가요?', createdAt: new Date() },
    { messageId: 2, roomId: 123, id: 'lalala', content: '잘 지냅니다 그럼 이만.', createdAt: new Date() },
  ];

  return (
    <>
      <MessageFixedTab />

      <S.MessageRoomTop>
        <ProfileImg $img_size='65px'>
          <img src={faker.image.avatar()} />
        </ProfileImg>
        <br />
        <S.MessageRoomInfoUser>
          <b>{user.nickname}</b>
          <br />
          <span>&#64;{user.id}</span>
        </S.MessageRoomInfoUser>
      </S.MessageRoomTop>

      <S.MessageContentWrap>
        {messages &&
          messages.map((message, idx) => {
            if (message.id == 'me') {
              // 내 메시지
              return (
                <S.MyMessage key={idx}>
                  <p data-area='message_box'>{message.content}</p>
                  <span data-area='time_zone'>{dayjs(message.createdAt).format('YYYY년 MM월 DD일 h:mm A')}</span>
                </S.MyMessage>
              );
            } else {
              return (
                <S.OthersMessage key={idx}>
                  <p data-area='message_box'>{message.content}</p>
                  <span data-area='time_zone'>{dayjs(message.createdAt).format('YYYY년 MM월 DD일 h:mm A')}</span>
                </S.OthersMessage>
              );
            }
          })}
      </S.MessageContentWrap>
    </>
  );
}
