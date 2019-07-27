import { createGlobalStyle } from 'styled-components'

export const darkTheme = {
  mobile: '576px',
  ff: "'Nunito', sans-serif",
  type: 'dark',
  primaryDark: '#0C0F13',
  primaryLight: '#C1C1C1',
  primaryGrey: '#8A8787',
  primaryYellow: '#FFCD42',
  primaryYellowHover: '#FFE59C',
  formGrey: '#91939526',
  formGreyHover: '#FDFDFD26',
  // toggle colors
  lightBlue: '#83D8FF',
  blue: '#749DD6',
  darkYellow: '#E8CDA5',
  white: '#FFF',
};

export const lightTheme = {
  mobile: '576px',
  ff: "'Nunito', sans-serif",
  type: 'light',
  primaryDark: '#FFF',
  primaryLight: '#0C0F13',
  primaryGrey: '#8A8787',
  primaryYellow: '#FFCF4A',
  primaryYellowHover: '#C7AB5A',
  formGrey: '#91939526',
  formGreyHover: '#FDFDFD26',
  // toggle colors
  lightBlue: '#83D8FF',
  blue: '#749DD6',
  darkYellow: '#E8CDA5',
  white: '#FFF',
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
    font-family: ${({ theme }) => theme.ff};
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    transition: background 0.3s ease-in, color 0.3s ease-in;
  }

  a {
    color: ${({ theme }) => theme.primaryLight};
  }

`
