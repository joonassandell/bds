import { type NivoTooltipProps } from './';
import c from 'clsx';
import React, { forwardRef } from 'react';

export const NivoTooltip = forwardRef<HTMLDivElement, NivoTooltipProps>(
  ({ className, children, style }, ref) => {
    const classes = c(className, 'b-NivoTooltip');

    return (
      <div className={classes} ref={ref} style={style}>
        {children}
      </div>
    );
  },
);
