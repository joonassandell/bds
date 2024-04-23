import { type AlertDialogTriggerProps } from './';
import { Primitive } from '../../types';
import { Slot } from '@radix-ui/react-slot';
import { Trigger } from '@radix-ui/react-alert-dialog';
import React, { forwardRef } from 'react';

export const AlertDialogTrigger = forwardRef<
  HTMLButtonElement,
  AlertDialogTriggerProps
>(
  (
    { asChild, alertDialogId, children, onClick, open, triggerRef, ...props },
    forwadedRef,
  ) => {
    const hasOutsideContextTrigger = alertDialogId;

    // Mimic the original radix-dialog Trigger
    if (hasOutsideContextTrigger) {
      const Component = asChild ? Slot : Primitive.button;

      return (
        <Component
          aria-controls={alertDialogId}
          aria-expanded={open}
          aria-haspopup="dialog"
          data-state={open ? 'open' : 'closed'}
          onClick={e => {
            triggerRef && (triggerRef.current = e.currentTarget);
            onClick && onClick(e);
          }}
          ref={forwadedRef}
          {...props}
        >
          {children}
        </Component>
      );
    }

    return (
      <Trigger asChild={asChild} ref={forwadedRef} {...props}>
        {children}
      </Trigger>
    );
  },
);
