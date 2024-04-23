import { Provider } from '@radix-ui/react-tooltip';
import { type TooltipProviderProps } from './';
import React, { type FC } from 'react';

export const TooltipProvider: FC<TooltipProviderProps> = ({
  children,
  delayDuration = 500,
  ...props
}) => (
  <Provider delayDuration={delayDuration} {...props}>
    {children}
  </Provider>
);
