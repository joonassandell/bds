import { Arrow, Close, Content } from '@radix-ui/react-popover';
import { Button } from '../Button';
import { type PopoverContentProps } from './';
import { ScrollArea } from '../ScrollArea';
import c from 'clsx';
import React, { forwardRef, useEffect } from 'react';

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ children, className, minWidth, ...props }, forwardedRef) => {
    const classes = c('b-Popover-content', className, {
      '-minWidth:l': minWidth === 'large',
      '-minWidth:m': minWidth === 'medium',
    });

    // Read Changelog 0.3.35 issue.
    useEffect(
      () => () => {
        document.body.style.pointerEvents = '';
      },
      [],
    );

    return (
      <Content
        className={classes}
        collisionPadding={24}
        forceMount
        ref={forwardedRef}
        {...props}
      >
        <ScrollArea orientation="vertical">
          <div className={'b-Popover-content-inner'}>
            <Close asChild className="b-Popover-close">
              <Button icon="close" justify="block" size="small" variant="plain">
                Close
              </Button>
            </Close>
            {children} <Arrow className="b-Popover-arrow" />
          </div>
        </ScrollArea>
      </Content>
    );
  },
);
