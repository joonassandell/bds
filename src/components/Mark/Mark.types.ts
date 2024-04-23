import { type HelperMarginProps } from '../../types';
import { type PropsWithChildren } from 'react';
import type * as CSS from 'csstype';

export interface MarkProps extends HelperMarginProps, PropsWithChildren {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Predefined size of the Mark.
   */
  size?: 'medium' | 'small';

  /**
   * Remove the <span> around the Mark. Note that this removes the possibility
   * to use margins or className.
   */
  unwrap?: boolean;

  /**
   * CSS property: width. Apply for custom width, this will override size.
   */
  width?: CSS.Property.Width;
}

export type MarkString =
  | 'biocode'
  | 'biocodeIcon'
  | 'producer'
  | 'producerMuted'
  | 'product'
  | 'productMuted'
  | 'report'
  | 'reportMuted'
  | 'reportSmall'
  | 'reportSmallMuted';
