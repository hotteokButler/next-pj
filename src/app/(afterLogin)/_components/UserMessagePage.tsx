import React from 'react';
import MessageFixedTab from './MessageFixedTab';
import MessageRoomLi from './MessageRoomLi';

export default function UserMessagePage() {
  return (
    <>
      <MessageFixedTab />
      <main aria-label="message list">
        <MessageRoomLi/>
        <MessageRoomLi/>
        <MessageRoomLi/>
        <MessageRoomLi/>
        <MessageRoomLi/>
      </main>
    </>
  );
}
