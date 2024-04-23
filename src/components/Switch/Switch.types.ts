import { type FC } from 'react';
import { type SwitchProps as RadixSwitchProps } from '@radix-ui/react-switch';

export interface SwitchProps extends RadixSwitchProps {
  HelpButtonWrapper?: FC;
  checked: boolean;
  /**
   * CSS class
   */
  className?: string;
  helpOnClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  id: string;
  label?: string;
}
