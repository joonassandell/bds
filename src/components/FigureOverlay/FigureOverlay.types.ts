import { type PrimitiveDivPropsWithRef } from '../../types';
import { type PropsWithChildren } from 'react';

export interface FigureOverlayProps
  extends PropsWithChildren,
    PrimitiveDivPropsWithRef {
  /**
   * CSS class
   */
  className?: string;
}
