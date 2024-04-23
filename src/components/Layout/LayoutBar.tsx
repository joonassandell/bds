import { type LayoutBarProps } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const LayoutBar: FC<LayoutBarProps> = ({
  className,
  children,
  sticky = true,
}) => {
  const classes = c(className, 'b-Layout-bar', {
    'is-sticky': sticky,
  });

  return (
    <div className={classes}>
      <div className="b-Layout-bar-inner">{children}</div>
    </div>
  );
};
