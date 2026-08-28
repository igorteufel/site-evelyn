import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.typography.family};
    font-size: 16px;
    line-height: 1.5;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    min-width: 320px;
    -webkit-font-smoothing: antialiased;
  }

  button,
  a,
  input,
  select,
  textarea {
    font-family: inherit;
  }

  :focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.focus};
    outline-offset: 3px;
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  h1,
  h2,
  h3 {
    font-family: ${({ theme }) => theme.typography.family};
    text-wrap: balance;
  }

  ::selection {
    color: ${({ theme }) => theme.colors.onBrand};
    background: ${({ theme }) => theme.colors.primary};
  }
`;
