import {
  type Color,
  type ColorText,
  type HelperMarginProps,
  type PrimitiveDivPropsWithRef,
} from '../../types';

export type HeadingSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingColor = ColorText | Color;

export interface HeadingProps
  extends PrimitiveDivPropsWithRef,
    HelperMarginProps {
  asChild?: boolean;

  /**
   * Apply `text-wrap: balance`. Note that truncate doesn't work if balance
   * is set.
   */
  balance?: boolean;

  /**
   * CSS class
   */
  className?: string;

  /**
   * Add text color
   */
  color?: HeadingColor;

  /**
   * Size
   */
  size?: HeadingSize;

  /**
   * HTML tag of the heading
   */
  tag?: HeadingSize | 'div' | 'span';

  /**
   * Add "title" prop
   */
  title?: string;

  /**
   * Truncate to a desired line
   */
  truncate?: boolean | number;
}
