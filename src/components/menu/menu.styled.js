import styled from 'styled-components';

export const StyledMenu = styled.nav`
  display: flex;
  justify-content: center;

  padding: 1rem 0;

  a {
    padding: 0.3rem 0.5rem;

    color: ${({ theme }) => theme.primaryYellow};
    transition: color 0.3s ease-in;

    &:hover {
      color: ${({ theme }) => theme.primaryYellowHover};
    }

    &.active {
      border-radius: 5px;

      text-decoration: none;
      background: ${({ theme }) => theme.primaryYellow};
      color: ${({ theme }) => theme.primary};
    }
  }
`;
