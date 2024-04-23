import { type AnimationLifecycles } from 'framer-motion';

export interface BeaconProps {
  /**
   * Animation
   *
   * @defaultValue false
   * @param true Default pulse animation, see `repeat` to control
   * @param false No animation
   * @param animate.delay Delay after the animation starts
   * @param animate.type 'loop' Keep looping the animation forever with slower duration
   */
  animate?:
    | {
        delay?: number;
        type?: 'loop';
      }
    | boolean;

  /**
   * Set to `true` to animate Beacon in when it mounts
   */
  animateIn?: boolean;

  /**
   * Add number in seconds after to animate the Beacon out from the React tree.
   * It not set, the Beacon won't unmount.
   */
  animateOut?: number;

  /**
   * CSS class
   */
  className?: string;

  /**
   * Callback after animation completes
   */
  onAnimationComplete?: AnimationLifecycles['onAnimationComplete'];

  /**
   * Number of times the default pulse animation will repeat
   */
  repeat?: number;

  /**
   * Change color according to variant
   */
  variant?:
    | 'info'
    | 'error'
    | 'warning'
    | 'success'
    | 'primaryForeground'
    | 'highlight';
}
