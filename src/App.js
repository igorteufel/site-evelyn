import React from 'react';
import Landingpage from './pages/landingpage';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global-styles';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Landingpage />
      </ThemeProvider>
    </>
  );
}

export default App;
