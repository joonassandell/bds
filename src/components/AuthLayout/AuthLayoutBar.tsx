import { type AuthLayoutBarProps } from './';
import React, { type FC } from 'react';

export const AuthLayoutBar: FC<AuthLayoutBarProps> = ({ children }) => (
  <div className="b-AuthLayout-bar">
    <div className="b-AuthLayout-bar-inner">{children}</div>
  </div>
);
