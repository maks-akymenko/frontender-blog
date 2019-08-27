import { useEffect, useState } from 'react';
import { LIGHT_THEME, DARK_THEME } from 'src/shared/constants'

export const useDarkMode = () => {
  const [theme, setTheme] = useState(
    typeof window !== undefined && window.localStorage.getItem('theme') === LIGHT_THEME ? LIGHT_THEME : DARK_THEME
  );

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme(DARK_THEME)
      window.localStorage.setItem('theme', DARK_THEME)
    } else {
      setTheme(LIGHT_THEME)
      window.localStorage.setItem('theme', LIGHT_THEME)
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
