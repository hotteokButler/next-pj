'use client';
import React from 'react';
import * as S from '@/components/style/afterLoginLayout';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return <S.Wrapper>{children}</S.Wrapper>;
}
