import { type Helpers, type Required } from '../../types';
import { type ReactNode } from 'react';
import { type SelectProps } from '../Select';
import { type TextProps } from '../Text';
import type * as CSS from 'csstype';
import type * as Radix from '@radix-ui/react-dropdown-menu';

export interface MenuProps
  extends Omit<
    Required<Radix.DropdownMenuProps, 'open' | 'onOpenChange'>,
    'defaultOpen'
  > {
  /**
   * Specify a container element to portal the content into
   */
  container?: Radix.DropdownMenuPortalProps['container'];
}

export interface MenuContentProps extends Radix.DropdownMenuContentProps {
  /**
   * Apply predefined width
   *
   * @defaultValue medium
   * @param fit Respect the width of the Menu's content
   * @param trigger Apply trigger's width, which should be lengthy
   */
  width?: 'medium' | 'large' | 'xLarge' | 'fit' | 'trigger';
}

export interface MenuGroupProps extends Radix.DropdownMenuGroupProps, Helpers {
  /**
   * Render a label. It won't be focusable using arrow keys.
   */
  label?: string | ReactNode;

  /**
   * Label variant
   *
   * @defaultValue subtitle
   * @param subtitle Uses `<Subtitle />`
   * @param text Plain light text
   */
  labelVariant?: 'subtitle' | 'text';
}

export interface MenuTriggerProps extends Radix.DropdownMenuTriggerProps {}

export interface MenuGroupLabelProps extends Radix.DropdownMenuLabelProps {}

export interface MenuTextProps extends TextProps {
  /**
   * CSS property: justify-content
   */
  justifyContent?: CSS.Property.JustifyContent;
}

export interface MenuItemProps extends Radix.DropdownMenuItemProps {
  /**
   * Remove the focus when using arrow keys. Use when applying content that
   * isn't clickable, displays rich content or is just plain informative text.
   */
  skipFocus?: boolean;
}

export interface SubMenuTriggerProps
  extends Omit<Radix.DropdownMenuSubTriggerProps, 'asChild'> {}

export interface SubMenuProps extends Radix.DropdownMenuSubProps {}

export interface SubContentProps extends Radix.MenuSubContentProps {
  width?: MenuContentProps['width'];
}

export interface MenuSeparatorProps extends Radix.MenuSeparatorProps {}

export type MenuSelectProps = SelectProps;
