'use client';
import React from 'react';
import * as S from '@/components/style/afterLoginLayout.styled';

export default function MainOuterCon({ children }: { children: React.ReactNode }) {
  return <S.OuterWrap>{children}</S.OuterWrap>;
}
