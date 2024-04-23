import { childrenRecursiveMap } from '../../lib/utils';
import { Icon } from '../Icon';
import { Item, Label } from '@radix-ui/react-dropdown-menu';
import { type MenuItemProps } from './';
import c from 'clsx';
import React, { Children, cloneElement, forwardRef, useMemo } from 'react';

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  ({ children, className, skipFocus, ...props }, ref) => {
    const classes = c('b-Menu-item', className, {
      'is-disabled': props.disabled,
    });

    const _children = useMemo(() => {
      const arr = Children.toArray(
        childrenRecursiveMap(children, child => {
          if (child.type == Icon) {
            return cloneElement(child, { size: 'xSmall' });
          }

          return child;
        }),
      );

      return Children.count(children) === 1 ? arr[0] : arr;
    }, [children]);

    if (skipFocus)
      return (
        <Label className={classes} ref={ref}>
          {_children}
        </Label>
      );

    return (
      <Item className={classes} ref={ref} {...props}>
        {_children}
      </Item>
    );
  },
);
