'use client';
import React from 'react';
import * as S from '@/components/style/afterLoginLayout.styled';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <S.Wrapper>
      <S.InnerWrapper>{children}</S.InnerWrapper>
    </S.Wrapper>
  );
}
