import { type MenuTriggerProps } from './';
import { Trigger } from '@radix-ui/react-dropdown-menu';
import React, { forwardRef } from 'react';

export const MenuTrigger = forwardRef<HTMLButtonElement, MenuTriggerProps>(
  ({ children, ...props }, ref) => (
    <Trigger ref={ref} {...props}>
      {children}
    </Trigger>
  ),
);
