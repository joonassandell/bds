import { type Breakpoint } from '../../types';
import { BREAKPOINT } from '../../lib/config';
import { useCallback, useEffect, useRef, useState } from 'react';

type Config =
  | 'at'
  | 'between'
  | 'greaterOrEqual'
  | 'greaterThan'
  | 'lessOrEqual'
  | 'lessThan';

export const useMediaQueries = () => {
  const [isNewMediaQuery, setIsNewMediaQuery] = useState<boolean | undefined>(
    undefined,
  );
  const mediaQueryRef = useRef<string | null>(null);

  const generateAndStoreMediaQuery = (
    config: Config,
    breakpoint: Breakpoint,
    nextBreakpoint?: Breakpoint,
  ): string => {
    const immediateQuery = generateMediaQuery(
      config,
      breakpoint,
      nextBreakpoint,
    );
    mediaQueryRef.current = immediateQuery; // Store the current media query string in a ref
    return immediateQuery;
  };

  useEffect(() => {
    if (!mediaQueryRef.current) return; // If no media query is set, don't set up the listener

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsNewMediaQuery(e.matches);
    };

    const mediaQueryList = window.matchMedia(mediaQueryRef.current);
    mediaQueryList.addEventListener('change', handleMediaChange);

    return () => {
      mediaQueryList.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const mq = useCallback(
    (
      config: Config,
      breakpoint: Breakpoint,
      nextBreakpoint?: Breakpoint,
    ): boolean => {
      const immediateQuery = generateAndStoreMediaQuery(
        config,
        breakpoint,
        nextBreakpoint,
      );
      if (typeof window !== 'undefined') {
        return window.matchMedia(immediateQuery).matches;
      }
      return false;
    },
    // When viewport changes, it will rerun the function
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isNewMediaQuery],
  );

  return { mq };
};

const generateMediaQuery = (
  config: Config,
  breakpoint: Breakpoint,
  nextBreakpoint?: Breakpoint,
) => {
  let query = '';
  const min = BREAKPOINT[breakpoint];
  let max: number | null = nextBreakpoint ? BREAKPOINT[nextBreakpoint] : null;

  // Find the next larger and next smaller breakpoints
  const breakpointKeys = Object.keys(BREAKPOINT) as Breakpoint[];
  const currentIndex = breakpointKeys.indexOf(breakpoint);
  const nextLargerBreakpoint = breakpointKeys[currentIndex + 1];
  const nextSmallerBreakpoint = breakpointKeys[currentIndex - 1];

  switch (config) {
    case 'at':
      max = nextLargerBreakpoint ? BREAKPOINT[nextLargerBreakpoint] - 1 : null;
      const minForAt = nextSmallerBreakpoint
        ? BREAKPOINT[nextSmallerBreakpoint]
        : 0;
      query = `(min-width: ${minForAt}px) and (max-width: ${max ?? min}px)`;
      break;
    case 'between':
      if (max === null) {
        query = `(min-width: ${min}px)`;
        break;
      }
      query = `(min-width: ${min}px) and (max-width: ${max}px)`;
      break;
    case 'greaterOrEqual':
      query = `(min-width: ${min}px)`;
      break;
    case 'greaterThan':
      query = `(min-width: ${min + 1}px)`;
      break;
    case 'lessOrEqual':
      query = `(max-width: ${min}px)`;
      break;
    case 'lessThan':
      query = `(max-width: ${min - 1}px)`;
      break;
  }

  return query;
};
