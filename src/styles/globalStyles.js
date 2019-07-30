import { createGlobalStyle } from 'styled-components'

const commonTheme = {
  mobile: '576px',
  desktop: '1100px',
  ff: "'Nunito', sans-serif",
  formGrey: '#91939526',
  formGreyHover: '#FDFDFD26',
  // toggle colors
  lightBlue: '#83D8FF',
  blue: '#749DD6',
  darkYellow: '#E8CDA5',
  white: '#FFF',
}

export const darkTheme = {
  ...commonTheme,
  type: 'dark',
  primary: '#0C0F13',
  secondary: '#C1C1C1',
  primaryGrey: '#8A8787',
  primaryYellow: '#FFCD42',
  primaryYellowHover: '#FFE59C',
};

export const lightTheme = {
  ...commonTheme,
  type: 'light',
  primary: '#FFF',
  secondary: '#0C0F13',
  primaryGrey: '#8A8787',
  primaryYellow: '#FFCF4A',
  primaryYellowHover: '#C7AB5A',
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
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.secondary};
    transition: background 0.3s ease-in, color 0.3s ease-in;
  }

  a {
    color: ${({ theme }) => theme.secondary};
  }

`
