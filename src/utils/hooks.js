import { useEffect, useState } from 'react';
import { LIGHT_THEME, DARK_THEME } from 'src/shared/constants'

export const useDarkMode = () => {
  const [theme, setTheme] = useState(LIGHT_THEME);

  const toggleTheme = () => {
    if (theme === 'light') {
      window.localStorage.setItem('theme', DARK_THEME)
      setTheme(DARK_THEME)
    } else {
      window.localStorage.setItem('theme', LIGHT_THEME)
      setTheme(LIGHT_THEME)
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setTheme(localTheme)
    }
  }, []);

  return [theme, toggleTheme]
};
