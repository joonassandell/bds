import { type LayoutMainProps } from './';
import React, { type FC } from 'react';

export const LayoutMain: FC<LayoutMainProps> = ({ children }) => (
  <main className="b-Layout-main">{children}</main>
);
