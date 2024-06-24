'use client';
import React, { createContext, useState } from 'react';

export const ProfileFixedTabContext = createContext({
  tab: 'main',
  setTab : (value: 'main' | 'with_reply' | 'likes') =>{},
});

export default function ProfileFixedTabProvider({ children }: { children: React.ReactNode }) {
  const [tab, setTab] = useState('main');
  return <ProfileFixedTabContext.Provider value={{ tab, setTab }}>{children}</ProfileFixedTabContext.Provider>;
}
