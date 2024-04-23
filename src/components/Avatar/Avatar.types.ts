import {
  type ColorAccent,
  type ColorBackground,
  type ColorBorder,
  type ColorPrimary,
  type ColorState,
  type ColorText,
} from '../../types';
import { type IconProps } from '../Icon';
import { type ReactElement } from 'react';

export interface AvatarProps {
  /**
   * Background color
   */
  backgroundColor?: ColorBackground | ColorAccent | ColorPrimary | ColorState;

  /**
   * Border color
   */
  borderColor?:
    | ColorBorder
    | ColorBackground
    | ColorAccent
    | ColorPrimary
    | ColorState;

  /**
   * Add CSS class
   */
  className?: string;

  /**
   * Text color for the content inside the circle
   */
  color?: ColorText | ColorAccent | ColorPrimary | ColorState;

  /**
   * User email
   */
  email?: string;

  /**
   * Hover type
   */
  hover?: 'parent' | 'siblings';

  /**
   * Apply preferrably "avatar-like" icon as identifier
   */
  icon?: IconProps['name'];

  /**
   * Add image src string or SVG React component
   */
  image?: string | ReactElement;

  /**
   * Wheter you want to display meta data (name, image, text) after the
   * identifier
   */
  meta?: boolean;

  /**
   * User name such as forename and lastname. Initials will be used as a
   * fallback identifier if no image or icon is applied.
   */
  name?: string;

  /**
   * Capitalization of the name. Capitalization is useful for situations
   * when the applied heading is in the form of `Firstname.Lastname` etc.
   */
  nameCapitalize?: boolean;

  /**
   * Truncate name to a desired line
   */
  nameTruncate?: boolean | number;

  /**
   * Size
   *
   * @defaultValue large
   */
  size?:
    | '2xLarge'
    | 'xLarge'
    | 'large'
    | 'medium'
    | 'mediumLarge'
    | 'small'
    | 'xSmall';

  /**
   * Custom text below email
   */
  text?: string;

  /**
   * Truncate text to a desired line
   */
  textTruncate?: boolean | number;

  /**
   * Variant
   */
  variant?: 'default' | 'primary' | 'secondary';
}
