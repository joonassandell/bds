import { Arrow } from '@radix-ui/react-tooltip';
import { type TooltipArrowProps } from './';
import React, { type FC } from 'react';

export const TooltipArrow: FC<TooltipArrowProps> = ({
  offset = 8,
  ...props
}) => <Arrow className="b-Tooltip-arrow" offset={offset} {...props} />;
