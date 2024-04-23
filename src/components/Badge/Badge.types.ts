import { type AnimationLifecycles } from 'framer-motion';
import { type BeaconProps } from '../Beacon';
import {
  type HelperMarginBottomProps,
  type HelperMarginTopProps,
} from '../../types';
import { type PropsWithChildren } from 'react';

export interface BadgeProps
  extends PropsWithChildren,
    HelperMarginBottomProps,
    HelperMarginTopProps {
  animate?: boolean;
  beacon?: boolean | BeaconProps;
  className?: string;
  onAnimationComplete?: AnimationLifecycles['onAnimationComplete'];
  size?: 'medium' | 'small';
  variant?:
    | 'neutral'
    | 'warning'
    | 'info'
    | 'success'
    | 'error'
    | 'primary'
    | 'highlight';
}

export interface BadgesProps extends PropsWithChildren {
  className?: string;
}
