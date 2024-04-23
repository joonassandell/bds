import {
  type Color,
  type ColorText,
  type HelperMarginBottomProps,
  type HelperMarginTopProps,
} from '../../types';
import { type PropsWithChildren } from 'react';
import type * as CSS from 'csstype';

export type TextColor =
  | 'neutral'
  | 'light'
  | 'info'
  | 'success'
  | 'error'
  | 'warning'
  | 'highlight'
  | ColorText
  | Color;

export interface TextProps
  extends HelperMarginBottomProps,
    HelperMarginTopProps,
    PropsWithChildren {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Add premade or custom text color
   */
  color?: TextColor;

  /**
   * Accent color for links and buttons in 'light' color
   *
   * @defaultValue light
   * @param light Inherits light color
   * @param highlight Highlighted color
   */
  colorAccent?: 'light' | 'highlight';

  /**
   * Size of the text
   *
   * @defaultValue undefined
   * @param undefined Inherits size
   * @param large Large sized text
   * @param medium Medium sized text
   * @param small Small sized text
   * @param xSmall xSmall sized text
   */
  size?: 'large' | 'medium' | 'small' | 'xSmall';

  /**
   * Add any CSS style property, this is mainly intented for testing of various
   * styling props
   */
  style?: CSS.Properties;

  /**
   * Custom tag if needed
   *
   * @defaultValue div
   */
  tag?: 'div' | 'span';

  /**
   * Truncate to single or to a desired line
   *
   * @defaultValue false
   * @param true Truncate to a single line
   * @param false No truncation
   * @param number Number of lines until truncation takes effect
   */
  truncate?: boolean | number;
}
