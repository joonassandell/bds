import { type LayoutMainInnerProps } from './';
import React, { type FC } from 'react';

export const LayoutMainInner: FC<LayoutMainInnerProps> = ({ children }) => (
  <div className="b-Layout-main-inner">{children}</div>
);
