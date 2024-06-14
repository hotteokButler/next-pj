'use client';
import React from 'react';
import * as S from "@/components/style/explore.styled";


export default function ExploreMainCon({ children }: { children: React.ReactNode }) {
  return <S.ExploreCon>{children}</S.ExploreCon>;
}
