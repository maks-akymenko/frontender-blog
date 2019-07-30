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
        Feel free to contact me if you have any ideas <Emoji label="idea">💡</Emoji>, thoughts <Emoji label="thoughts">💭</Emoji>, or just wanna say hi! <Emoji label="wave">👋🏼</Emoji>
      </Title>
      <Form name="contact-me" method="POST" data-netlify="true">
        <label htmlFor="name">Name
        </label>
        <input type="text" name="name" id="name" required />
        <label htmlFor="email">Email
        </label>
        <input type="email" name="email" id="email" required />
        <label htmlFor="subject">Subject
        </label>
        <input type="text" name="subject" id="subject" required />
        <label htmlFor="message">Message
        </label>
        <textarea name="message" id="message" required />
        <button type="submit">Send</button>
      </Form>
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
        {/* <a target="_blank" rel="noreferrer noopener" href="https://www.codewars.com/users/maximakymenko">
          CSS-tricks
          {' '}
          <Emoji label="cloun">🤡</Emoji>
        </a>
        <a target="_blank" rel="noreferrer noopener" href="https://www.codewars.com/users/maximakymenko">
          Medium
          {' '}
          <Emoji label="Inteligent">👨🏻‍🔬</Emoji>
        </a> */}
      </Links>
    </Layout>
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
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 25rem;
  margin: 2rem 0;

  label {
    color: ${({ theme }) => theme.primaryYellow};
    font-size: 1.1rem;
    font-weight: bold;
    text-align: left;
    padding: 0.5rem;
  }

  input, textarea, button {
    font-family: ${({ theme }) => theme.ff};
    font-size: 1rem;
    font-weight: bold;
    padding: 1rem;
    color: ${({ theme }) => theme.secondary};
    background: ${({ theme }) => theme.formGrey};
    border-radius: 5px;
    border: none;
  }

  button {
    color: ${({ theme }) => theme.primaryYellow};
    max-width: 15rem;
    margin-top: 2rem;
    transition: background 0.3s ease-in;
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.formGreyHover};
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
