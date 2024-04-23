import { Avatar } from '../Avatar';
import { type StackedNavAvatarProps } from './';
import React, { type FC } from 'react';

export const StackedNavAvatar: FC<StackedNavAvatarProps> = ({ ...props }) => (
  <Avatar className="b-StackedNav-avatar" size="medium" {...props} />
);
