import { Primitive } from '../../types';
import { Slot } from '@radix-ui/react-slot';
import { type TabLinkProps } from './';
import c from 'clsx';
import React, {
  forwardRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from 'react';

export const TabLink = forwardRef<HTMLLinkElement, TabLinkProps>(
  (
    { active, asChild, children, className, disabled, value, ...props },
    forwardedRef,
  ) => {
    const classes = c(className, 'b-Tabs-list-tab', {
      'is-disabled': disabled,
    });
    const { variant, ...restProps } = props as any;
    const defaultVariant = !variant || variant === 'default';
    const Trigger = asChild
      ? Slot
      : (Primitive.a as ForwardRefExoticComponent<
          RefAttributes<HTMLLinkElement>
        >);

    return (
      <div className={classes}>
        <Trigger
          {...restProps}
          className="b-Tabs-list-tab-trigger"
          data-state={active === value ? 'active' : 'inactive'}
          ref={forwardedRef}
          tabIndex={!disabled ? 0 : -1}
        >
          {children}
        </Trigger>
        {defaultVariant && (
          <>
            <div className="b-Tabs-list-tab-left" />
            <div className="b-Tabs-list-tab-right" />
          </>
        )}
      </div>
    );
  },
);
