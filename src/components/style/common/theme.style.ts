import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#fff',
  black: '#232323',
  blue: '#1d9bf0',
  blueOp02: '#1d9bf030',
  gray: '#cfd9de',
  green :'#46d57b',
  greenOp02 :'#46d57b2b',
  pink :'#eb6790',
  pinkOp02 :'#eb679030',
  lightgray: '#e1e5e7',
  darkgray: '#9ea5a8',
  border : '#eee',
  pointColor: '#1d9bf0',
  darkBlue :'#0b80cf',
};

const deviceSizes = {
  mobile: '420px',
  tablet: '768px',
  lgtablet: '985px',
  laptop: '1024px',
  desktop: '1230px',
};

const device = {
  mobile: `all and (max-width: ${deviceSizes.mobile})`,
  tablet: `all and (max-width: ${deviceSizes.tablet})`,
  lgTablet: `all and (max-width: ${deviceSizes.lgtablet})`,
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
