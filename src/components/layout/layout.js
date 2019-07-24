import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { ThemeProvider } from 'styled-components';

import { GlobalStyles, theme } from 'src/utils/globalStyles';

import { Container, Footer, Header } from './layout.styled'
import { Emoji } from 'src/utils/Emoji';

const Layout = ({ location, title, children }) => {
  const isRootPath = location.pathname === `${__PATH_PREFIX__}/`;
  const isAboutPath = location.pathname === `${__PATH_PREFIX__}/about`;
  const isContactPath = location.pathname === `${__PATH_PREFIX__}/contact`;
  let header

  if (isRootPath || isAboutPath || isContactPath) {
    header = (
      <Header>
        <Link to="/">
          {title}
          <Emoji label="programmer">👨🏻‍💻</Emoji>
        </Link>
      </Header>
    )
  } else {
    header = (
      <Header small>
        <Link to="/">
          {title}
          <Emoji label="programmer">👨🏻‍💻</Emoji>
        </Link>
      </Header>
    )
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyles />
        <header>{header}</header>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a target="_blank" rel="noopener noreferrer" href="https://www.gatsbyjs.org">Gatsby</a>
          {` `}
          <span>and with <Emoji label="heart">❤️</Emoji>to frontend</span>
        </Footer>
      </Container>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  location: PropTypes.shape({}),
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Layout
