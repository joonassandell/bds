import { type AsideProps } from '../Aside';
import { type Helpers, type PrimitiveButtonProps } from '../../types';
import { type PropsWithChildren } from 'react';

export interface LayoutProps extends PropsWithChildren {
  /**
   * CSS class
   */
  className?: string;
}

export interface LayoutContextProps {
  asideOpen: boolean;
  asideTriggerRef: AsideProps['triggerRef'];
  mainAsideOpen: boolean;
  mainAsideTriggerRef: AsideProps['triggerRef'];
  setAsideOpen: (value: boolean) => void;
  setMainAsideOpen: (value: boolean) => void;
}

/**
 * Applies forced settings for Aside, otherwise usage just like in Aside
 */
export interface LayoutAsideProps
  extends Omit<AsideProps, 'open' | 'onOpenChange'> {}

export interface LayoutAsideTriggerProps extends PrimitiveButtonProps {}

export interface LayoutMainProps extends PropsWithChildren {}

export interface LayoutMainAsideProps extends LayoutAsideProps {}

export interface LayoutMainInnerProps extends PropsWithChildren {}

export interface LayoutMainAsideTriggerProps extends PrimitiveButtonProps {}

export interface LayoutBarProps extends PropsWithChildren {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Set CSS property: sticky
   */
  sticky?: boolean;
}

export interface LayoutBoxProps extends Helpers, PropsWithChildren {
  /**
   * CSS class
   */
  className?: string;
}
