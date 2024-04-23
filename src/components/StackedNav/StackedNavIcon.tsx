import { Icon } from '../Icon';
import { type StackedNavIconProps } from './';
import React, { type FC } from 'react';

export const StackedNavIcon: FC<StackedNavIconProps> = ({ name }) => (
  <Icon className="b-StackedNav-icon" name={name} size="small" />
);
