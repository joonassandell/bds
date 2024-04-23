import {
  type ColorState,
  type ColorText,
  type HelperMarginProps,
  type PrimitiveLinkPropsWithRef,
} from '../../types';
import { type PropsWithChildren } from 'react';

export interface LinkProps
  extends PropsWithChildren,
    PrimitiveLinkPropsWithRef,
    HelperMarginProps {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Color
   */
  color?: ColorText | ColorState | 'inherit';

  /**
   * Size
   */
  size?: 'medium' | 'large' | 'small';

  /**
   * Text style
   */
  textStyle?: 'subtitle';

  /**
   * Underline
   */
  underline?: boolean;
}
