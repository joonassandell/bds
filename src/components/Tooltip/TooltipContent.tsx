import { Content } from '@radix-ui/react-tooltip';
import { type TooltipContentProps } from './';
import React, { forwardRef } from 'react';

export const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ children, ...props }, forwardedRef) => (
    <Content className="b-Tooltip-content" ref={forwardedRef} {...props}>
      {children}
    </Content>
  ),
);
