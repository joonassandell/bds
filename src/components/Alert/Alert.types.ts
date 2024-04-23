import { type AnimationLifecycles } from 'framer-motion';
import { type BadgeProps } from '../Badge';
import { type ButtonProps } from '../Button';
import { type Helpers, type PrimitiveDivPropsWithRef } from '../../types';
import { type PropsWithChildren } from 'react';
import { type TextProps } from '../Text';

export interface AlertProps extends Helpers, PrimitiveDivPropsWithRef {
  /**
   * Animate
   *
   * @param false Animate with shake animation
   * @param false Don't animate
   */
  animate?: boolean;

  /**
   * CSS class
   */
  className?: string;

  /**
   * onAnimationComplete
   */
  onAnimationComplete?: AnimationLifecycles['onAnimationComplete'];

  /**
   * Size
   *
   * @defaultValue medium
   * @param medium Medium size
   * @param small Small size
   */
  size?: 'medium' | 'small';

  /**
   * Variant
   */
  variant?: 'neutral' | 'info' | 'error' | 'warning' | 'success' | 'highlight';
}

export interface AlertTextProps
  extends Pick<TextProps, 'truncate'>,
    PropsWithChildren {}

export interface AlertBadgeProps
  extends Pick<BadgeProps, 'variant'>,
    PropsWithChildren {}

export interface AlertContentProps extends PropsWithChildren {}

export interface AlertButtonProps extends Omit<ButtonProps, 'size'> {}
