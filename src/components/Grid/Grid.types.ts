import {
  type Breakpoint,
  type Helpers,
  type PrimitiveDivProps,
} from '../../types';
import { type CSSProperties, type ReactNode } from 'react';
import type * as CSS from 'csstype';

export interface GridProps {
  /**
   * CSS property: align-items
   */
  alignItems?: CSS.Property.AlignItems;

  children?: ReactNode;

  /**
   * CSS class
   */
  className?: string;

  /**
   * Add column gaps. In mobile viewport, the gap is always small
   * unless it's set to `0`
   *
   * @defaultValue medium
   */
  gap?: 'large' | 'medium' | 'small' | 0 | false;

  /**
   * Add minimun width to each GridCol. This enables auto-responsive
   * behaviour but disables individual column span controlling.
   *
   * `number`: Minimum width of each column as pixels.
   *
   * `0`: Minimum width of 0 which means columns will never stack. This is not
   *  recommended if there are many columns.
   */
  minColWidth?: number;

  /**
   * Apply row gap which overrides the default gap behavior
   *
   * @defaultValue medium
   */
  rowGap?: 'large' | 'medium' | 'small' | 0 | false;

  style?: CSSProperties;
}

export type GridColSpanValue = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export type GridColSpan =
  | GridColSpanValue
  | {
      [key in Breakpoint]?: GridColSpanValue;
    };

export type GridColStartValue =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;
export type GridColStart =
  | GridColStartValue
  | {
      [key in Breakpoint]?: GridColStartValue;
    };

export interface GridColProps extends Helpers, PrimitiveDivProps {
  /**
   * CSS property: align-self
   */
  alignSelf?: CSS.Property.AlignSelf;
  asChild?: boolean;

  children?: ReactNode;

  /**
   * CSS class
   */
  className?: string;

  /**
   * Add width of the column
   */
  colSpan?: GridColSpan;

  /**
   * Add colStart to make an element start at the nth grid position.
   */
  colStart?: GridColStart;
}
