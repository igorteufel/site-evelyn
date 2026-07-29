import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Lato, system-ui, sans-serif;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    min-width: 320px;
    -webkit-font-smoothing: antialiased;
  }

  button,
  a {
    font-family: inherit;
  }

  html {
    scroll-behavior: smooth;
  }

  ::selection {
    color: #ffffff;
    background: ${({ theme }) => theme.colors.primary};
  }
`;
