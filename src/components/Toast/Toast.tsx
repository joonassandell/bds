import { AnimatePresence } from 'framer-motion';
import { Flex } from '../Flex';
import { getDefaultAnimation, getDefaultSwipeDirection } from './Toast.utils';
import { Portal } from '@radix-ui/react-portal';
import { ToastContext } from './Toast.context';
import { type ToastProps } from './';
import c from 'clsx';
import React, { Children, type FC } from 'react';

export const Toast: FC<ToastProps> = ({
  animation = 'default',
  children,
  className,
  container = document.body,
  duration = 5000,
  position = 'bottom-right',
  swipeDirection = 'default',
  swipeThreshold = 50,
  variant = 'default',
}) => {
  const classes = c('b-Toast', `-position:${position}`, className);
  const defaultAnimation = getDefaultAnimation(position);
  const defaultSwipeDirection =
    animation === 'default'
      ? getDefaultSwipeDirection(defaultAnimation)
      : getDefaultSwipeDirection(animation);
  const shouldToastDisplay = Children.count(children) > 0;

  return (
    <>
      {shouldToastDisplay && (
        <Portal asChild container={container}>
          <ToastContext.Provider
            value={{
              animation: animation === 'default' ? defaultAnimation : animation,
              duration,
              swipeDirection:
                swipeDirection === 'default'
                  ? defaultSwipeDirection
                  : swipeDirection,
              swipeThreshold,
              variant,
            }}
          >
            <Flex className={classes} flexDirection="column" gap="xSmall">
              <AnimatePresence>{children}</AnimatePresence>
            </Flex>
          </ToastContext.Provider>
        </Portal>
      )}
    </>
  );
};
