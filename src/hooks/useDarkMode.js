import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'light');
  }

  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const colorTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return [colorTheme, setTheme];
};
