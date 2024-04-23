import { type BoxesProps } from './';
import { getCssSpaceHelpers, isNumber } from '../../lib/utils';
import { Primitive } from '@radix-ui/react-primitive';
import { Slot } from '@radix-ui/react-slot';
import c from 'clsx';
import React, { type FC } from 'react';

export const Boxes: FC<BoxesProps> = ({
  asChild,
  border = true,
  borderColor = 'var(--b-border-100)',
  borderOuterColor,
  children,
  className,
  minBoxWidth,
  ...props
}) => {
  const isMinBoxWidth = isNumber(minBoxWidth);
  const classes = c(className, 'b-Boxes', {
    '-border': border,
    '-border:size:s': border === 'small',
    ...getCssSpaceHelpers(props),
  });
  const Component = asChild ? Slot : Primitive.div;

  return (
    <Component
      className={classes}
      style={{
        ['--b-Boxes-border-color' as string]: borderColor,
        ['--b-Boxes-border-outer-color' as string]: borderOuterColor,
        ...(isMinBoxWidth && {
          gridTemplateColumns: `repeat(auto-fit, minmax(${minBoxWidth}px, 1fr))`,
        }),
      }}
    >
      {children}
    </Component>
  );
};
