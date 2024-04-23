import {
  type HelperMarginProps,
  type HelperPaddingLeftProps,
  type HelperPaddingRightProps,
  type HelperPaddingTopProps,
} from '../../types';
import type * as Radix from '@radix-ui/react-tabs';

export interface TabsProps
  extends Omit<Radix.TabsProps, 'orientation' | 'dir'> {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Mode
   *
   * @defaultValue default
   * @param default Default behaviour
   * @param navigation Makes tabs work like a navigation together with
   * `<TabLink />`. Apply if you're using tabs without TabContent.
   * `onValueChange`, `value` and `defaultValue` will have no effect if this
   * is set.
   */
  mode?: 'default' | 'navigation';
}

export interface TabsListProps
  extends Radix.TabsListProps,
    HelperMarginProps,
    HelperPaddingLeftProps,
    HelperPaddingRightProps,
    HelperPaddingTopProps {
  /**
   * Add border below the list
   *
   * @defaultValue true
   * @param true Show border
   * @param false Hide border
   */
  border?: boolean;

  /**
   * Change border color of the tabs and border below
   *
   * @defaultValue default
   * @param default Uses default border color set by the variant
   * @param strong Strong border color
   */
  borderColor?: 'default' | 'strong';

  /**
   * Make tabs scrollable horizontally
   *
   * @defaultValue true
   * @param true Enable ScrollArea
   * @param false Disable ScrollArea
   */
  scrollArea?: boolean;

  /**
   * Variant
   *
   * @defaultValue default
   * @param default Default styling
   * @param primary Primary styling
   */
  variant?: 'default' | 'primary';
}

export interface TabProps extends Radix.TabsTriggerProps {}

export interface TabLinkProps extends Radix.TabsTriggerProps {
  /**
   * Set the active value which needs to match with the controlled `value`
   *
   * @defaultValue undefined
   */
  active: string;
}

export interface TabContentProps extends Radix.TabsContentProps {}
