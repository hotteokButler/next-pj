import { ReactNode } from 'react';
import LayoutWrapper from './_components/LayoutWrapper';
import LeftAsideCon from './_components/LeftAsideCon';
import CenterMainCon from './_components/CenterMainCon';
import RightAsideCon from './_components/RightAsideCon';
import MainOuterCon from './_components/MainOuterCon';

interface IProps {
  children: ReactNode;
  modal: ReactNode;
}

export default function AfterLoginlayout({ children , modal}: IProps) {

  
  return (
    <LayoutWrapper>
      {/* left aside  ======== */}
      <LeftAsideCon />
      {/* main content  ======== */}
      <MainOuterCon>
        <CenterMainCon>{children}</CenterMainCon>
        {/* right aside  ======== */}
        <RightAsideCon />
      </MainOuterCon>
      {/* modal ======== */}
      {modal}
    </LayoutWrapper>
  );
}
