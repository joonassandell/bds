import { type ButtonsProps } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const Buttons: FC<ButtonsProps> = ({
  className,
  children,
  gap = 'small',
  flexWrap,
  justifyContent,
  width,
}) => {
  const classes = c(className, 'b-Buttons', {
    '-gap:2xs': gap === '2xSmall',
    '-gap:xs': gap === 'xSmall',
  });

  return (
    <div className={classes} style={{ flexWrap, justifyContent, width }}>
      {children}
    </div>
  );
};
