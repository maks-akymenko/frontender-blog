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
        Feel free to contact me if you have any ideas<Emoji label="idea">💡</Emoji>, thoughts <Emoji label="thoughts">💭</Emoji>,<a target="_blank" rel="noreferrer noopener" href="https://twitter.com/maks_akymenko"> or just wanna say hi! <Emoji label="wave">👋🏼 </Emoji></a>
      </Title>
      <Title>
        You can also find me here:
      </Title>
      <Links>
        <a target="_blank" rel="noreferrer noopener" href="https://github.com/maximakymenko">
          Github
          {' '}
          <Emoji label="programmer">👨🏻‍💻</Emoji>
        </a>
        <a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/maksakymenko/">
          Linkedin
          {' '}
          <Emoji label="businessman">🤵</Emoji>
        </a>
        <a target="_blank" rel="noreferrer noopener" href="https://www.codewars.com/users/maximakymenko">
          Codewars
          {' '}
          <Emoji label="ninja">🦹🏽‍♂️</Emoji>
        </a>
        <a target="_blank" rel="noreferrer noopener" href="https://css-tricks.com/author/maksakymenko/">
          CSS-tricks
          {' '}
          <Emoji label="cloun">🤡</Emoji>
        </a>
        <a target="_blank" rel="noreferrer noopener" href="https://medium.com/@maks.akymenko">
          Medium
          {' '}
          <Emoji label="Inteligent">👨🏻‍🔬</Emoji>
        </a>
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
  font-size: 2rem;

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
  justify-content: space-evenly;

  a {
    font-size: 1.1rem;
    font-weight: bold;
    padding-bottom: 2rem;
    color: ${({ theme }) => theme.primaryYellow};
    text-decoration: none;
    transition: color 0.3s ease-in;

    &:hover {
      color: ${({ theme }) => theme.primaryYellowHover};
    }
  }
`
