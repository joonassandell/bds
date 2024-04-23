import { type Required } from '../../types';
import type * as Radix from '@radix-ui/react-popover';

export interface PopoverProps
  extends Omit<
    Required<Radix.PopoverProps, 'open' | 'onOpenChange'>,
    'defaultOpen'
  > {
  /**
   * CSS class
   */
  className?: string;
  /**
   * Specify a container element to portal the content into.
   */
  container?: Radix.PopoverPortalProps['container'];
}

export interface PopoverTriggerProps extends Radix.PopoverTriggerProps {}

export interface PopoverContentProps extends Radix.PopoverContentProps {
  minWidth?: 'base' | 'medium' | 'large';
}
