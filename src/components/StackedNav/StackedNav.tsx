import { getCssSpaceHelpers } from '../../lib/utils';
import { type StackedNavProps } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const StackedNav: FC<StackedNavProps> = ({
  align = 'left',
  className,
  children,
  ...props
}) => {
  const classes = c(className, 'b-StackedNav', {
    '-align:right': align === 'right',
    ...getCssSpaceHelpers(props),
  });

  return (
    <nav className={classes}>
      <ul>{children}</ul>
    </nav>
  );
};
