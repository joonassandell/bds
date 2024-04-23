import { m as framerMotion } from 'framer-motion';
import { type OverlayProps } from './';
import { TRANS_DEFAULT, TRANS_DEFAULT_M } from '../../lib/config';
import c from 'clsx';
import React, { forwardRef } from 'react';

export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  (
    { className, children, motion, transition = 'default', ...props },
    forwardedRef,
  ) => {
    const classes = c(className, 'b-Overlay');
    const motionComponent = motion ? motion : framerMotion;
    const trans = transition === 'medium' ? TRANS_DEFAULT_M : TRANS_DEFAULT;

    return (
      <motionComponent.div
        animate={{
          opacity: 1,
        }}
        className={classes}
        exit={{
          opacity: 0,
        }}
        initial={{
          opacity: 0,
        }}
        ref={forwardedRef}
        transition={trans}
        {...props}
      >
        {children}
      </motionComponent.div>
    );
  },
);
