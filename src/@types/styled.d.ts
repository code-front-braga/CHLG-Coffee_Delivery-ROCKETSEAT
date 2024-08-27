import { defaultTheme } from '../styles/Theme/default';

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
