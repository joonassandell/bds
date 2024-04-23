import { isBrowser } from '../../lib/utils';
import { PREFIX, SERVICE_URL } from '../../lib/config';
import { type ThemeColorMode, type ThemeProviderProps } from './';
import { ThemeContext } from './ThemeContext';
import { updateSourceMedia as updateMedia } from './Theme.utils';
import { useCookie } from '../../lib/hooks/useCookie';
import React, {
  type FC,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const ThemeProvider: FC<ThemeProviderProps> = ({
  children,
  initialTheme = 'light',
  root = isBrowser ? document.documentElement : undefined,
  updateWithCookie = true,
  updateSourceMedia,
}) => {
  const [themeCookie, setThemeCookie] = useCookie('b_theme');
  const [themeState, setThemeState] = useState<ThemeColorMode>();
  const matchMediaDark = useMemo(() => {
    if (isBrowser) return window.matchMedia('(prefers-color-scheme: dark)');
    return {} as MediaQueryList;
  }, []);
  const systemTheme = matchMediaDark.matches ? 'dark' : 'light';

  const setTheme = useCallback(
    (themeColorMode: ThemeColorMode) => {
      const themeClass = `${PREFIX}theme:${themeColorMode}`;

      setThemeState(themeColorMode);

      if (updateWithCookie) {
        // Do not recreate the cookie if it matches with the color mode on mount
        if (themeColorMode != themeCookie) {
          setThemeCookie(themeColorMode, {
            domain: window.location.hostname.includes(SERVICE_URL.domain)
              ? SERVICE_URL.domain
              : undefined,
            expires: 365,
          });
        }
      }

      root?.classList.forEach(c => {
        c.startsWith(`${PREFIX}theme`) &&
          c != themeClass &&
          root?.classList.remove(c);
      });
      root?.classList.add(themeClass);

      updateSourceMedia && updateMedia(themeColorMode);
    },
    [
      root,
      setThemeCookie,
      setThemeState,
      themeCookie,
      updateSourceMedia,
      updateWithCookie,
    ],
  );

  useEffect(() => {
    if (themeCookie && updateWithCookie) {
      setTheme(themeCookie as ThemeColorMode);
    } else {
      initialTheme === 'system'
        ? setTheme(systemTheme)
        : setTheme(initialTheme);
    }
  }, [initialTheme, setTheme, systemTheme, themeCookie, updateWithCookie]);

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) =>
      e.matches ? setTheme('dark') : setTheme('light');
    matchMediaDark.addEventListener('change', listener);
    () => matchMediaDark.removeEventListener('change', listener);
  }, [matchMediaDark, setTheme]);

  const context = useMemo(
    () => ({
      setTheme,
      theme: themeState,
    }),
    [setTheme, themeState],
  );

  return (
    <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
  );
};
