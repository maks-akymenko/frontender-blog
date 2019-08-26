import React from 'react'
import PropTypes from 'prop-types';

import { ToggleContainer } from './toggle.styled';

import MoonIcon from 'src/icons/moon.inline.svg';
import SunIcon from 'src/icons/sun.inline.svg';

const toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

toggle.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
}

export default toggle;
