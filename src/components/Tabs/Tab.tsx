import { addTooltipIfTruncated } from '../Tooltip';
import { Trigger as RadixTrigger } from '@radix-ui/react-tabs';
import { type TabProps } from './';
import c from 'clsx';
import React, { forwardRef } from 'react';
const Trigger = addTooltipIfTruncated(RadixTrigger);

export const Tab = forwardRef<HTMLLinkElement, TabProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const classes = c(className, 'b-Tabs-list-tab', {
      'is-disabled': props.disabled,
    });
    const { variant, ...restProps } = props as any;
    const defaultVariant = !variant || variant === 'default';

    return (
      <div className={classes}>
        <Trigger
          className="b-Tabs-list-tab-trigger"
          {...restProps}
          ref={forwardedRef}
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
