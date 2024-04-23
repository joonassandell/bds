import { type AvatarProps } from '../Avatar';
import { type BadgeProps } from '../Badge';
import {
  type Border,
  type ColorAccent,
  type ColorBackground,
  type ColorBorder,
  type ColorPrimary,
  type ColorState,
  type Optional,
  type PrimitiveDivPropsWithRef,
} from '../../types';
import { type DigitProps } from '../Digit';
import { type DonutProps } from '../Donut';
import { type HeadingProps } from '../Heading';
import { type ReactNode } from 'react';
import { type SubtitleProps } from '../Subtitle';

export interface CardProps extends Omit<PrimitiveDivPropsWithRef, 'asChild'> {
  /**
   * Avatar
   *
   * @defaultValue true
   * @param true Pick initials from `heading`. Avatar is hidden if either
   * `donut` or `logo` is applied.
   * @param false Hide Avatar
   * @param string Apply custom initials with behaviour of `true`
   */
  avatar?: boolean | Optional<AvatarProps, 'name'>;

  /**
   * Background color
   */
  backgroundColor?: ColorBackground | ColorAccent | ColorPrimary | ColorState;

  /**
   * Props for the built-in Badge in top header area
   */
  badge?: BadgeProps;

  /**
   * Border
   */
  border?: {
    color?:
      | ColorBorder
      | ColorBackground
      | ColorAccent
      | ColorPrimary
      | ColorState;
    size?: Border;
    style?: 'default' | 'dashed';
  };

  /**
   * Classname
   */
  className?: string;

  /**
   * Description
   */
  description?: string | number;

  /**
   * Props for the built-in Donut in top header area
   */
  donut?: DonutProps;

  /**
   * Text or custom node in bottom footer area
   *
   * @param footer.left Left area content
   * @param footer.right Right area content
   */
  footer?: {
    left?: string | ReactNode;
    right?: string | ReactNode;
  };

  /**
   * Heading text or custom content
   */
  heading: string | ReactNode;

  /**
   * Heading capitalization
   *
   * @param true Capitalize
   * @param false No capitalization
   */
  headingCapitalize?: boolean;

  /**
   * Heading size
   */
  headingSize?: HeadingProps['size'];

  /**
   * Link of the card which is applied to absolute positioned layer. You should
   * combine this with aria-label property.
   */
  href?: string;

  /**
   * Image or custom image component such as next/image
   */
  image?: CardImage | ReactNode;

  /**
   * Image layout
   *
   * @param imageLayout.aspectRatio Aspect ratio of the image
   * @param imageLayout.mode Fill the image or keep the image dimensions
   */
  imageLayout?: {
    aspectRatio?: number;
    mode?: 'fill' | 'intrinsic';
  };

  /**
   * Logo in the top header area
   */
  logo?: CardLogo;

  /**
   * Built-in Skeleton loading. Skeletons are applied automatically to each
   * built-in node and component depending if they're defined as props or not.
   */
  skeletonLoading?: boolean;

  /**
   * Subtitles under heading separated by a middot
   */
  subtitles?: SubtitleProps[];
}

export type CardImage = {
  alt: string;
  height: string | number;
  src: string;
  width: string | number;
};

export type CardLogo = {
  alt: string;
  height: string | number;
  src: string;
  width: string | number;
};

// Deprecated
export interface CardPrimaryProps
  extends Omit<
    CardProps,
    'avatar' | 'button' | 'footer' | 'image' | 'imageLayout' | 'logo' | 'donut'
  > {
  active?: boolean | null;
  children?: ReactNode;
  disabled?: boolean;
  headingResult?: DigitProps['number'] | false;
  headingResultAnimation?: DigitProps['animation'];
  headingResultUnit?: DigitProps['unit'];
  size?: 'small';
  toolbarButtons?: any[];
}
