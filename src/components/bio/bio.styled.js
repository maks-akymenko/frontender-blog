import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const BioParagraph = styled.p`
  padding: 1rem;

  strong {
    color: ${({ theme }) => theme.primaryYellow};
  }

  a {
    display: block;
  }
`
