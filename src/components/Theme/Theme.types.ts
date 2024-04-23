import { type PrimitiveDivPropsWithRef } from '../../types';
import { type PropsWithChildren } from 'react';

export type ThemeColorMode = 'light' | 'dark';

export interface ThemeProviderProps extends PropsWithChildren {
  /**
   * Add initial theme to be loaded.
   *
   * To prevent initial flashes of the opposite theme apply the script found
   * from ThemeProvider.stories.tsx
   */
  initialTheme?: ThemeColorMode | 'system';

  /**
   * Apply to which element the theme classes should be added. If the provider
   * is rendered also in the server you can use the `isBrowser` utility e.g.
   * isBrowser ? document.body : undefined;
   */
  root?: Document['documentElement'] | Document['body'];

  /**
   * Make `<picture> <source>` elements with `media="(prefers-color-scheme:*)"`
   * respect custom theme preference overrides. Note that if you have theme
   * based images, it's possible that changing the theme could create a flash of
   * the opposite image in server renderes apps since updating happens in the
   * front-end. So, it's recommended that you apply the picture source settings
   * beforehand in the server or in some other way if possible.
   */
  updateSourceMedia?: boolean;

  /**
   * If theme should change based on the initially applied cookie on mount.
   *
   * Set to `false` if the theme is controlled with some other store.
   */
  updateWithCookie?: boolean;
}

export interface ThemeContextProps {
  setTheme: (value: ThemeColorMode) => void;
  theme: ThemeColorMode | undefined;
}

export interface ThemeProps extends PrimitiveDivPropsWithRef {
  /**
   * Theme color mode
   *
   * `'light'`: Apply default light theme
   *
   * `'dark'`: Apply dark theme
   */
  mode?: ThemeColorMode;
}
