import { type MenuSeparatorProps } from './';
import { Separator } from '@radix-ui/react-dropdown-menu';
import c from 'clsx';
import React, { type FC } from 'react';

export const MenuSeparator: FC<MenuSeparatorProps> = ({
  className,
  ...props
}) => {
  const classes = c('b-Menu-separator', className);

  return <Separator className={classes} {...props} />;
};
