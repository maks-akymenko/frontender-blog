import styled from 'styled-components';

export const Container = styled.div`
  max-width: 50rem;

  margin-right: auto;
  margin-left: auto;
  padding: 1.5rem 0.75rem;
`

export const Header = styled.h1`
  font-size: ${({ small }) => small ? '1.5rem' : '2.5rem'};
  font-weight: normal;
  text-align: ${({ small }) => small ? 'left' : 'center'};
  color: ${({ theme }) => theme.primaryYellow};

  padding-top: 1rem;
  margin: 0;

  a {
    color: ${({ theme }) => theme.primaryYellow};
    text-decoration: none;
    transition: text-shadow 0.4s ease-in;
  }
`

export const Footer = styled.footer`
  text-align: center;
`
