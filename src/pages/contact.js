import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Layout, Menu, SEO } from 'src/components'
import { CONTACT_PATH } from 'src/shared/constants'
import { Emoji } from 'src/styles/Emoji'

const Contact = ({ location }) => {
  return (
    <Layout location={location} title={CONTACT_PATH}>
      <SEO title={CONTACT_PATH} />
      <Menu />
      <Title>
        Feel free to contact me if you have any ideas, thoughts or interesting projects <Emoji label="work">🏗</Emoji>
      </Title>
      <Title medium>
        ✔ Drop me an email: <a href="mailto:maks.akymenko@gmail.com">maks.akymenko@gmail.com</a>
      </Title>
      <Title medium>
        ✔ Send me a message in Telegram: <a href="https://t.me/maksakymenko">@maksakymenko</a>
      </Title>
      <Title >
        You can also find me here:
      </Title>
      <Links>
        <a target="_blank" rel="noreferrer noopener" href="https://github.com/maximakymenko">Github</a>
        <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/maksakymenko/">Linkedin</a>
        <a target="_blank" rel="noreferrer noopener" href="https://medium.com/@maks.akymenko">Medium</a>
        <a target="_blank" rel="noreferrer noopener" href="https://css-tricks.com/author/maksakymenko/">CSS-tricks</a>
        <a target="_blank" rel="noreferrer noopener" href="https://www.codewars.com/users/maximakymenko">Codewars</a>
        <a target="_blank" rel="noreferrer noopener" href="https://twitter.com/maks_akymenko">Twitter</a>
      </Links>
    </Layout >
  )
}

Contact.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
}

export default Contact

const Title = styled.h2`
  font-size: ${({ medium }) => medium ? '1.5rem' : '2rem'};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 1.25rem;
    margin: 3rem 0;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.primaryYellow};

    &:hover {
      color: ${({ theme }) => theme.primaryYellowHover};
    }
  }
`

const Links = styled.div`
  display: flex;
  flex-wrap: wrap;

  a {
    font-size: 1.5rem;
    font-weight: bold;
    padding: 0 2rem 2rem 0;
    color: ${({ theme }) => theme.primaryYellow};
    text-decoration: none;
    transition: color 0.3s ease-in;

    &:hover {
      color: ${({ theme }) => theme.primaryYellowHover};
    }
  }
`
