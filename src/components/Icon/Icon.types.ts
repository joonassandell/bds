import { type HTMLAttributes } from 'react';
import { type ICON_NAME } from './';

export type IconName = (typeof ICON_NAME)[number];

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * CSS class
   */
  className?: string | undefined;

  /**
   * Apply the icon
   */
  name: IconName | undefined;

  /**
   * Predefined size of the icon
   */
  size?: 'medium' | 'large' | 'small' | 'xSmall' | 'xxSmall';
}
