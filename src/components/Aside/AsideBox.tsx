import { type AsideBoxProps } from './';
import { getCssSpaceHelpers } from '../../lib/utils';
import c from 'clsx';
import React, { forwardRef } from 'react';

export const AsideBox = forwardRef<HTMLDivElement, AsideBoxProps>(
  ({ children, ...props }, forwardedRef) => {
    const classes = c('b-Aside-box', {
      ...getCssSpaceHelpers(props),
    });

    return (
      <section className={classes} ref={forwardedRef}>
        {children}
      </section>
    );
  },
);
