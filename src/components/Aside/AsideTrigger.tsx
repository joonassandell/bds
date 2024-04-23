import { type AsideTriggerProps } from './';
import { Primitive } from '../../types';
import { Slot } from '@radix-ui/react-slot';
import { Trigger } from '@radix-ui/react-dialog';
import React, { forwardRef } from 'react';

export const AsideTrigger = forwardRef<HTMLButtonElement, AsideTriggerProps>(
  (
    { asChild, asideId, children, onClick, open, triggerRef, ...props },
    forwardedRef,
  ) => {
    const hasOutsideContextTrigger = asideId;

    // Mimic the original radix-dialog Trigger
    if (hasOutsideContextTrigger) {
      const Component = asChild ? Slot : Primitive.button;

      return (
        <Component
          aria-controls={asideId}
          aria-expanded={open}
          aria-haspopup="dialog"
          data-state={open ? 'open' : 'closed'}
          onClick={e => {
            triggerRef && (triggerRef.current = e.currentTarget);
            onClick && onClick(e);
          }}
          ref={forwardedRef}
          {...props}
        >
          {children}
        </Component>
      );
    }

    return (
      <Trigger asChild={asChild} ref={forwardedRef} {...props}>
        {children}
      </Trigger>
    );
  },
);
