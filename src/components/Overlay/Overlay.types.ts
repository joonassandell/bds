import { type Key, type ReactNode } from 'react';
import { type Transition } from '../../types';

export interface OverlayProps {
  children?: ReactNode;

  /**
   * CSS class
   */
  className?: string;

  /**
   * React Key
   */
  key?: Key;

  /**
   * Framer-motions 'motion' component
   */
  motion?: any;

  /**
   * Transition speed.
   */
  transition?: Transition;
}
