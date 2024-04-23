import { type BeaconProps } from '../Beacon';
import {
  type FC,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from 'react';
import {
  type HelperMarginBottomProps,
  type HelperMarginTopProps,
} from '../../types';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    HelperMarginBottomProps,
    HelperMarginTopProps {
  HelpButtonWrapper?: FC;

  /**
   * Add beacon next to input label
   */
  beacon?: BeaconProps['variant'] | 'none';
  beaconProps?: BeaconProps;

  /**
   * CSS class
   */
  className?: string;

  /**
   * Apply surface color if the Input is used above surface 2 component
   * e.g. in Fieldset
   */
  color?: 'surface:3';

  /**
   * If you add negative values it'll be 0 because negative values
   * are not allowed by default unless you set this to _true_.
   */
  enableNegativeValues?: boolean;

  /**
   * Error text. Preferrably use `warning` prop.
   */
  error?: string | false | ReactNode;

  /**
   * Help icon click handler. Applying this determines the if the help icon is
   * visible after the label.
   */
  helpOnClick?: (e: MouseEvent) => void;

  /**
   * Display tooltip text if help icon is not used as a trigger for open / close things, eg. info side bar.
   */
  helpText?: string;

  /**
   * Hint text below input.
   */
  hint?: string;

  /**
   * Id of the input.
   */
  id: InputHTMLAttributes<HTMLInputElement>['id'];

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
   * Input type. Restricted to specific types.
   */
  type?: Extract<
    HTMLInputTypeAttribute,
    | 'email'
    | 'hidden'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url'
  >;

  /**
   * Unit which is displayed after the value.
   */
  unit?: string;

  /**
   * Warning text. If `error` is set this will be hidden.
   */
  warning?: string | false;
}
