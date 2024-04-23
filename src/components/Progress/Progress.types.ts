import {
  type ColorAccent,
  type ColorBackground,
  type ColorState,
  type HelperMarginProps,
} from '../../types';
import { type DigitProps } from '../Digit';
import { type ReactNode } from 'react';
import { type SubtitleProps } from '../Subtitle';
import type * as CSS from 'csstype';

export interface ProgressProps extends HelperMarginProps {
  amount?: number | string | undefined | null;
  /**
   * Custom props for the delta (amount change)
   */
  amountChange?: DigitProps['changeValue'];

  /**
   * Add amount of decimals.
   *
   * `0`: No decimals.
   *
   * `false`: Inherit decimals from the original number.
   */
  amountDecimal?: number | false;
  className?: string;
  displayAmountChange?: boolean;
  label?: ReactNode;
  labelSuffix?: number | string;
  loading?: boolean;
  loadingDelay?: number;
  percent?: number | string | undefined | null;

  /**
   * Add amount of decimals.
   *
   * `0`: No decimals.
   *
   * `false`: Inherit decimals from the original number.
   */
  percentDecimal?: number | false;
  percentDelay?: number;
  percentFrom?: number;
  progressColor?:
    | ColorAccent
    | ColorBackground
    | ColorState
    | CSS.Property.Color;
  subtitle?: SubtitleProps['subtitle'];
  subtitleCase?: SubtitleProps['subtitleCase'];
}
