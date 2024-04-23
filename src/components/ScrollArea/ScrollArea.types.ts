import { type PropsWithChildren } from 'react';
import { type ScrollAreaScrollbarVisibleProps } from '@radix-ui/react-scroll-area';

export interface ScrollAreaProps extends PropsWithChildren {
  /**
   * Add CSS class to the viewport
   */
  className?: string;

  /**
   * Orientation of the acrollable area
   */
  orientation?: ScrollAreaScrollbarVisibleProps['orientation'];
}
