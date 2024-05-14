import 'styled-components';
import { ThemeColorsType } from './theme.style';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    colors?: ThemeColorsType;
  }
}
