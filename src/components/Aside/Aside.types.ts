import { type AvatarProps } from '../Avatar';
import { type Breakpoint, type Helpers, type Required } from '../../types';
import { type MutableRefObject, type PropsWithChildren } from 'react';
import type * as CSS from 'csstype';
import type * as Radix from '@radix-ui/react-dialog';

export interface AsideProps
  extends Omit<
      Required<Radix.DialogProps, 'open' | 'onOpenChange'>,
      'defaultOpen'
    >,
    Omit<Radix.DialogContentProps, 'asChild' | 'forceMount'> {
  /**
   * Alignment of contents and styling based on where Aside is positioned.
   * Note that in layout mode default styles assume that Aside is placed
   * similarly once layout is active.
   *
   * @defaultValue left
   */
  align?: 'left' | 'right';

  /**
   * Add Avatar with icon and/or name to top to e.g. idenfity active navigation
   * element etc. Visible only in layout mode. Add some space between the first
   * child in AsideMain and the avatar when the layout is activated.
   *
   * @defaultValue undefined
   */
  avatar?: Omit<AvatarProps, 'image' | 'size'>;

  /**
   * CSS class
   */
  className?: string;

  /**
   * Visibility of the default close button
   *
   * @defaultValue undefined
   * @param undefined Close button is visible only in focus
   * @param true Show close button
   * @param false Hide close button entirely, you should use this only if you're
   *  applying your custom AsideCloseButton.
   */
  close?: boolean;

  /**
   * Close button extra alignment, basic alignment is inherited from the `align`
   * property
   *
   * @defaultValue edge
   * @param edge At the edge of the Aside
   * @param inside Inside Aside
   */
  closeAlign?: 'edge' | 'inside';

  /**
   * Add accessible label for the default close button
   *
   * @defaultValue Close
   */
  closeAriaLabel: string;

  /**
   * Apply id if AsideTrigger is used outside the root component. Needs to match
   * with the id's applied to the AsideTrigger.
   *
   * @defaultValue undefined
   */
  id?: string;

  /**
   * Change the breakpoint width when to apply the layout in layout mode
   *
   * @defaultValue l
   */
  layoutBreakpoint?: Breakpoint;

  /**
   * Change the CSS property: height after the layout is activated in layout
   * mode
   *
   * @defaultValue 100vh
   */
  layoutHeight?: CSS.Property.Height;

  /**
   * Change the CSS property: position after the layout is activated in layout
   * mode
   *
   * @defaultValue fixed
   */
  layoutPosition?: CSS.Property.Position;

  /**
   * Change the CSS property: top after the layout is activated layout mode
   *
   * @defaultValue 0
   */
  layoutTop?: CSS.Property.Top;

  /**
   * Change the CSS property: width after the layout is activated in layout
   * mode
   *
   * @defaultValue Predefined width
   */
  layoutWidth?: CSS.Property.Width;

  /**
   * Modality of the Aside
   *
   * @defaultValue true
   * @param true Interaction with outside elements will be disabled and only
   * Aside content will be visible to screen readers
   * @param false Opposite of true
   */
  modal?: Radix.DialogProps['modal'];

  /**
   * Mode
   *
   * @defaultValue drawer
   * @param drawer Default popover behavior
   * @param layout Use the aside as part of the layout at the given `layoutBreakpoint`.
   * It works like the drawer in smaller widths than the applied breakpoint.
   */
  mode?: 'drawer' | 'layout';

  /**
   * Display overlay
   *
   * @defaultValue true
   * @param true Show overlay
   * @param false Hide overlay. To hide overlay, `modal` property needs to be `true` as it
   * wouldn't make sense to display overlay if interaction with outside elements
   * is enabled
   */
  overlay?: boolean;

  /**
   * An accessible title to be announced when the Aside is opened
   *
   * @defaultValue undefined
   */
  titleAriaLabel: string;

  /**
   * Add trigger ref if AsideTrigger is used outside this root component
   *
   * @defaultValue undefined
   */
  triggerRef?: MutableRefObject<HTMLButtonElement | undefined>;
}

export interface AsideTriggerProps extends Radix.DialogTriggerProps {
  /**
   * Add id if AsideTrigger is used outside the root component. Needs to match
   * with the id applied to Aside.
   *
   * @defaultValue undefined
   */
  asideId?: AsideProps['id'];

  /**
   * Add open if trigger is used outside the Aside component
   *
   * @defaultValue undefined
   */
  open?: AsideProps['open'];

  /**
   * Add trigger ref if trigger is used outside the Aside component
   *
   * @defaultValue undefined
   */
  triggerRef?: AsideProps['triggerRef'];
}

export interface AsideCloseProps extends Radix.DialogCloseProps {}

export interface AsideBoxProps extends Helpers, PropsWithChildren {}
