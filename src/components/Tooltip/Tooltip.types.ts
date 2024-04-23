import { type ReactNode } from 'react';
import type * as Radix from '@radix-ui/react-tooltip';

export interface TooltipProps
  extends Omit<Radix.TooltipProps, 'children'>,
    Omit<Radix.TooltipContentProps, 'content'> {
  /**
   * Component or ReactNode to act as a trigger for the tooltip
   */
  children?: ReactNode;

  container?: Radix.TooltipPortalProps['container'];

  /**
   * Add tooltip content, preferrably just text.
   */
  content?: ReactNode;
}

export interface TooltipProviderProps extends Radix.TooltipProviderProps {}

export interface TooltipContentProps extends Radix.TooltipContentProps {}

export interface TooltipArrowProps extends Radix.TooltipArrowProps {}

export interface TooltipTriggerProps extends Radix.TooltipTriggerProps {}
