import { type HeadingSize } from '../Heading';
import {
  type HelperPaddingProps,
  type Helpers,
  type Required,
} from '../../types';
import { type IconProps } from '../Icon';
import { type PropsWithChildren } from 'react';
import type * as Radix from '@radix-ui/react-accordion';

export interface AccordionProps
  extends Omit<
      Required<Radix.AccordionSingleProps, 'value' | 'onValueChange'>,
      'type' | 'collapsible' | 'defaultValue'
    >,
    Helpers {}

export interface AccordionItemProps
  extends HelperPaddingProps,
    Radix.AccordionItemProps {}

export interface AccordionHeaderProps extends Helpers, PropsWithChildren {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Layout
   *
   * @param default Default layout with built in AccordionTrigger
   * @param custom Customise layout for the AccordionHeader
   */
  layout?: 'default' | 'custom';
}

export interface AccordionPanelProps extends Radix.AccordionContentProps {}

export interface AccordionContentProps extends Helpers, PropsWithChildren {
  /**
   * CSS class
   */
  className?: string;
}

export interface AccordionIconProps extends Omit<IconProps, 'name'> {
  /**
   * Icon, with the default value icon has custom animation
   *
   * @defaultValue { close: 'minus', open: 'plus' }
   * @param icon.close Change the close icon
   * @param icon.open Change the open icon
   */
  icon?: {
    close?: IconProps['name'];
    open?: IconProps['name'];
  };
}

export interface AccordionTitleProps extends Helpers, PropsWithChildren {
  asChild?: Radix.AccordionHeaderProps['asChild'];

  /**
   * CSS class
   */
  className?: string;

  /**
   * HTML section heading element (tag) of the heading
   */
  element?: HeadingSize;
}
