import { getDragConstraints, getSlideInAnimationVariants } from './Toast.utils';
import { m } from 'framer-motion';
import { Provider, Root, Viewport } from '@radix-ui/react-toast';
import { ToastMainContext, useToast } from './Toast.context';
import { type ToastMainProps } from './';
import { TRANS_DEFAULT_M } from '../../lib/config';
import c from 'clsx';
import React, { type FC } from 'react';

export const ToastMain: FC<ToastMainProps> = ({
  animation,
  children,
  className,
  duration,
  label,
  swipeDirection,
  swipeThreshold,
  variant,
  viewPortHotkey,
  viewPortLabel,
  ...props
}) => {
  const {
    animation: _animation,
    duration: _duration,
    variant: _variant,
    swipeDirection: _swipeDirection,
    swipeThreshold: _swipeThreshold,
  } = useToast();
  const toastMainVariant = variant ? variant : _variant;
  const classes = c(
    'b-Toast-main',
    {
      'b-Toast-main--default':
        toastMainVariant === 'default' || !toastMainVariant,
      'b-Toast-main--error': toastMainVariant === 'error',
      'b-Toast-main--info': toastMainVariant === 'info',
      'b-Toast-main--success': toastMainVariant === 'success',
      'b-Toast-main--warning': toastMainVariant === 'warning',
    },
    className,
  );
  const toastMainAnimation = animation ? animation : _animation;
  const toastMainDuration = duration ? duration : _duration;
  const toastMainSwipeDirection = swipeDirection
    ? swipeDirection
    : _swipeDirection;
  const toastMainSwipeThreshold = swipeThreshold
    ? swipeThreshold
    : _swipeThreshold;
  const animationVariant = getSlideInAnimationVariants(
    200,
    400,
    toastMainAnimation,
  );

  return (
    <m.div
      animate="enter"
      className={classes}
      drag={
        toastMainSwipeDirection === 'up' || toastMainSwipeDirection === 'down'
          ? 'y'
          : 'x'
      }
      dragConstraints={getDragConstraints(
        toastMainSwipeDirection,
        toastMainSwipeThreshold,
        100,
      )}
      dragElastic={{
        bottom: toastMainSwipeDirection === 'down' ? undefined : 0,
        left: toastMainSwipeDirection === 'left' ? undefined : 0,
        right: toastMainSwipeDirection === 'right' ? undefined : 0,
        top: toastMainSwipeDirection === 'up' ? undefined : 0,
      }}
      dragSnapToOrigin
      exit="exit"
      initial="initial"
      transition={TRANS_DEFAULT_M}
      variants={animationVariant}
    >
      <Provider
        duration={toastMainDuration}
        label={label}
        swipeDirection={swipeDirection}
        swipeThreshold={swipeThreshold}
      >
        <Root className="b-Toast-root" forceMount {...props}>
          <ToastMainContext.Provider value={{ variant: toastMainVariant }}>
            {children}
          </ToastMainContext.Provider>
        </Root>
        <Viewport
          className="b-Toast-viewport"
          hotkey={viewPortHotkey}
          label={viewPortLabel}
        />
      </Provider>
    </m.div>
  );
};
