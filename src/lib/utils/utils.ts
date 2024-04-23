import {
  Children,
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';
import { is, isEmpty, isNil } from 'ramda';

export const isBoolean = (value: any): value is boolean =>
  typeof value === 'boolean';

export const isNumber = (value: any): value is number => is(Number, value);

export const isString = (value: any): value is string => is(String, value);

export const isNumeric = (number: any): boolean => {
  if (isEmpty(number) || isNil(number)) return false;
  return !Number.isNaN(Number(number)) && !isNaN(parseFloat(number.toString()));
};

export const isObject = (value: any): value is object =>
  typeof value === 'object';

export const isServer = typeof window === 'undefined';

export const isBrowser = !isServer;

/**
 * Next.js build can't resolve the el.type correctly except in server side
 * for some reason so the last condition is for next.js build. This is fine
 * since this check is mainly for strings vs functional components.
 */
export const isSvg = (el: any): boolean =>
  (isValidElement(el) && String(el.type).includes('Svg')) || isValidElement(el);

export const toNumber = (number: string | number): number =>
  isString(number) ? parseFloat(number) : number;

export const countDecimals = (number: number | string | undefined | null) => {
  if (isNil(number) || isEmpty(number) || !isNumeric(number)) {
    return 0;
  }

  const num = toNumber(number);
  const text = number.toString();

  if (text.indexOf('e-') > -1) {
    const [, trail] = text.split('e-');
    const deg = parseInt(trail, 10);
    return deg;
  }

  if (Math.floor(num) !== number) {
    const decimals = number.toString().split('.')[1];
    return (decimals && decimals.length) || 0;
  }

  return 0;
};

export const getTwoFirstCharsInUppercase = (str?: string): string[] => {
  if (!str) return [''];
  const characters = str.split(' ').map(i => i.charAt(0));
  const firstChar = characters[0]?.toUpperCase();
  let secondChar = characters[1]?.toUpperCase();
  if (!secondChar?.match(/[a-z]|[0-9]/i)) secondChar = '';

  return [firstChar, secondChar];
};

export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number,
): ((...args: Parameters<F>) => ReturnType<F>) => {
  let timeout = 0;

  const debounced = (...args: any[]) => {
    clearTimeout(timeout);
    timeout = window.setTimeout(() => func(...args), waitFor);
  };

  return debounced as unknown as (...args: Parameters<F>) => ReturnType<F>;
};

type GeneralOject = {
  [key: string]: any;
};

export const objectMap = (
  obj: GeneralOject,
  fn: (value: [string, any], i: number) => unknown[],
) => Object.fromEntries(Object.entries(obj).map(fn));

export const objectEntriesMap = (
  obj: GeneralOject,
  fn: (value: [string, any], i: number) => unknown,
) => Object.entries(obj).map(fn);

export const getCurrentYear = (): number => new Date().getFullYear();

/**
 * Get milliseconds from a float value.
 * e.g. 0.5 -> 500
 */
export const getMilliSeconds = (number: number) => (number % 1) * 1000;

/**
 * Generate id
 */
export const getId = () => Date.now();

/**
 * Merge refs, solution from react-merge-refs.
 */
export const mergeRefs =
  <T extends HTMLElement>(
    ...refs: React.ForwardedRef<T>[]
  ): React.RefCallback<T> =>
  (node: T) => {
    for (const ref of refs) {
      if (ref) {
        if (typeof ref === 'function') ref(node);
        if ('current' in ref) ref.current = node;
      }
    }
  };

/**
 * Recursively map React chilren to run desired function per each element
 */
export const childrenRecursiveMap = (
  children: ReactNode | ReactNode[],
  fn: (child: ReactElement) => ReactElement,
): ReactElement[] => {
  if (!children) return [];
  return Children.map(children as ReactElement[], child => {
    if (!isValidElement(child)) return child;
    let _child = child as ReactElement;

    if (_child.props.children) {
      _child = cloneElement(_child, {
        children: childrenRecursiveMap(_child.props.children, fn),
      });
    } else {
      _child = cloneElement(_child);
    }

    return fn(_child);
  });
};

export function getClassNamesFromEnum<T extends object>(
  enumObj: T,
  value: T[keyof T],
  enumName: string,
): Record<string, boolean> {
  return Object.values(enumObj).reduce(
    (acc, curr) => {
      acc[`-${enumName.toLowerCase()}:${curr.toLowerCase()}`] = value === curr;
      return acc;
    },
    {} as Record<string, boolean>,
  );
}
