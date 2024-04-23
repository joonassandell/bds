import { Icon } from '../Icon';
import { MenuText, type SubMenuTriggerProps } from './';
import { SubTrigger } from '@radix-ui/react-dropdown-menu';
import c from 'clsx';
import React, { type FC } from 'react';

export const SubMenuTrigger: FC<SubMenuTriggerProps> = ({
  className,
  children,
  ...props
}) => {
  const classes = c('b-Menu-item b-Menu-item--subTrigger', className);

  return (
    <SubTrigger className={classes} {...props}>
      <MenuText>
        <MenuText>{children}</MenuText>
        <Icon name="caretRight" size="xSmall" />
      </MenuText>
    </SubTrigger>
  );
};
