'use client';
import React, { createContext, useState } from 'react';

export const FixedTabContext = createContext({
  tab: 'rec',
  setTab: (value: 'rec' | 'follow') => {},
});

export default function HomeFixedTabProvider({ children }: { children: React.ReactNode }) {
  const [tab, setTab] = useState('rec');
  return <FixedTabContext.Provider value={{ tab, setTab }}>{children}</FixedTabContext.Provider>;
}
