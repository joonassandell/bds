import { type MutableRefObject } from 'react';
import { type Required } from '../../types';
import type * as Radix from '@radix-ui/react-alert-dialog';

export interface AlertDialogProps
  extends Omit<
      Required<Radix.AlertDialogProps, 'open' | 'onOpenChange'>,
      'defaultOpen' | 'modal'
    >,
    Omit<Radix.AlertDialogContentProps, 'asChild' | 'forceMount'> {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Add id if AlertDialogTrigger is used outside this root component. Needs to
   * match with the id applied to the Trigger.
   */
  id?: string;

  /**
   * Add trigger ref if AlertDialogTrigger is used outside this root component.
   */
  triggerRef?: MutableRefObject<HTMLButtonElement | undefined>;
}

export interface AlertDialogTitleProps extends Radix.AlertDialogTitleProps {}

export interface AlertDialogDescriptionProps
  extends Radix.AlertDialogDescriptionProps {}

export interface AlertDialogTriggerProps extends Radix.DialogTriggerProps {
  /**
   * Add id if trigger is used outside the AlertDialog component. Needs to
   * match with the id applied to AlertDialog.
   */
  alertDialogId?: AlertDialogProps['id'];

  /**
   * Add open if trigger is used outside the AlertDialog component.
   */
  open?: AlertDialogProps['open'];

  /**
   * Add trigger ref if trigger is used outside the AlertDialog component.
   */
  triggerRef?: AlertDialogProps['triggerRef'];
}
