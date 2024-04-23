import { childrenRecursiveMap, getCssSpaceHelpers } from '../../lib/utils';
import { HELPER_MARGIN } from '../../lib/config';
import { Icon } from '../Icon';
import { type LinkProps } from './';
import { Primitive } from '../../types';
import { Slot } from '@radix-ui/react-slot';
import c from 'clsx';
import omit from 'ramda/es/omit';
import React, { Children, cloneElement, forwardRef, useMemo } from 'react';

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      asChild,
      className,
      color,
      children,
      textStyle,
      size = 'medium',
      underline,
      ...props
    },
    forwardedRef,
  ) => {
    const classes = c(className, 'b-Link', {
      '-size:l': size === 'large',
      '-size:s': size === 'small',
      '-text:subtitle': textStyle === 'subtitle',
      '-underline': underline,
      ...getCssSpaceHelpers(props),
    });
    const Component = asChild ? Slot : Primitive.a;
    const restProps = omit(HELPER_MARGIN, props);

    const _children = useMemo(() => {
      const arr = Children.toArray(
        childrenRecursiveMap(children, child => {
          const { type } = child;
          if (type == Icon) {
            if (size === 'medium') {
              return cloneElement(child, { size: 'xSmall' });
            }
            if (size === 'small') {
              return cloneElement(child, { size: 'xxSmall' });
            }
          }

          return child;
        }),
      );

      return Children.count(children) === 1 ? arr[0] : arr;
    }, [children, size]);

    return (
      <Component
        className={classes}
        ref={forwardedRef}
        style={{
          ['--b-Link-color' as string]:
            color === 'inherit' ? `'${color}'` : color,
        }}
        {...restProps}
      >
        {_children}
      </Component>
    );
  },
);
