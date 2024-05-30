'use client';
import React from 'react';
import * as S from '@/components/style/afterLoginLayout';

export default function CenterMainCon({ children }: { children: React.ReactNode }) {
  return <S.ConWrap>{children}</S.ConWrap>;
}
