import { type PropsWithChildren } from 'react';

export interface WrapProps extends PropsWithChildren {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Wrap maximum size (= width)
   */
  size?: 'default' | 'small' | 'xSmall';
}
