import {
  type ButtonHTMLAttributes,
  type HTMLAttributeAnchorTarget,
  type MouseEventHandler,
  type PropsWithChildren,
  type ReactElement,
} from 'react';
import { type ColorText, type HelperMarginProps } from '../../types';
import { type IconProps } from '../Icon';
import type * as CSS from 'csstype';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    HelperMarginProps {
  active?: boolean | null;
  color?: ColorText;
  disabled?: boolean;
  flexShrink?: CSS.Property.FlexShrink;
  href?: string;
  icon?: IconProps['name'] | 'hamburger';
  iconActive?: boolean;
  iconLeft?: IconProps['name'] | 'hamburger';
  iconSize?: IconProps['size'];
  image?: string | ReactElement;
  justify?: 'block' | 'stretch' | 'stretchBetween';
  loading?: boolean;
  loadingText?: string;
  maxWidth?: CSS.Property.MaxWidth;
  minWidth?: CSS.Property.MinWidth;
  onClick?: MouseEventHandler | undefined;
  size?: 'medium' | 'small' | 'xSmall';
  target?: HTMLAttributeAnchorTarget;
  textStyle?: 'subtitle';
  truncate?: boolean;
  variant?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'plain'
    | 'success'
    | 'warning'
    | 'error';
}

export interface ButtonsProps extends PropsWithChildren {
  /**
   * CSS class
   */
  className?: string;

  /**
   * CSS property: flex-wrap
   */
  flexWrap?: CSS.Property.FlexWrap;

  /**
   * Add flex gap size
   *
   * @defaultValue small
   */
  gap?: 'small' | 'xSmall' | '2xSmall';

  /**
   * CSS property: justify-items
   */
  justifyContent?: CSS.Property.JustifyContent;

  /**
   * CSS property: width
   */
  width?: CSS.Property.Width;
}
