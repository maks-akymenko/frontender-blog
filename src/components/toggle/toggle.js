/* inspired by A PEN BY Benjamin Réthoré https://codepen.io/bnthor/pen/WQBNxO */
import React from 'react'
import PropTypes from 'prop-types'

import { DARK_THEME } from 'src/shared/constants'
import {
  Crater,
  Star,
  Toggler,
  ToggleInput,
  ToggleHandler,
  ToggleWrapper
} from './toggle.styled'

const Toggle = ({ handleTheme, activeTheme }) => {
  const isDarkTheme = activeTheme === DARK_THEME

  return (
    <ToggleWrapper>
      <ToggleInput
        onChange={handleTheme}
        checked={isDarkTheme}
        type="checkbox"
        hidden
        id="toggler"
      />
      <Toggler htmlFor="toggler">
        <ToggleHandler>
          <Crater />
          <Crater />
          <Crater />
        </ToggleHandler>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
      </Toggler>
    </ToggleWrapper>
  )
}

Toggle.propTypes = {
  handleTheme: PropTypes.func.isRequired,
  activeTheme: PropTypes.string.isRequired,
}

export default Toggle

