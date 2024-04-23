import { Sub } from '@radix-ui/react-dropdown-menu';
import { type SubMenuProps } from './';
import React, { type FC } from 'react';

export const SubMenu: FC<SubMenuProps> = ({ children, ...props }) => (
  <Sub {...props}>{children}</Sub>
);
