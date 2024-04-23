import { useEffect } from 'react';

export const useScrollTop = (
  scroll: boolean | string = true,
  behavior: 'auto' | 'smooth' = 'auto',
) => {
  useEffect(() => {
    if (scroll) {
      setTimeout(() => {
        window.scrollTo({
          behavior,
          left: 0,
          top: 0,
        });
      }, 5);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scroll]);
};
