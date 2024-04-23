import {
  type Breakpoint,
  type Helpers,
  type PrimitiveDivPropsWithRef,
} from '../../types';
import type * as CSS from 'csstype';

export interface FlexProps extends Helpers, PrimitiveDivPropsWithRef {
  /**
   * CSS property: align-items
   */
  alignItems?: CSS.Property.AlignItems;

  /**
   * CSS property: align-self
   */
  alignSelf?: CSS.Property.AlignSelf;

  /**
   * CSS property: flex
   */
  flex?: CSS.Property.Flex;

  /**
   * CSS property: flex-basis
   */
  flexBasis?: CSS.Property.FlexBasis;

  /**
   * CSS property: flex-direction
   */
  flexDirection?: CSS.Property.FlexDirection;

  /**
   * CSS property: flex-grow
   */
  flexGrow?: CSS.Property.FlexGrow;

  /**
   * CSS property: flex-shrink
   */
  flexShrink?: CSS.Property.FlexShrink;

  /**
   * CSS property: flex-wrap
   */
  flexWrap?: CSS.Property.FlexWrap;

  /**
   * Add flex gap size
   *
   * @defaultValue base
   */
  gap?: 'large' | 'base' | 'small' | 'xSmall' | '2xSmall' | 0 | false;

  /**
   * CSS property: height
   */
  height?: CSS.Property.Height;

  /**
   * Add breakpoint to initialize the flex behavior
   */
  init?: Breakpoint;

  /**
   * CSS property: justify-content
   */
  justifyContent?: CSS.Property.JustifyContent;

  /**
   * CSS property: justify-items
   */
  justifyItems?: CSS.Property.JustifyItems;

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
   * Add any CSS style property, this is mainly intented for passing style props
   * and for quick testing of various styling props
   */
  style?: CSS.Properties;

  /**
   * CSS property: width
   */
  width?: CSS.Property.Width;
}
