import { type HelperMarginBottomProps, type Integer } from '../../types';
import { type SubtitleProps } from '../Subtitle';
import { type TextProps } from '../Text';

export interface DigitProps extends HelperMarginBottomProps {
  /**
   * Enable/disable animation
   */
  animation?: boolean;

  /**
   * Change value props, only color for now
   */
  changeValue?: {
    color?: 'neutral' | 'default' | 'reverse';
    size?: TextProps['size'];
  };

  /**
   * CSS class
   */
  className?: string;

  /**
   * Add amount of decimals
   *
   * `0`: No decimals.
   *
   * `false`: Inherit decimals from the original number.
   */
  decimal?: number | false;

  /**
   * Should digit display the delta when value changes between renders
   */
  displayChangeValue?: boolean;

  /**
   * Add isActive style for the number
   */
  isActive?: boolean;

  /**
   * Justify component
   */
  justify?: 'center' | 'left';

  /**
   * The displayed number.
   */
  number: number | string | undefined | null;

  /**
   * Scale number size smaller, useful if the surrounding area is small.
   *
   * `integer`: The amount _after_ the number is scaled smaller. Use integers only.
   *
   * `true`: Default scale amount (`6`) after the number is scaled.
   */
  scale?: boolean | Integer;

  /**
   * Size of the number
   */
  size?: 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge' | '2xLarge';

  /**
   * Subtitle props (on top of the number)
   */
  subtitle?: SubtitleProps;

  /**
   * Truncate the number, useful if number is very long and the surrounding
   * area is small. Note that the truncating is active only if the surrounding
   * area is smaller than the width of the number. When truncating is active
   * a smaller number is displayed under the main number so that the entire
   * number is always visible.
   *
   * `integer`: The amount _after_ the number is truncated.
   *
   * `true`: Default truncate amount after the number is truncated (5).
   */
  truncate?: boolean | number;

  /**
   * Unit after the number. Add empty string if no unit wanted.
   */
  unit?: string;

  /**
   * Unit position
   *
   * `right`: After the number.
   *
   * `bottom`: Under the number.
   *
   * `inNumber`: After the number with the matching the numbers style. Intented
   * to use when applying simple single units (e.g. `%`).
   */
  unitPosition?: 'right' | 'bottom' | 'inNumber';

  /**
   * Uppercased unit after the number, useful if you wan't to display certain
   * characters lowercase. This is used over default unit and displayed only if
   * `unitPosition` is `bottom` or truncating is active.
   *
   * By default when unit is `kg CO₂e \n/ kg` this will default to `KG CO₂e / KG`.
   */
  unitUppercase?: string;

  /**
   * Font weight of the number. Font weights and sizes are carefully crafted so
   * don't use this unless the surrounding context requires stronger weights.
   */
  weight?: 'default' | 'strong';
}
