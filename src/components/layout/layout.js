import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, darkTheme, lightTheme } from 'src/styles/globalStyles'
import { Toggle } from 'src/components'
import { Emoji } from 'src/styles/Emoji'
import { isMainPath } from 'src/utils'
import { DARK_THEME, LIGHT_THEME, CONTACT_PATH, ABOUT_PATH } from 'src/shared/constants'

import { Container, Footer, Header } from './layout.styled'

const Layout = ({ location, title, children }) => {
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem('theme') === LIGHT_THEME ? lightTheme : darkTheme
  )

  useEffect(() => {
    if (localStorage.getItem('theme') === LIGHT_THEME) {
      setCurrentTheme(lightTheme)
    } else {
      setCurrentTheme(darkTheme)
    }
  }, currentTheme)

  const handleTheme = () => {
    if (currentTheme === lightTheme) {
      setCurrentTheme(darkTheme)
      localStorage.setItem('theme', DARK_THEME)
    } else {
      setCurrentTheme(lightTheme)
      localStorage.setItem('theme', LIGHT_THEME)
    }
  }

  const pickEmoji = title => {
    let emoji
    switch (title) {
      case ABOUT_PATH:
        emoji = <Emoji label="me">🙋🏻‍♂</Emoji>
        break
      case CONTACT_PATH:
        emoji = <Emoji label="detective">🕵🏻‍♂️</Emoji>
        break
      default:
        emoji = <Emoji label="programmer">👨🏻‍💻</Emoji>
        break
    }

    return emoji
  }

  let header

  if (isMainPath(location)) {
    header = (
      <Header>
        {title}
        {pickEmoji(title)}
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
    <ThemeProvider theme={currentTheme}>
      <Container>
        <GlobalStyles />
        <Toggle handleTheme={handleTheme} activeTheme={currentTheme.type} />
        <header>{header}</header>
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}, Maks Akymenko. Made with
          {` `}
          <Emoji label="heart">💛</Emoji>
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
