import { type SpinnerProps } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const Spinner: FC<SpinnerProps> = ({
  className,
  variant = 'primary',
  size = 'medium',
}) => {
  const classes = c(className, 'b-Spinner', {
    '-size:l': size === 'large',
    '-size:s': size === 'small',
    '-size:xs': size === 'xSmall',
    'b-Spinner--error': variant === 'error',
    'b-Spinner--primaryForeground': variant === 'primaryForeground',
    'b-Spinner--success': variant === 'success',
    'b-Spinner--warning': variant === 'warning',
  });

  return (
    <svg className={classes} height="40" viewBox="20 20 40 40" width="40">
      <circle className="b-Spinner-track" cx="40" cy="40" r="17.5" />
      <circle className="b-Spinner-thumb" cx="40" cy="40" r="17.5" />
    </svg>
  );
};
