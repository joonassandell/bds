import {
  type ColorAccent,
  type ColorBackground,
  type ColorState,
  type Optional,
} from '../../types';
import { type DatumId, type DefaultRawDatum } from '@nivo/pie';
import { type DigitProps } from '../Digit';
import { type SubtitleProps } from '../Subtitle';
import { type TooltipAnchor } from '@nivo/tooltip/dist/types';
import type * as CSS from 'csstype';

type DonutColor =
  | ColorAccent
  | ColorBackground
  | ColorState
  | CSS.Property.Color;

export interface DonutDataItem extends Omit<DefaultRawDatum, 'value'> {
  /**
   * Color of the value
   */
  color?: DonutColor;

  /**
   * Label of the value visible in the tooltip.
   */
  label: DatumId;

  /**
   * Content of the tooltip. By default the tooltip displays label, value and
   * unit (set in DonutProps.unit).
   *
   * `tooltip.values`: Additional labels, values and units below the main value.
   *
   * `false`: Disable the tooltip entirely.
   *
   * `tooltip.maxWidth`: By default tooltip has a default maximum width added.
   *  Add number to increase/decrease that maximum width to fit the content
   *  properly.
   */
  tooltip?:
    | boolean
    | {
        maxWidth?: number;
        values: {
          label: string;
          unit: string;
          value: number | string;
        }[];
      };

  value: number | string;
}

export type DonutData = DonutDataItem[];

export interface DonutProps {
  /**
   * Add border around the Donut.
   */
  border?: boolean;

  /**
   * CSS class
   */
  className?: string;

  /**
   * Apply colors to eact data item.
   *
   * `false`: Disable automatic color adding
   */
  colors?: DonutColor[] | false;

  /**
   * Donut data
   */
  data: DonutData;

  /**
   * Digit props to override. Do it with care if needed.
   */
  digit?: Optional<DigitProps, 'number'>;

  /**
   * Enable/disable Digit animation
   */
  digitAnimation?: DigitProps['animation'];

  /**
   * Subtitle above the number
   */
  digitSubtitle?: SubtitleProps['subtitle'];

  /**
   * Unit after the number
   */
  digitUnit?: DigitProps['unit'];

  /**
   * Number visible in the middle of the Donut. This prop should be changed to
   * digitNumber.
   */
  number?: DigitProps['number'];

  /**
   * Size of the Donut.
   */
  size?: 'small' | 'medium' | 'xLarge';

  /**
   * Position the tooltip anchor.
   */
  tooltipAnchor?: TooltipAnchor;

  /**
   * Unit to display in tooltips.
   */
  unit?: string;
}
