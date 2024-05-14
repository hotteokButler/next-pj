'use client';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/components/style/common/theme.style';
import { GlobalStyle } from './style/common/global.style';

export default function ThemeClient({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
