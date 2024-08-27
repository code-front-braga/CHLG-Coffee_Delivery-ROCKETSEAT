import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/Theme/default';
import { GlobalStyles } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Routes';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
