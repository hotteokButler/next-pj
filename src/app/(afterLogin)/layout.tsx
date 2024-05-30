import React from 'react';
import LayoutWrapper from './_components/LayoutWrapper';
import LeftAsideCon from './_components/LeftAsideCon';
import CenterMainCon from './_components/CenterMainCon';
import RightAsideCon from './_components/RightAsideCon';
import MainOuterCon from './_components/MainOuterCon';
import StyledComponentsRegistry from '@/lib/registry';

export default function AfterLoginlayout({ children }: { children: React.ReactNode }) {
  return (
    <StyledComponentsRegistry>
      <LayoutWrapper>
        {/* left aside  ======== */}
        <LeftAsideCon />
        {/* main content  ======== */}
        <MainOuterCon>
          <CenterMainCon>{children}</CenterMainCon>
          {/* right aside  ======== */}
          <RightAsideCon />
        </MainOuterCon>
      </LayoutWrapper>
    </StyledComponentsRegistry>
  );
}
