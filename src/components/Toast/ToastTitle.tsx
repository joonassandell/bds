import { Title, type ToastTitleProps } from '@radix-ui/react-toast';
import c from 'clsx';
import React, { type FC } from 'react';

export const ToastTitle: FC<ToastTitleProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = c('b-Toast-title', className);

  return (
    <Title className={classes} {...props}>
      {children}
    </Title>
  );
};
