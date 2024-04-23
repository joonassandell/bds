import {
  type HelperMarginBottomProps,
  type HelperMarginTopProps,
  type PrimitiveDivPropsWithRef,
  type PrimitiveLinkPropsWithRef,
} from '../../types';
import { type PropsWithChildren } from 'react';

export interface BreadcrumbProps
  extends HelperMarginBottomProps,
    HelperMarginTopProps,
    PrimitiveDivPropsWithRef {
  /**
   * Custom aria-label attribute. By default it's 'Breadcrumb'.
   */
  ariaLabel?: string;

  /**
   * CSS class
   */
  className?: string;

  /**
   * Normally, the Breadcrumb is used as a navigation. However, when it's used
   * without links as presentational component (e.g. with Badges),
   * use 'decorative' instead.
   */
  mode?: 'default' | 'decorative';
}

export interface BreadcrumbItemProps extends PropsWithChildren {}

export interface BreadcrumbSeparatorProps {}

export interface BreadcrumbLinkProps extends PrimitiveLinkPropsWithRef {
  /**
   * CSS class
   */
  className?: string;
}
