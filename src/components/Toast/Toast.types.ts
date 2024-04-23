import {
  type ToastDescriptionProps as DescriptionProps,
  type ToastProps as RootProps,
  type SwipeDirection,
  type ToastTitleProps as TitleProps,
  type ToastProviderProps,
  type ToastViewportProps as ViewportProps,
} from '@radix-ui/react-toast';
import { type PortalProps } from '@radix-ui/react-portal';
import { type PropsWithChildren } from 'react';
import { type Variant, type Variants } from 'framer-motion';

export type ToastPosition =
  | 'top'
  | 'top-right'
  | 'bottom-right'
  | 'bottom'
  | 'bottom-left'
  | 'top-left'
  | 'right'
  | 'left'
  | 'relative';

export interface ToastProps extends PropsWithChildren {
  /**
   * Slide in animation when the Toast appears. Applied to all toasts. By default, it will be according to position.
   * Position that is on the left or right will from that side respectively. Top and bottom center will be fromTop or fromBottom.
   * Use other options to alter the default setup or none to not display any animation at all.
   */
  animation?:
    | 'fromTop'
    | 'fromBottom'
    | 'fromLeft'
    | 'fromRight'
    | 'default'
    | 'none';

  /**
   * CSS class
   */
  className?: string;

  /**
   * Toast container
   */
  container?: PortalProps['container'];

  /**
   * The time in milliseconds that should elapse before automatically closing the toast. This will apply to each children.
   */
  duration?: number;

  /**
   * Position of the toast
   */
  position?: ToastPosition;

  /**
   * The direction of the pointer swipe that should close the toast. Apply to all toasts.
   */
  swipeDirection?: 'default' | ToastProviderProps['swipeDirection'];

  /**
   * The distance in pixels that the swipe gesture must travel before a close is triggered. Apply to all toasts
   */
  swipeThreshold?: ToastProviderProps['swipeThreshold'];

  /**
   * Variant applied to all toasts
   */
  variant?: 'default' | 'info' | 'success' | 'warning' | 'error';
}

/**
 * Props for ToastMain. It combine some props from Provider, ViewPort and all props from RootProps
 * Find more specific options to use at: https://www.radix-ui.com/docs/primitives/components/toast
 */
export interface ToastMainProps extends Omit<RootProps, 'open'> {
  /**
   * Slide in animation when the Toast appears. By default, it will be according to position.
   * Override animation props from Toast
   */
  animation?: 'fromTop' | 'fromBottom' | 'fromLeft' | 'fromRight' | 'none';

  /**
   * An author-localized label for each toast. Used to help screen reader users associate the interruption with a toast.
   */
  label: string;

  /**
   * The direction of the pointer swipe that should close the toast. Override ToastProps.
   */
  swipeDirection?: SwipeDirection;

  /**
   * The distance in pixels that the swipe gesture must travel before a close is triggered. Override ToastProps.
   */
  swipeThreshold?: ToastProviderProps['swipeThreshold'];

  /**
   * Custom variant, overrides variant from Toast
   */
  variant?: ToastProps['variant'];

  /**
   * The keys to use as the keyboard shortcut that will move focus to the toast viewport. Override Toast Props
   *
   * @defaultValue — ['F8']
   */
  viewPortHotkey?: ViewportProps['hotkey'];

  /**
   * An author-localized label for the toast viewport to provide context for screen reader users when navigating page landmarks. The available {hotkey} placeholder will be replaced for you. Override ToastProps.
   *
   * @defaultValue — 'Notifications ({hotkey})'
   */
  viewPortLabel?: ViewportProps['label'];
}

export interface ToastContentProps extends DescriptionProps {
  /**
   * An optional title for the toast.
   * For custom title, please use ToastTitle component.
   */
  title?: string;
}

export interface ToastTitleProps extends TitleProps {}

export interface ToastViewportProps extends ViewportProps {}

// Props that pass down to each individual toast
export interface ToastContextProps {
  animation: 'fromTop' | 'fromBottom' | 'fromLeft' | 'fromRight' | 'none';
  duration: ToastProps['duration'];
  swipeDirection: SwipeDirection;
  swipeThreshold: number;
  variant: ToastProps['variant'];
}

export type ToastAnimationVariant = Variants & {
  enter: Variant;
  exit: Variant;
  initial: Variant;
};
