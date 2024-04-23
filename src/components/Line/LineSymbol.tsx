import { type LineSymbolProps } from './';
import React, { type FC } from 'react';

export const LineSymbol: FC<LineSymbolProps> = ({
  borderColor,
  borderWidth,
  color,
  size,
  innerPointColor,
}) => (
  <g>
    <circle fill="var(--b-surface-0)" r={size / 1.4} />
    <circle
      fill="var(--b-surface-0)"
      r={size / 2}
      stroke={borderColor}
      strokeWidth={borderWidth}
    />
    <circle fill={innerPointColor ?? color} r={size / 4} />
  </g>
);
