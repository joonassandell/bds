import { type WrapProps } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const Wrap: FC<WrapProps> = ({ className, children, size }) => {
  const classes = c(className, 'b-Wrap', {
    '-size:s': size === 'small',
    '-size:xs': size === 'xSmall',
  });

  return <div className={classes}>{children}</div>;
};
