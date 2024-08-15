'use client';

import React from 'react';
import ProfileFixedTabProvider from './ProfileFixedTabProvider';
import ProfileFixedTab from './ProfileFixedTab';
import Post from './Post';

type IProp = {
  children ?: React.ReactNode,
  ariaLabel ?: string,
}

export default function UserProfilePage({children , ariaLabel} : IProp) {
  return (
    <ProfileFixedTabProvider>
      <ProfileFixedTab />
      <div aria-label={ ariaLabel ? ariaLabel : "user_article"}>
      </div>
      {children && children}
    </ProfileFixedTabProvider>
  );
}
