import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#fff',
  black: '#232323',
  blue: '#1d9bf0',
  gray: '#cfd9de',
  border : '#eee',
  pointColor: '#1d9bf0',
};

const deviceSizes = {
  mobile: '420px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1450px',
};

const device = {
  mobile: `all and (max-width: ${deviceSizes.mobile})`,
  tablet: `all and (max-width: ${deviceSizes.tablet})`,
  laptop: `all and (max-width: ${deviceSizes.laptop})`,
  desktop: `all and (max-width: ${deviceSizes.desktop})`,
};

export type ThemeColorsType = typeof colors;
export type ThemeMediaSize = typeof device;

export const lightTheme: DefaultTheme = {
  colors,
  mediaSize: device,
};

export const darkTheme: DefaultTheme = {
  //후에 추가
};
