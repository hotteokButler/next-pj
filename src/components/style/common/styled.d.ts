import 'styled-components';
import { ThemeColorsType, ThemeMediaSize } from './theme.style';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors?: ThemeColorsType;
    mediaSize?: ThemeMediaSize;
  }
}
