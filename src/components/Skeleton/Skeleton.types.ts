import { type FlexProps } from '../Flex';
import { type PropsWithChildren } from 'react';
import { type Space } from '../../types';
import type * as CSS from 'csstype';

export interface SkeletonProps extends PropsWithChildren {
  /**
   * Add CSS class
   */
  className?: string;

  /**
   * Height of the Skeleton. In most cases you might not need this as it's
   * recommended to infer the dimensions instead. Height will be applied to all
   * lines if using the lines property.
   *
   * @defaultValue undefined
   */
  height?: Space | CSS.Property.Height;

  /**
   * Apply lines property to repeat multiple lines in one Skeleton instance
   *
   * @defaultValue undefined
   */
  lines?: number;

  /**
   * Apply lines direction. Has effect only if variant is `text`.
   *
   * @defaultValue vertical
   * @param vertical Stack lines on top of each other
   * @param horizontal Add lines side by side horizontally
   */
  linesDirection?: 'vertical' | 'horizontal';

  /**
   * Lines use Flex under the hood, apply gap to increase the gap. Note that
   * by default there is always a gap in vertical direction which is set by
   * CSS transform. Has effect only if variant is `text`.
   *
   * @defaultValue `undefined` if linesDirection is vertical and `small` if linesDirection is horizontal
   */
  linesGap?: FlexProps['gap'];

  /**
   * Add additional flex properties if needed. Has effect only if variant is `text`.
   *
   * @defaultValue `undefined` if linesDirection is vertical and `small` if linesDirection is horizontal
   */
  linesProps?: FlexProps;

  /**
   * Variant to change the shape of the Skeleton
   *
   * @defaultValue text
   * @param text Use for text content, note that text always has round radius
   * @param circle Circle shape
   * @param round Round shape
   * @param rectangle Rectangular shape
   */
  variant?: 'text' | 'circle' | 'round' | 'rectangle';

  /**
   * Width of the Skeleton. In most cases you might not need this as it's
   * recommended to infer the dimensions or set the width from parent element
   * instead. Width will be applied to all lines if using the lines property and
   * the last line is always slightly narrower. In most cases it's probably
   * the best to use percentage values.
   *
   * @defaultValue "100%" if variant is `text` otherwise `undefined`
   */
  width?: CSS.Property.Width | Space;
}
