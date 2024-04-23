import { Primitive } from '../../types';
import { Slot } from '@radix-ui/react-slot';
import { type ThemeProps } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const Theme: FC<ThemeProps> = ({
  asChild,
  children,
  mode = 'light',
}) => {
  const classes = c('b-Theme', {
    'b-theme:dark': mode === 'dark',
    'b-theme:light': mode === 'light' || !mode,
  });
  const Component = asChild ? Slot : Primitive.div;

  return <Component className={classes}>{children}</Component>;
};
