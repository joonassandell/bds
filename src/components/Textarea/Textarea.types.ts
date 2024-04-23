import { type BeaconProps } from '../Beacon';
import {
  type HelperMarginBottomProps,
  type HelperMarginTopProps,
} from '../../types';
import { type MouseEvent, type TextareaHTMLAttributes } from 'react';
import type * as CSS from 'csstype';

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    HelperMarginBottomProps,
    HelperMarginTopProps {
  /**
   * Add beacon next to input label
   */
  beacon?: BeaconProps['variant'];
  beaconProps?: BeaconProps;

  /**
   * CSS class
   */
  className?: string;

  /**
   * Apply surface color if the Textarea is used above surface 2 component
   * e.g. in Fieldset
   */
  color?: 'surface:3';

  /**
   * Error text. Preferrably use `warning` prop.
   */
  error?: string | false;

  /**
   * Help icon click handler. This determines the if the help icon is visible
   * after the label.
   */
  helpOnClick?: (e: MouseEvent) => void;

  /**
   * Hint text below input.
   */
  hint?: string;

  /**
   * Id of the input.
   */
  id: TextareaHTMLAttributes<HTMLTextAreaElement>['id'];

  /**
   * Input label.
   */
  label?: string;

  /**
   * Input label suffix.
   */
  labelSuffix?: string;

  /**
   * Display loading state.
   */
  loading?: boolean;

  /**
   * Apply min height, preferrably in rems.
   */
  minHeight?: CSS.Property.MinHeight;

  /**
   * CSS property: resize
   */
  resize?: CSS.Property.Resize;

  /**
   * Variant
   */
  variant?: 'default' | 'plain';

  /**
   * Warning text. If `error` is set this will be hidden.
   */
  warning?: string | false;
}
