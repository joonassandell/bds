import { type RefObject, useEffect, useState } from 'react';

export const useIsTruncated = <T extends HTMLElement>(
  ref: RefObject<T>,
  truncateClamp?: boolean,
) => {
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setIsTruncated(
        truncateClamp
          ? ref.current.scrollHeight > ref.current.clientHeight
          : ref.current.offsetWidth < ref.current.scrollWidth,
      );
    }
  }, [ref, truncateClamp]);

  return { isTruncated };
};
