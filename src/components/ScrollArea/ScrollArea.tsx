import {
  Corner,
  Root,
  Scrollbar,
  Thumb,
  Viewport,
} from '@radix-ui/react-scroll-area';
import { type ScrollAreaProps } from './';
import c from 'clsx';
import React, { forwardRef } from 'react';

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ children, orientation = 'vertical', className }, forwardedRef) => {
    const classes = c(className, 'b-ScrollArea');
    return (
      <Root className={classes} scrollHideDelay={300}>
        <Viewport className="b-ScrollArea-viewport" ref={forwardedRef}>
          {children}
        </Viewport>
        {orientation === 'vertical' && (
          <Scrollbar className="b-ScrollArea-scrollbar" orientation="vertical">
            <Thumb className="b-ScrollArea-scrollbar-thumb" />
          </Scrollbar>
        )}
        {orientation === 'horizontal' && (
          <Scrollbar
            className="b-ScrollArea-scrollbar"
            orientation="horizontal"
          >
            <Thumb className="b-ScrollArea-scrollbar-thumb" />
          </Scrollbar>
        )}
        <Corner />
      </Root>
    );
  },
);
