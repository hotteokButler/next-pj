import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#fff',
  black: '#232323',
  blue: '1d9bf0',
  gray: 'cfd9de',
};

const deviceSizes = {
  mobile: "420px",
  tablet: "768px",
  laptop: "1024px",
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `screen and (max-width: ${deviceSizes.laptop})`,
};

export type ThemeColorsType = typeof colors;
export type ThemeMediaSize = typeof device;

export const lightTheme: DefaultTheme = {
  colors,
  mediaSize:device
};

export const darkTheme: DefaultTheme = {
  //후에 추가
};
