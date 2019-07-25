/* inspired by A PEN BY Benjamin Réthoré https://codepen.io/bnthor/pen/WQBNxO */
import React from 'react'
import PropTypes from 'prop-types'

import { Wrapper } from './toggle.styled'
import { DARK_THEME } from 'src/shared/constants'

const Toggle = ({ handleTheme, activeTheme }) => {
  const isDarkTheme = activeTheme === DARK_THEME

  return (
    <Wrapper>
      <input
        onChange={handleTheme}
        checked={isDarkTheme}
        type="checkbox"
        hidden
        id="day-night"
      />
      <label htmlFor="day-night" className="toggle">
        <span className="toggle__handler">
          <span className="crater crater--1" />
          <span className="crater crater--2" />
          <span className="crater crater--3" />
        </span>
        <span className="star star--1" />
        <span className="star star--2" />
        <span className="star star--3" />
        <span className="star star--4" />
        <span className="star star--5" />
        <span className="star star--6" />
      </label>
    </Wrapper>
  )
}

Toggle.propTypes = {
  handleTheme: PropTypes.func.isRequired,
  activeTheme: PropTypes.string.isRequired,
}

export default Toggle

