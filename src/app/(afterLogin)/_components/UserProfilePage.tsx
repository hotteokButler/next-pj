'use client';

import React from 'react';
import ProfileFixedTabProvider from './ProfileFixedTabProvider';
import ProfileFixedTab from './ProfileFixedTab';
import UserPostLists from '../[username]/_components/UserPostLists';

type IProp = {
  children?: React.ReactNode;
  ariaLabel?: string;
  params: { username: string };
};

export default function UserProfilePage({ children, ariaLabel, params }: IProp) {
  const { username } = params;


  return (
    <ProfileFixedTabProvider>
      <ProfileFixedTab username={username}/>
      <div aria-label={ariaLabel ? ariaLabel : 'user_article'}>
        <UserPostLists username={username}/>
      </div>
      {children && children}
    </ProfileFixedTabProvider>
  );
}
