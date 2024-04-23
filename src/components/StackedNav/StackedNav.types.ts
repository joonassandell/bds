import { type AvatarProps } from '../Avatar';
import { type Helpers, type PrimitiveLinkPropsWithRef } from '../../types';
import { type IconProps } from '../Icon';
import { type PropsWithChildren } from 'react';

export interface StackedNavProps extends Helpers, PropsWithChildren {
  /**
   * Alignment of contents and styling based on where StackedNav is positioned
   *
   * @defaultValue left
   * @param left Aligns StackedNavIndicator to right
   * @param right Aligns StackedNavIndicator to left
   */
  align?: 'left' | 'right';

  /**
   * CSS class
   */
  className?: string;
}

export interface StackedNavItemProps extends PropsWithChildren {
  /**
   * CSS class
   */
  className?: string;
}

export interface StackedNavIndicatorProps extends PropsWithChildren {}

export interface StackedNavItemContextProps extends PropsWithChildren {
  active: boolean;
  open: boolean;
  setActive: (value: boolean) => void;
  setOpen: (value: boolean) => void;
  setSubNav: (value: boolean) => void;
  subNav: boolean;
}

export interface StackedNavLinkProps extends PrimitiveLinkPropsWithRef {
  /**
   * Set active state
   */
  active?: boolean;

  /**
   * Open sub navigation (and link) on initial click if subnav exists
   *
   * @defaultValue true
   * @param true Assumption is that the link works as a group for
   * the sub navigation and links to the first element. You should set the same
   * href for the link and for the the first sub nav link. Also, active state
   * should only be set for the sub nav link so that there aren't multiple
   * active states. If the href's don't match, then the sub nav is opened and you
   * should set the active state for the link instead of the sub nav link.
   * @param false Doesn't open the sub nav.
   */
  initialSubNavOpen?: boolean;
}

export interface StackedNavSubProps extends Helpers, PropsWithChildren {
  open?: boolean;
}

export interface StackedNavIconProps {
  name: IconProps['name'];
}

export interface StackedNavAvatarProps
  extends Pick<AvatarProps, 'name' | 'image'> {}

export interface StackedNavLabelProps extends Helpers, PropsWithChildren {}
