import { AnimatePresence, m } from 'framer-motion';
import { type BadgeProps } from './';
import { Beacon, type BeaconProps } from '../Beacon';
import { childrenRecursiveMap, getCssSpaceHelper } from '../../lib/utils';
import { TRANS_DEFAULT_L } from '../../lib/config';
import c from 'clsx';
import React, {
  Children,
  cloneElement,
  forwardRef,
  type ReactElement,
  useMemo,
} from 'react';

export const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      animate,
      children,
      className,
      marginBottom,
      marginTop,
      variant = 'neutral',
      onAnimationComplete,
      size = 'medium',
      ...props
    },
    forwardedRef,
  ) => {
    const classes = c(className, 'b-Badge', {
      '-size:s': size === 'small',
      'b-Badge--error': variant === 'error',
      'b-Badge--highlight': variant === 'highlight',
      'b-Badge--info': variant === 'info',
      'b-Badge--neutral': !variant || variant === 'neutral',
      'b-Badge--primary': variant === 'primary',
      'b-Badge--success': variant === 'success',
      'b-Badge--warning': variant === 'warning',
      ...getCssSpaceHelper('marginBottom', marginBottom),
      ...getCssSpaceHelper('marginTop', marginTop),
    });

    const _children = useMemo(() => {
      const arr = Children.toArray(
        childrenRecursiveMap(children, child => {
          if (child.type == Beacon) {
            return cloneElement(child as ReactElement<BeaconProps>, {
              animate: {
                type: 'loop',
              },
              variant: variant === 'primary' ? 'primaryForeground' : variant,
              ...child.props,
            });
          }

          return child;
        }),
      );

      return Children.count(children) === 1 ? arr[0] : arr;
    }, [children, variant]);

    return (
      <div className={classes} ref={forwardedRef} {...props}>
        {_children}
        <AnimatePresence>
          {animate && (
            <m.span
              animate={{ opacity: [0, 1, 0] }}
              className="b-Badge-notify"
              onAnimationComplete={onAnimationComplete}
              transition={{ ...TRANS_DEFAULT_L, repeat: 1 }}
            />
          )}
        </AnimatePresence>
      </div>
    );
  },
);
