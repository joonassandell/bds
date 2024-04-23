import { type Border, type ColorBorder, type Helpers } from '../../types';
import { type SeparatorProps as RadixSeparatorProps } from '@radix-ui/react-separator';

export interface SeparatorProps extends RadixSeparatorProps, Helpers {
  /**
   * Add separator border width
   */
  border?: Border;

  /**
   * CSS class
   */
  className?: string;

  /**
   * Add separator color
   */
  color?: ColorBorder;
}
