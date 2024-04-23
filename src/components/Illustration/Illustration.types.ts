import { type ILLUSTRATION_NAME } from './Illustration.config';
import type * as CSS from 'csstype';

export type IllustrationName = (typeof ILLUSTRATION_NAME)[number];

export interface IllustrationProps {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Apply accent color to change the default color of the illustration. These
   * colous are designed to work with the dark theme also.
   */
  color?:
    | 'accent:1'
    | 'accent:2'
    | 'accent:3'
    | 'accent:4'
    | 'accent:5'
    | undefined;

  /**
   * Apply the wanted illustration
   */
  name: IllustrationName | undefined;

  /**
   * Outlined version of the illustration
   */
  outline?: boolean;

  /**
   * CSS property: width. Apply custom width, by default illustrations scale
   * based on the parent container.
   */
  width?: CSS.Property.Width;
}
