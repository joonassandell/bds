import { type StackedNavIndicatorProps } from './';
import React, { type FC } from 'react';

export const StackedNavIndicator: FC<StackedNavIndicatorProps> = ({
  children,
}) => (
  <div className="b-StackedNav-indicator">
    <div className="b-StackedNav-indicator-inner">{children}</div>
  </div>
);
