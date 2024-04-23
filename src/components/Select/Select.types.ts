import { type BeaconProps } from '../Beacon';
import { type CreatableAdditionalProps } from 'react-select/dist/declarations/src/useCreatable';
import { type FC, type MouseEvent } from 'react';
import { type GroupBase, type Props } from 'react-select';
import { type HelperMarginProps } from '../../types';
import { type IconProps } from '../Icon';

export type SelectOptions = {
  isDisabled?: boolean;
  label?: string;
  value?: string | number | boolean | null | undefined;
} | null;

interface CommonSelectProps extends Props<SelectOptions>, HelperMarginProps {
  HelpButtonWrapper?: FC;

  /**
   * Animate the Select menu
   *
   * @defaultValue true
   * @param true Animates menu opening and closing
   * @param false Open and close menu instantly. Disables also the inner open
   * state handling.
   */
  animate?: boolean;
  beacon?: BeaconProps['variant'];
  beaconProps?: BeaconProps;
  className?: string;
  disabled?: Props['isDisabled'];
  enableMenu?: boolean;
  error?: string | false;
  helpOnClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  hint?: string;
  icon?: Extract<IconProps['name'], 'select' | 'plus' | 'search'>;
  id: Props['id'];
  label?: string;
  labelSuffix?: string;
  loading?: Props['isLoading'];
  multi?: boolean;
  noOptionsMessage?: Props['noOptionsMessage'];
  open?: Props['menuIsOpen'];
  placeholderColor?: 'default' | 'strong';
  placeholderIcon?: IconProps['name'];

  /**
   * Enable automatic tooltip for selected value that could be truncated.
   * Currently, there's an issue which makes the select stay focusable forever
   * when value is selected and also the tooltip keeps popping up for no reason
   * if the tooltip is being used. This is especially noticeable with multi
   * select and should be fixed if the tooltip is needed.
   *
   * @defaultValue false
   * @param true Enable tooltip
   * @param false Disable tooltip
   */
  tooltip?: boolean;

  /**
   * Variant
   */
  variant?: 'outline';
  warning?: string | false;
}

// Enable creatable properties only when creatable is true
type CreatableProps =
  | {
      creatable?: false;
      formatCreateLabel?: never;
      onCreateOption?: never;
    }
  | {
      creatable: boolean;
      formatCreateLabel?: CreatableAdditionalProps<
        SelectOptions,
        GroupBase<SelectOptions>
      >['formatCreateLabel'];
      onCreateOption?: CreatableAdditionalProps<
        SelectOptions,
        GroupBase<SelectOptions>
      >['onCreateOption'];
    };

export type SelectProps = CommonSelectProps & CreatableProps;
