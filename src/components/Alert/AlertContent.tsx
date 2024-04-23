import { type AlertContentProps } from './';
import React, { type FC } from 'react';

export const AlertContent: FC<AlertContentProps> = ({ children }) => (
  <div className="b-Alert-content">{children}</div>
);
