import { type BadgesProps } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const Badges: FC<BadgesProps> = ({ className, children }) => {
  const classes = c(className, 'b-Badges');

  return <div className={classes}>{children}</div>;
};
