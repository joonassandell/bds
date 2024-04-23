import { type ListProps } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const List: FC<ListProps> = ({ children, className }) => {
  const classes = c(className, 'b-List');

  return <dl className={classes}>{children}</dl>;
};
