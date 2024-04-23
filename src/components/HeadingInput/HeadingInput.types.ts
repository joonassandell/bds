import {
  type HelperMarginBottomProps,
  type HelperMarginTopProps,
} from '../../types';
import { type InputHTMLAttributes } from 'react';

export interface HeadingInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    HelperMarginBottomProps,
    HelperMarginTopProps {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Id of the input.
   */
  id: InputHTMLAttributes<HTMLInputElement>['id'];
}
