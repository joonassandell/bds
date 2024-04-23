import {
  type Border,
  type BorderRadius,
  type Color,
  type ColorBackground,
  type ColorBorder,
  type ColorText,
  type Helpers,
  type PrimitiveDivProps,
  type PrimitiveDivPropsWithRef,
} from '../../types';
import type * as CSS from 'csstype';

export type BoxBackgroundColor = ColorBackground | Color;
export type BoxBorderColor = ColorBorder | Color;
export type BoxTextColor = ColorText | Color;

export interface BoxProps extends Helpers, PrimitiveDivPropsWithRef {
  /**
   * CSS property: align-self
   */
  alignSelf?: CSS.Property.AlignSelf;

  /**
   * Add background color
   */
  backgroundColor?: BoxBackgroundColor;

  /**
   * Enable default border or add border width
   */
  border?: boolean | Border;

  /**
   * Add border color and enable border
   */
  borderColor?: BoxBorderColor;

  /**
   * Enable border radius or add predefined radius
   */
  borderRadius?: boolean | BorderRadius;

  /**
   * Add text color
   */
  color?: BoxTextColor;

  /**
   * CSS property: flex-basis
   */
  flexBasis?: CSS.Property.FlexBasis;

  /**
   * CSS property: flex-grow
   */
  flexGrow?: CSS.Property.FlexGrow;

  /**
   * CSS property: flex-shrink
   */
  flexShrink?: CSS.Property.FlexShrink;

  /**
   * CSS property: height
   */
  height?: CSS.Property.Height;

  /**
   * CSS property: justify-self
   */
  justifySelf?: CSS.Property.JustifySelf;

  /**
   * CSS property: max-height
   */
  maxHeight?: CSS.Property.MaxHeight;

  /**
   * CSS property: max-width
   */
  maxWidth?: CSS.Property.MaxWidth;

  /**
   * CSS property: min-height
   */
  minHeight?: CSS.Property.MinHeight;

  /**
   * CSS property: min-width
   */
  minWidth?: CSS.Property.MinWidth;

  /**
   * CSS property: overflow
   */
  overflow?: CSS.Property.Overflow;

  /**
   * Apply shadow
   */
  shadow?: 'default' | 'large';

  /**
   * Add size to apply both width and height
   */
  size?: string | CSS.Property.Width | CSS.Property.Height;

  /**
   * Add any CSS style property, this is mainly intented for testing of various
   * styling props
   */
  style?: CSS.Properties;

  /**
   * CSS property: width
   */
  width?: CSS.Property.Width;
}

export interface BoxesProps extends Helpers, PrimitiveDivProps {
  /**
   * Enable border or add border width
   */
  border?: boolean | Border;

  /**
   * Add border color to boxes. Changes border color for Box chidren and uses
   * outline CSS property for them under the hood.
   */
  borderColor?: BoxBorderColor;

  /**
   * Change outer border color to alter it from the inner Box border colors
   */
  borderOuterColor?: BoxBorderColor;

  /**
   * CSS class
   */
  className?: string;

  /**
   * Add minimun width as pixels to each Box. This enables auto-responsive layout.
   */
  minBoxWidth?: number;
}
