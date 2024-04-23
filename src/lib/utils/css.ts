import {
  type Breakpoint,
  type Helper,
  type HelperMargin,
  type HelperPadding,
  type HelperSpaceStaticSmall,
  type HelperSpaceValue,
} from '../../types';
import {
  isBoolean,
  isBrowser,
  isNumber,
  isObject,
  isString,
  objectMap,
} from './utils';
import { PREFIX } from '../config';
import isEmpty from 'ramda/es/isEmpty';

/* =======================================
 * CSS Variables
 * ======================================= */

export const getCSSVarProps = (
  filterPrefix = '',
  selectorText = ':root',
): string[] => {
  if (!isBrowser) return [];
  if (filterPrefix[0] != '-') filterPrefix = `--${filterPrefix}`;

  return Array.from(document.styleSheets)
    .filter(
      sheet =>
        sheet.href === null || sheet.href.startsWith(window.location.origin),
    )
    .reduce(
      (acc: Array<any>, sheet: any) =>
        (acc = [
          ...acc,
          // @ts-ignore
          ...Array.from(sheet.cssRules).reduce(
            (def: any, rule: any) =>
              (def = rule.selectorText?.includes(selectorText)
                ? [
                    ...def,
                    ...Array.from(rule.style).filter((name: any) =>
                      name.startsWith(`${filterPrefix}`),
                    ),
                  ]
                : def),
            [],
          ),
        ]),
      [],
    );
};

export const getCSSVarValue = (
  prop: string,
  el: Element = document.documentElement,
) => {
  if (!isBrowser) return '';
  if (prop[0] != '-') prop = `--${prop}`;

  const value = window.getComputedStyle(el).getPropertyValue(`${prop.trim()}`);
  return value.trim();
};

/* =======================================
 * Helpers
 * ======================================= */

const margin: HelperMargin[] = [
  'margin',
  'marginTop',
  'marginRight',
  'marginBottom',
  'marginLeft',
];

const padding: HelperPadding[] = [
  'padding',
  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',
];

export const getCssSpaceHelper = (
  helper: Helper,
  size?: HelperSpaceValue | HelperSpaceStaticSmall,
) => {
  if (isNumber(size) && size != 0) return;

  const helperToShorthand = (helper: Helper) => {
    const words = helper.replace(/([A-Z])/g, ' $1').toLowerCase();
    const characters = words.split(' ').map(i => i.charAt(0));
    return `${PREFIX}${characters.join('')}`;
  };

  const createClass = (size: HelperSpaceValue, breakpoint?: Breakpoint) => {
    let bp = breakpoint ? `@${breakpoint}` : '';
    bp = breakpoint === 'base' ? '' : bp;
    const p = helperToShorthand(helper);
    if (size === 'small') return [`${p}:s${bp}`, true];
    if (size === 'base') return [`${p}${bp}`, true];
    if (size === 'medium') return [`${p}:m${bp}`, true];
    if (size === 'large') return [`${p}:l${bp}`, true];
    if (size === 'xLarge') return [`${p}:xl${bp}`, true];
    if (size === '2xLarge') return [`${p}:2xl${bp}`, true];
    if (size === '4xLarge') return [`${p}:4xl${bp}`, true];
    if (size === false || size === 0) return [`${p}:0${bp}`, true];
    return [];
  };

  if (isString(size) || isBoolean(size) || size === 0) {
    return {
      [`${createClass(size)[0]}`]: true,
    };
  }

  if (isObject(size)) {
    return objectMap(size, ([key, val]) =>
      createClass(val as HelperSpaceValue, key as Breakpoint),
    );
  }
};

export const getCssSpaceHelpers = (obj: {
  [key in HelperMargin | HelperPadding]?:
    | HelperSpaceValue
    | HelperSpaceStaticSmall;
}) => {
  if (isEmpty(obj)) return;
  if (isObject(obj)) {
    return Object.entries(obj)
      .filter(([key]) => [...margin, ...padding].includes(key as Helper))
      .map(([key, val]) =>
        getCssSpaceHelper(key as Helper, val as HelperSpaceValue),
      )
      .reduce((acc, val) => ({ ...acc, ...val }), {});
  }
};

export const getFlexHelperClass = (breakpoint?: Breakpoint) => {
  let bp = breakpoint ? `@${breakpoint}` : '';
  bp = breakpoint === 'base' ? '' : bp;
  return {
    [`${PREFIX}flex${bp}`]: true,
  };
};
