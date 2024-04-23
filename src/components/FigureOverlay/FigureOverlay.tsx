import { type FigureOverlayProps } from './';
import { Primitive } from '../../types';
import { Slot } from '@radix-ui/react-slot';
import c from 'clsx';
import React, { forwardRef } from 'react';

export const FigureOverlay = forwardRef<HTMLDivElement, FigureOverlayProps>(
  ({ asChild, className, children, ...props }, forwardedRef) => {
    const classes = c(className, 'b-FigureOverlay');
    const Component = asChild ? Slot : Primitive.div;

    return (
      <Component className={classes} ref={forwardedRef} {...props}>
        {children}
      </Component>
    );
  },
);
