import {
  AlertBadge,
  AlertButton,
  AlertIcon,
  type AlertProps,
  AlertText,
} from './';
import { childrenRecursiveMap, getCssSpaceHelpers } from '../../lib/utils';
import { HELPER, TRANS_DEFAULT_M } from '../../lib/config';
import { m } from 'framer-motion';
import { Primitive } from '../../types';
import { Slot } from '@radix-ui/react-slot';
import c from 'clsx';
import omit from 'ramda/es/omit';
import React, { Children, cloneElement, forwardRef, useMemo } from 'react';

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      asChild,
      animate,
      children,
      className,
      variant = 'neutral',
      onAnimationComplete,
      size = 'medium',
      ...props
    },
    forwardedRef,
  ) => {
    const classes = c(className, 'b-Alert', {
      '-size:s': size === 'small',
      'b-Alert--error': variant === 'error',
      'b-Alert--highlight': variant === 'highlight',
      'b-Alert--info': variant === 'info',
      'b-Alert--neutral': !variant || variant === 'neutral',
      'b-Alert--success': variant === 'success',
      'b-Alert--warning': variant === 'warning',
      ...getCssSpaceHelpers(props),
    });
    const restProps = omit(HELPER, props);
    const Component = asChild ? Slot : Primitive.div;

    const _children = useMemo(() => {
      const arr = Children.toArray(
        childrenRecursiveMap(children, child => {
          const { type } = child;
          if (type == AlertIcon) {
            return cloneElement(child, { _size: size, _variant: variant });
          }
          if (type == AlertBadge) {
            return cloneElement(child, { _size: size, _variant: variant });
          }
          if (type == AlertButton) {
            return cloneElement(child, { _size: size, _variant: variant });
          }
          if (type == AlertText) {
            return cloneElement(child, { _variant: variant });
          }

          return child;
        }),
      );

      return Children.count(children) === 1 ? arr[0] : arr;
    }, [children, variant, size]);

    return (
      <m.div
        animate={animate ? shakeAnimation : {}}
        initial={{ x: 0 }}
        onAnimationComplete={onAnimationComplete}
      >
        <Component
          className={classes}
          ref={forwardedRef}
          role="alert"
          {...restProps}
        >
          {_children}
        </Component>
      </m.div>
    );
  },
);

const shakeAnimation = {
  transition: {
    ...TRANS_DEFAULT_M,
    loop: 3,
    times: [0, 0.2, 0.4, 0.6, 0.8, 1],
  },
  x: [0, -8, 8, -8, 8, 0],
};
