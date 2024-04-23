import { type PopoverTriggerProps } from './';
import { Trigger } from '@radix-ui/react-popover';
import React, { forwardRef } from 'react';

export const PopoverTrigger = forwardRef<
  HTMLButtonElement,
  PopoverTriggerProps
>(({ children, ...props }, ref) => (
  <Trigger ref={ref} {...props}>
    {children}
  </Trigger>
));
