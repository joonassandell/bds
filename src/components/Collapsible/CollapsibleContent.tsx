import { type CollapsibleContentProps } from './';
import { Content } from '@radix-ui/react-collapsible';
import c from 'clsx';
import React, { type FC } from 'react';

export const CollapsibleContent: FC<CollapsibleContentProps> = ({
  animate = true,
  children,
  className,
  ...props
}) => {
  const classes = c(className, 'b-Collabsible-content', {
    '-animate': animate,
  });

  return (
    <Content className={classes} {...props}>
      {children}
    </Content>
  );
};
