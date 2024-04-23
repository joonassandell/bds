import { type BarDatum, type ComputedDatum } from '@nivo/bar/dist/types/types';
import {
  type ColorAccent,
  type ColorBackground,
  type ColorState,
} from '../../types';
import { type Margin, type PropertyAccessor } from '@nivo/core';
import type * as CSS from 'csstype';

export type StackedBarColor =
  | ColorAccent
  | ColorBackground
  | ColorState
  | CSS.Property.Color;

/**
 * TODO: Add label colors to types and here
 */
export interface StackedBarProps<T extends BarDatum> {
  /**
   * Animate values
   */
  animate?: boolean;

  /**
   * CSS class
   */
  className?: string;

  /**
   * Array of custom color for a specific serie and its label
   */
  colors?: (
    | StackedBarColor
    | {
        [key: string | number]:
          | StackedBarColor
          | {
              ['color']: StackedBarColor;
              ['label']: string | CSS.Property.Color;
            };
      }
  )[];

  /**
   * Bar data
   */
  data: T;

  /**
   * Descriptions in tooltip for each item. Works only when tooltip "primary" is set.
   */
  descriptions?: Record<keyof T, string>;

  /**
   * Custom height of the stacked bar.
   */
  height?: string;

  /**
   * Keys to use to determine each serie. Order is done by the keys.
   */
  keys: string[];

  /**
   * Change how the text on the bar of each serie is rendered
   */
  label?: PropertyAccessor<ComputedDatum<BarDatum>, string>;

  /**
   * Skip label if bar width is lower than provided value, ignored if 0
   */
  labelSkipWidth?: number;

  /**
   * Change labels in tooltip
   */
  labels?: Record<keyof T, string>;

  /**
   * Custom margin from the current viewport
   */
  margin?: Partial<Margin>;

  /**
   * Bottom tick of the bar
   */
  ticks?: 'zeroOnly';

  /**
   * Tooltip preset.
   */
  tooltip?: 'default' | 'primary';

  /**
   * Unit used in the data
   */
  unit?: string;

  /**
   * Remove tooltip and label if using 'mute'.
   */
  variant?: 'mute' | 'default';
  /**
   * Custom string to render at zero value. Used this along with ticks="zeroOnly" prop.
   */
  zeroValue?: string;
}
