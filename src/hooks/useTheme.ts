import { useState, useEffect } from 'react';

export type Theme = 'light' | 'dark';

/**
 * General hook for managing a two-state theme value stored in localStorage.
 * It does NOT apply the theme to the document; that responsibility is left to
 * the caller (which can toggle a class/data-attr on a specific container).
 *
 * `key` defaults to 'theme' but callers (such as blog pages) can supply a
 * different key like 'blog-theme' so that the preference is scoped.
 */
export function useTheme(key: string = 'theme') {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const stored = localStorage.getItem(key) as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    } else if (prefersDark) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, theme);
  }, [key, theme]);

  const toggle = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return { theme, toggle };
}
