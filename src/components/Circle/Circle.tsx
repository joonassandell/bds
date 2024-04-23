import { Box } from '../Box';
import { type CircleProps } from './';
import { Primitive } from '../../types';
import { Slot } from '@radix-ui/react-slot';
import c from 'clsx';
import React, { forwardRef } from 'react';

export const Circle = forwardRef<HTMLDivElement, CircleProps>(
  (
    {
      asChild,
      border = true,
      children,
      className,
      overflow = 'hidden',
      ...props
    },
    forwardedRef,
  ) => {
    const classes = c(className, 'b-Circle');
    const Component = asChild ? Slot : Primitive.div;

    return (
      <Box
        asChild
        {...props}
        border={border}
        borderRadius="full"
        overflow={overflow}
      >
        <Component className={classes} ref={forwardedRef}>
          {children}
        </Component>
      </Box>
    );
  },
);
