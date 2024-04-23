import { type GridProps } from './';
import { isNumber } from '../../lib/utils';
import c from 'clsx';
import React, { forwardRef } from 'react';

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      alignItems,
      children,
      className,
      gap = 'medium',
      minColWidth,
      rowGap,
      style,
      ...props
    },
    forwardedRef,
  ) => {
    const isMinColWidth = isNumber(minColWidth);
    const classes = c(className, 'b-Grid', {
      '-column:minColWidth': isMinColWidth,
      '-gap:0': gap === 0,
      '-gap:l': gap === 'large',
      '-gap:s': gap === 'small',
      '-rowGap': rowGap === 'medium',
      '-rowGap:0': rowGap === 0,
      '-rowGap:l': rowGap === 'large',
      '-rowGap:s': rowGap === 'small',
    });

    return (
      <div
        className={classes}
        ref={forwardedRef}
        style={{
          ...(isMinColWidth && {
            ['--b-Grid-minColWidth' as string]: `${minColWidth}px`,
          }),
          alignItems,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  },
);
