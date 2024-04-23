import { type MenuTextProps } from './';
import { Text } from '../Text';
import c from 'clsx';
import React, { type FC } from 'react';

export const MenuText: FC<MenuTextProps> = ({
  className,
  children,
  justifyContent,
  truncate = true,
  ...props
}) => {
  const classes = c('b-Menu-text', className);

  return (
    <Text
      className={classes}
      style={{
        justifyContent,
      }}
      truncate={truncate}
      {...props}
    >
      {children}
    </Text>
  );
};
