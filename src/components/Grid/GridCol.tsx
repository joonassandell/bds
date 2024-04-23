import { getCssSpaceHelpers } from '../../lib/utils';
import { getGridColSpanClass, getGridColStartClass } from './Grid.utils';
import { type GridColProps } from './';
import { HELPER } from '../../lib/config';
import { omit } from 'ramda';
import { Slot } from '@radix-ui/react-slot';
import c from 'clsx';
import React, { forwardRef } from 'react';

export const GridCol = forwardRef<HTMLDivElement, GridColProps>(
  (
    { alignSelf, className, children, colSpan, colStart, asChild, ...props },
    forwardedRef,
  ) => {
    const classes = c(className, 'b-Grid-col', {
      ...getGridColSpanClass(colSpan),
      ...getGridColStartClass(colStart),
      ...getCssSpaceHelpers(props),
    });
    const Tag = asChild ? Slot : 'div';

    const restProps = omit(HELPER, props);

    return (
      <Tag
        className={classes}
        ref={forwardedRef}
        style={{
          alignSelf,
        }}
        {...restProps}
      >
        {children}
      </Tag>
    );
  },
);
