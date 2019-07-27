import styled from 'styled-components'

export const CookieContainer = styled.div`
  text-align: center;

  p {
    font-size: 1.1rem;
    font-weight: bold;
  }
`

export const CookieButton = styled.a`
  @import url('https://fonts.googleapis.com/css?family=Cookie&display=swap');

  font-family:'Cookie', cursive;
  font-size: 1.5rem;
  display: inline-flex;
  align-items: center;
  height:2.5rem;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primaryYellow};;
  border-radius: 5px;
  border: 1px solid transparent;
  padding: 0.25rem 0.5rem;
  letter-spacing: 0.6px;
  box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5);
  margin: 0 auto;
  transition: 0.3s all linear;

  &:hover, &:active, &:focus {
    text-decoration: none;
    box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5);
    opacity: 0.85;
  }

  img {
    width: 1.5rem;
  }

  span {
    margin-left: 5px;
  }
`
