import { debounce } from '../utils';
import { type MutableRefObject, useEffect } from 'react';

export const useResize = (
  onResize: () => void,
  deps: Array<MutableRefObject<any> | unknown> = [],
  debounceTime = 100,
) => {
  useEffect(() => {
    window.addEventListener('resize', debounce(onResize, debounceTime));
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, onResize]);
};
