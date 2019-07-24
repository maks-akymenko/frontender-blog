import { createGlobalStyle } from 'styled-components'

export const theme = {
  primaryDark: '#0C0F13',
  primaryLight: '#C1C1C1',
  primaryGrey: '#8A8787',
  primaryYellow: '#FFCD42',
  primaryYellowHover: '#FFE59C',
};

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: 'Nunito', sans-serif;

    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
  }

  a {
    color: ${({ theme }) => theme.primaryLight};
  }

`
