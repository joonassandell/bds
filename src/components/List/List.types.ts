import { type ProgressProps } from '../Progress';
import { type PropsWithChildren } from 'react';
import { type SeparatorProps } from '../Separator';

export interface ListProps extends PropsWithChildren {
  className?: string;
}

export interface ListItemProps extends PropsWithChildren {
  className?: string;
}

export interface ListItemHeadingProps extends PropsWithChildren {
  className?: string;
}

export interface ListItemHeadingTextProps extends PropsWithChildren {
  className?: string;
  truncate?: boolean;
  /**
   * Custom tooltip content if text is truncated. If this is not set, then the
   * contents of children is used instead.
   */
  truncateTooltip?: string;
}

export interface ListItemValueProps extends PropsWithChildren {
  /**
   * Custom props for the delta (amount change)
   */
  amountChange?: ProgressProps['amountChange'];

  className?: string;

  /**
   * Used for animating the delta change, if necessary. Automatically has change value animation. Pleased use children for other displaying purposes.
   */
  number?: number | string | null;
  /**
   * If children are pure text, we can truncate it instead of using Text or other text base component for truncating
   */
  truncate?: boolean;
}

export interface ListItemSeparatorProps extends SeparatorProps {}
