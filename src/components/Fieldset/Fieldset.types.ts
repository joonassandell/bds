import { type Helpers } from '../../types';
import { type PropsWithChildren, type ReactElement } from 'react';

export interface FieldsetProps extends Helpers, PropsWithChildren {
  /**
   * CSS class
   */
  className?: string;

  helpButtonWrapper?: (children?: ReactElement) => JSX.Element;
  helpOnClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;

  /**
   * Add legend (or "subtitle" / "label" / "heading")
   */
  legend?: string;
}
