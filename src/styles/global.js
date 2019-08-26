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
  codeBlack: '#000',
}

export const darkTheme = {
  ...commonTheme,
  type: 'dark',
  primary: '#0C0F13',
  secondary: '#C1C1C1',
  primaryGrey: '#8A8787',
  primaryYellow: '#FFCD42',
  primaryYellowHover: '#FFE59C',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
};

export const lightTheme = {
  ...commonTheme,
  type: 'light',
  primary: '#FFF',
  secondary: '#0C0F13',
  primaryGrey: '#8A8787',
  primaryYellow: '#FFCF4A',
  primaryYellowHover: '#C7AB5A',
  toggleBorder: '#fff',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
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

  img {
    width: 100%;
  }

  pre {
    background: ${({ theme }) => theme.primaryYellow};
    border-radius: 5px;
    padding: 1rem;
    color: ${({ theme }) => theme.codeBlack};
    overflow-x: scroll;
    user-select: all;
  }
`
