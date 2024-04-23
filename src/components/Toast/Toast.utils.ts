import {
  type ToastAnimationVariant,
  type ToastContextProps,
  type ToastPosition,
} from './';

export const getDefaultAnimation = (
  position: ToastPosition,
  inverse?: boolean,
): ToastContextProps['animation'] => {
  const ani: Record<ToastPosition, ToastContextProps['animation']> = {
    bottom: 'fromBottom',
    'bottom-left': 'fromLeft',
    'bottom-right': 'fromRight',
    left: 'fromLeft',
    relative: 'fromRight',
    right: 'fromRight',
    top: 'fromTop',
    'top-left': 'fromLeft',
    'top-right': 'fromRight',
  };

  const inverseAni: Record<ToastPosition, ToastContextProps['animation']> = {
    bottom: 'fromTop',
    'bottom-left': 'fromRight',
    'bottom-right': 'fromLeft',
    left: 'fromRight',
    relative: 'fromRight',
    right: 'fromLeft',
    top: 'fromBottom',
    'top-left': 'fromBottom',
    'top-right': 'fromBottom',
  };

  // Check if the position is not undefined
  return position
    ? inverse
      ? inverseAni[position]
      : ani[position]
    : 'fromRight';
};

export const getDefaultSwipeDirection = (
  animation: ToastContextProps['animation'],
): ToastContextProps['swipeDirection'] => {
  const swipe: Record<
    ToastContextProps['animation'],
    ToastContextProps['swipeDirection']
  > = {
    fromBottom: 'down',
    fromLeft: 'left',
    fromRight: 'right',
    fromTop: 'up',
    none: 'right',
  };
  return animation === 'none' ? 'right' : swipe[animation];
};

/**
 * @param initialPosition The distance in pixels from where the the initial position of the toast to the position of the toast (where it supposed to be).
 * @param exit The distance in pixels from the position of to toast to where the exit animation ends.
 * @param animation toast given animation. By default it should be according to position.
 * @returns variants for framer-motion animation
 */
export const getSlideInAnimationVariants = (
  initialPosition: number | string,
  exit: number | string,
  animation: ToastContextProps['animation'],
): ToastAnimationVariant | undefined => {
  const negI =
    typeof initialPosition === 'string'
      ? `-${initialPosition}`
      : -initialPosition;
  const negE = typeof exit === 'string' ? `-${exit}` : -exit;

  const variants: Record<
    ToastContextProps['animation'],
    ToastAnimationVariant | undefined
  > = {
    fromBottom: {
      enter: {
        opacity: 1,
        y: 0,
      },
      exit: { opacity: 0, y: exit },
      initial: {
        opacity: 0,
        y: initialPosition,
      },
    },
    fromLeft: {
      enter: {
        opacity: 1,
        x: 0,
      },
      exit: { opacity: 0, x: negE },
      initial: {
        opacity: 0,
        x: negI,
      },
    },
    fromRight: {
      enter: {
        opacity: 1,
        x: 0,
      },
      exit: { opacity: 0, x: exit },
      initial: {
        opacity: 0,
        x: initialPosition,
      },
    },
    fromTop: {
      enter: {
        opacity: 1,
        y: 0,
      },
      exit: { opacity: 0, y: negE },
      initial: {
        opacity: 0,
        y: negI,
      },
    },
    none: undefined,
  };
  return variants[animation];
};

/**
 * Defined draggable area for the toast. Since it only accept 1 swipeDirection, it will limit to 1 direction according to swipeDirection
 * @param swipeDirection The direction of the pointer swipe that should close the toast.
 * @param swipeThreshold The distance in pixels that the swipe gesture must travel before a close is triggered.
 * @param constraintThreshold The distance in pixels the user is able to drag the toast, from the swipeThreshold.
 * @returns Applies constraints on the permitted draggable area.
 */
export const getDragConstraints = (
  swipeDirection: ToastContextProps['swipeDirection'],
  swipeThreshold: number,
  constraintThreshold: number,
) => ({
  bottom: swipeDirection === 'down' ? swipeThreshold + constraintThreshold : 0,
  left: swipeDirection === 'left' ? -swipeThreshold - constraintThreshold : 0,
  right: swipeDirection === 'right' ? swipeThreshold + constraintThreshold : 0,
  top: swipeDirection === 'up' ? -swipeThreshold - constraintThreshold : 0,
});
