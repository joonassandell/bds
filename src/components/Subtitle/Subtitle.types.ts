import { type HeadingSize } from '../Heading';
import { type Helpers } from '../../types';
import { type PropsWithChildren, type ReactNode } from 'react';

export interface SubtitleProps extends Helpers, PropsWithChildren {
  /**
   * Css class
   */
  className?: string;

  /**
   * Color
   */
  color?: 'strong';

  /**
   * Size
   */
  size?: 'medium' | 'large' | 'small' | 'xSmall';

  /**
   * Subtitle text if not using children. Children props will be disabled if using subtitle props.
   */
  subtitle?: string | number | ReactNode;

  /**
   * Casing
   */
  subtitleCase?: boolean;
  subtitleSuffix?: any;
  subtitleSuffixCase?: boolean;

  /**
   * Size
   */
  tag?: HeadingSize | 'div' | 'span';

  /**
   * Add "title" attribute.
   */
  title?: string;

  /**
   * Truncate to single or to a desired line.
   */
  truncate?: boolean | number;
}
