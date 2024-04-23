import { useEffect, useState } from 'react';
import tinycolor from 'tinycolor2';
import type { Color } from '@biocode/ds';
import type { UseColorValuesFromCSSVar } from './Color.types';

/**
 * Simple way to get theme color values from DOM nodes in client. This could be
 * converted to get these values in the server as well e.g. by building the
 * theme SCSS and parsing it to JSON (e.g. with https://www.npmjs.com/package/css)
 */
export const useColorValuesFromCSSVar = (
  cssVar: Color,
): UseColorValuesFromCSSVar => {
  const [colorValues, setColorValues] = useState<UseColorValuesFromCSSVar>({
    dark: {},
    light: {},
    singleColor: {},
  } as UseColorValuesFromCSSVar);

  useEffect(() => {
    const lightEl = document.querySelector('#b-theme-light') as Element;
    const darkEl = document.querySelector('#b-theme-dark') as Element;
    if (!darkEl || !lightEl) {
      console.error(
        'You need to render <ColorThemeElements /> in _app.js or \
        somewhere else for this utility to work properly.',
      );
    }
    const cssVarStrip = cssVar.replace('var(', '').replace(')', '');
    const darkVal = window
      .getComputedStyle(darkEl)
      .getPropertyValue(cssVarStrip);
    const lightVal = window
      .getComputedStyle(lightEl)
      .getPropertyValue(cssVarStrip);
    const darkColor = tinycolor(darkVal);
    const lightColor = tinycolor(lightVal);
    const colorsMatch = darkVal === lightVal;

    setColorValues({
      dark: {
        hex: darkColor.toHexString(),
        hsl: darkColor.toHslString(),
      },
      light: {
        hex: lightColor.toHexString(),
        hsl: lightColor.toHslString(),
      },
      ...(colorsMatch && {
        singleColor: {
          hex: lightColor.toHexString(),
          hsl: lightColor.toHslString(),
        },
      }),
    });
  }, [cssVar]);

  return colorValues;
};
