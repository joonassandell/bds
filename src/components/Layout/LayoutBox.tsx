import { getCssSpaceHelpers } from '../../lib/utils';
import { type LayoutBoxProps } from './';
import c from 'clsx';
import React, { forwardRef } from 'react';

export const LayoutBox = forwardRef<HTMLDivElement, LayoutBoxProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const classes = c(className, 'b-Layout-box', {
      ...getCssSpaceHelpers(props),
    });

    return (
      <div className={classes} ref={forwardedRef}>
        {children}
      </div>
    );
  },
);
