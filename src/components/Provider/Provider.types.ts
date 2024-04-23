import { type MediaProviderProps } from '../Media';
import { type PropsWithChildren } from 'react';
import { type ThemeProviderProps } from '../Theme';
import { type TooltipProviderProps } from '../Tooltip';

export interface ProviderProps extends PropsWithChildren {
  mediaProvider?: MediaProviderProps;
  themeProvider?: ThemeProviderProps;
  tooltipProvider?: TooltipProviderProps;
}

export interface BaseProviderProps extends PropsWithChildren {}
