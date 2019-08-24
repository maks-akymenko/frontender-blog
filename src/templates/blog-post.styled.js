import styled from 'styled-components'

export const BackButton = styled.div`
  font-size: 1.1rem;
  padding: 1rem;
`
export const Date = styled.small`
  font-size: 1rem;
  color: ${({ theme }) => theme.primaryGrey};

  text-transform: uppercase;
`

export const Title = styled.h1`
  font-size: 2.5rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.25rem;
  }

  letter-spacing: 0.15rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primaryYellow};

  text-align: center;
  margin: 1rem 0;

  a {
    color: ${({ theme }) => theme.primaryYellow};
    text-transform: uppercase;
    text-decoration: underline;

    transition: color 0.3s ease-in;

    &:hover {
      color: ${({ theme }) => theme.primaryGrey};
    }
  }
`

export const Description = styled.p`
  font-size: 1.1rem;
`

export const Arrows = styled.ul`
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;

  li {
    padding: 1rem;
  }

  a {
    color: ${({ theme }) => theme.primaryYellow};
    font-weight: bold;
  }
`

export const ReadingTime = styled.div`
  font-size: 1rem;
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`
