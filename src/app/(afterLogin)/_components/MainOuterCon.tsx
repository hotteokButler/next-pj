'use client';
import React from 'react';
import * as S from '@/components/style/afterLoginLayout';

export default function MainOuterCon({ children }: { children: React.ReactNode }) {
  return <S.OuterWrap>{children}</S.OuterWrap>;
}
