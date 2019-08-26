import React from 'react'
import PropTypes from 'prop-types'

import { ToggleContainer } from './toggle.styled'
import { LIGHT_THEME } from 'src/shared/constants'
import MoonIcon from 'src/icons/moon.inline.svg'
import SunIcon from 'src/icons/sun.inline.svg'

const toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === LIGHT_THEME
  console.log(isLight);

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  )
}

toggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default toggle
