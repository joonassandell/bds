import { type CollapsibleProps } from './';
import { Root } from '@radix-ui/react-collapsible';
import React, { forwardRef } from 'react';

export const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ children, ...props }, ref) => (
    <Root ref={ref} {...props}>
      {children}
    </Root>
  ),
);
