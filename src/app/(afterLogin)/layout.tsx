import React from 'react';
import LayoutWrapper from './_components/LayoutWrapper';
import LeftAsideCon from './_components/LeftAsideCon';
import CenterMainCon from './_components/CenterMainCon';
import RightAsideCon from './_components/RightAsideCon';

export default function AfterLoginlayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutWrapper>
      {/* left aside  ======== */}
      <LeftAsideCon />
      {/* main content  ======== */}
      <CenterMainCon>{children}</CenterMainCon>
      {/* right aside  ======== */}
      <RightAsideCon />
    </LayoutWrapper>
  );
}
