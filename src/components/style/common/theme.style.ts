import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#fff',
  black: '#232323',
  blue: '1d9bf0',
  gray: 'cfd9de',
};

export type ThemeColorsType = typeof colors;

export const lightTheme: DefaultTheme = {
  colors,
};

export const darkTheme: DefaultTheme = {
  //후에 추가
};
