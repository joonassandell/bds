import type * as Radix from '@radix-ui/react-collapsible';

export interface CollapsibleProps extends Radix.CollapsibleProps {}

export interface CollapsibleContentProps extends Radix.CollapsibleContentProps {
  /**
   * Enable/disable animation.
   */
  animate?: boolean;
}
