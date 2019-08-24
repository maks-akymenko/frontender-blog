import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const BioParagraph = styled.p`
  padding: 1rem;
  width: 100%;

  strong {
    color: ${({ theme }) => theme.primaryYellow};
  }

  a {
    display: inline-block;
    padding: 0.1rem;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.primaryYellow};
    color: ${({ theme }) => theme.primaryYellow};
    text-decoration: none;
    transition: all 0.3s linear;
    justify-content: flex-end;
    margin-top: 0.5rem;

    &:hover {
      background: ${({ theme }) => theme.primaryYellow};
      color: ${({ theme }) => theme.primary};
    }
  }
`
