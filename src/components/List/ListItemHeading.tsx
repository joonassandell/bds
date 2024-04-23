import { type ListItemHeadingProps } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const ListItemHeading: FC<ListItemHeadingProps> = ({
  children,
  className,
}) => {
  const classes = c('b-List-heading', className);

  return <dt className={classes}>{children}</dt>;
};
