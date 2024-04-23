import { type AuthLayoutProps } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const AuthLayout: FC<AuthLayoutProps> = ({ className, children }) => {
  const classes = c(className, 'b-AuthLayout');

  return <div className={classes}>{children}</div>;
};
