import { type HeadingSelectProps } from './HeadingSelect.types';
import c from 'clsx';
import React, { type FC } from 'react';

export const HeadingSelect: FC<HeadingSelectProps> = ({
  className,
  children,
}) => {
  const classes = c(className, 'b-HeadingSelect');

  return <div className={classes}>{children}</div>;
};
