'use client';

import React from 'react';
import ProfileFixedTabProvider from './ProfileFixedTabProvider';
import ProfileFixedTab from './ProfileFixedTab';
import Post from './Post';

export default function UserProfilePage({children} : {children ?: React.ReactNode}) {
  return (
    <ProfileFixedTabProvider>
      <ProfileFixedTab />
      <div aria-label="user_article">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
      {children && children}
    </ProfileFixedTabProvider>
  );
}
