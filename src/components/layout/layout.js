import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, darkTheme, lightTheme } from 'src/styles/global'
import { Toggle } from 'src/components'
import { Emoji } from 'src/styles/Emoji'
import { isMainPath } from 'src/utils'
import { useDarkMode } from 'src/utils/hooks'
import { CONTACT_PATH, ABOUT_PATH } from 'src/shared/constants'

import { Container, DesktopOnly, Footer, Header } from './layout.styled'

const Layout = ({ location, title, children }) => {
  const img = useStaticQuery(graphql`
  query imgQuery {
    me: file(absolutePath: { regex: "/max-max.png/" }) {
      childImageSharp {
        fixed(height: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`)

  const imgStyle = {
    position: 'fixed',
    bottom: 0,
    right: 0,
  }

  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

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
    <ThemeProvider theme={themeMode}>
      <>
        <DesktopOnly>
          <Image
            fixed={img.me.childImageSharp.fixed}
            alt="Maks image"
            style={imgStyle}
          />
        </DesktopOnly>
        <Container>
          <GlobalStyles />
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          <header>{header}</header>
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()},{` `} Maks Akymenko. Made with
          {` `}
            <Emoji label="heart">💛</Emoji>{` `}
            <small>Source code is available <a target="_blank" rel="noopener noreferrer" href="https://github.com/maximakymenko/frontender-blog">here</a></small>
            <div>
              <small><b>Sun</b> icon made by <a href="https://www.flaticon.com/authors/smalllikeart">smalllikeart</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>{` `}{` `}
              <small><b>Moon</b> icon made by <a href="https://www.freepik.com/home">Freepik</a> from <a href="https://www.flaticon.com">www.flaticon.com</a></small>
            </div>
          </Footer>
        </Container>
      </>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  location: PropTypes.shape({}),
  title: PropTypes.string,
  children: PropTypes.node,
}

export default Layout
