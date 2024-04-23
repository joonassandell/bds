import { type ListItemProps } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const ListItem: FC<ListItemProps> = ({ children, className }) => {
  const classes = c('b-List-item', className);

  return <div className={classes}>{children}</div>;
};
