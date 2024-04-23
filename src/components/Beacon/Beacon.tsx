import { type BeaconProps } from './';
import { isObject } from '../../lib/utils';
import { m } from 'framer-motion';
import { TRANS_DEFAULT_M } from '../../lib/config';
import c from 'clsx';
import React, { type FC, useState } from 'react';

export const Beacon: FC<BeaconProps> = ({
  animateIn,
  animateOut,
  animate,
  className,
  variant = 'info',
  repeat = 5,
  onAnimationComplete,
}) => {
  const classes = c(className, 'b-Beacon', {
    'b-Beacon--error': variant === 'error',
    'b-Beacon--highlight': variant === 'highlight',
    'b-Beacon--info': variant === 'info',
    'b-Beacon--primaryForeground': variant === 'primaryForeground',
    'b-Beacon--success': variant === 'success',
    'b-Beacon--warning': variant === 'warning',
  });
  const delay = isObject(animate) && animate.delay ? animate.delay : 0;
  const duration = isObject(animate) && animate.type === 'loop' ? 1.5 : 0.5;
  const repeatTimes =
    isObject(animate) && animate.type === 'loop' ? Infinity : repeat;
  const [pulseAnimation, setPulseAnimation] = useState<boolean>(!!animate);
  const [visible, setVisible] = useState<number | boolean>(true);

  const animateOutVariants = {
    animate: {
      opacity: 0,
      transition: {
        delay: animateOut,
        ...TRANS_DEFAULT_M,
      },
    },
  };

  const animateInVariants = {
    animate: {
      scale: 1,
      transition: TRANS_DEFAULT_M,
    },
    initial: {
      scale: 0,
    },
  };

  const pulseVariants = {
    animate: {
      opacity: [1, 0],
      scale: [0, 2.5],
      transition: {
        delay,
        duration,
        ease: 'easeOut',
        repeat: repeatTimes,
      },
    },
  };

  return (
    <>
      {visible && (
        <m.div
          className={classes}
          {...(animateOut && {
            animate: 'animate',
            onAnimationComplete: () => setVisible(false),
            variants: animateOutVariants,
          })}
        >
          <m.div
            className="b-Beacon-inner"
            {...(animateIn && {
              animate: 'animate',
              initial: 'initial',
              variants: animateInVariants,
            })}
          >
            {pulseAnimation && (
              <m.div
                animate="animate"
                className="b-Beacon-pulse"
                initial={{
                  rotate: 0.1, // Fix laggy ff
                }}
                onAnimationComplete={def => {
                  setPulseAnimation(false);
                  onAnimationComplete && onAnimationComplete(def);
                }}
                variants={pulseVariants}
              />
            )}
          </m.div>
        </m.div>
      )}
    </>
  );
};
