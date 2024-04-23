import { type MutableRefObject } from 'react';
import { type Required } from '../../types';
import type * as Radix from '@radix-ui/react-dialog';

export interface DialogProps
  extends Omit<
      Required<Radix.DialogProps, 'open' | 'onOpenChange'>,
      'defaultOpen' | 'modal'
    >,
    Omit<Radix.DialogContentProps, 'asChild' | 'forceMount'> {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Add accessible label for the default close button.
   */
  closeAriaLabel: string;

  /**
   * Add id if DialogTrigger is used outside this root component. Needs to
   * match with the id applied to the DialogTrigger.
   */
  id?: string;

  /**
   * Add trigger ref if DialogTrigger is used outside the this component.
   */
  triggerRef?: MutableRefObject<HTMLButtonElement | undefined>;
}

export interface DialogTitleProps extends Radix.DialogTitleProps {}

export interface DialogDescriptionProps extends Radix.DialogDescriptionProps {}

export interface DialogTriggerProps extends Radix.DialogTriggerProps {
  /**
   * Add id if trigger is used outside the Dialog component. Needs to match
   * with the id applied to Dialog.
   */
  dialogId?: DialogProps['id'];

  /**
   * Add open if trigger is used outside the Dialog component.
   */
  open?: DialogProps['open'];

  /**
   * Add trigger ref if DialogTrigger is used outside the Dialog component.
   */
  triggerRef?: DialogProps['triggerRef'];
}
