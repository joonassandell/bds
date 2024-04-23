import 'focus-visible';
import { type BaseProviderProps, type ProviderProps } from './';
import { domMax, LazyMotion } from 'framer-motion';
import { MediaContextProvider } from '../Media';
import { ThemeProvider } from '../Theme';
import { TooltipProvider } from '../Tooltip';
import React, { type FC } from 'react';

export const Provider: FC<ProviderProps> = ({
  children,
  mediaProvider,
  themeProvider,
  tooltipProvider,
}) => (
  <LazyMotion features={domMax} strict>
    <ThemeProvider {...themeProvider}>
      <TooltipProvider {...tooltipProvider}>
        <MediaContextProvider {...mediaProvider}>
          {children}
        </MediaContextProvider>
      </TooltipProvider>
    </ThemeProvider>
  </LazyMotion>
);

export const BaseProvider: FC<BaseProviderProps> = ({ children }) => (
  <LazyMotion features={domMax} strict>
    {children}
  </LazyMotion>
);
