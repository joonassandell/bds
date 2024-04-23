import { getCssSpaceHelper } from '../../lib/utils';
import { type HeadingInputProps } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const HeadingInput: FC<HeadingInputProps> = ({
  autoComplete = 'off',
  autoFocus,
  className,
  id,
  marginBottom,
  marginTop,
  name,
  ...props
}) => {
  const classes = c(
    'b-HeadingInput',
    {
      'is-autoFocus': autoFocus,
      ...getCssSpaceHelper('marginBottom', marginBottom),
      ...getCssSpaceHelper('marginTop', marginTop),
    },
    className,
  );

  return (
    <input
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      className={classes}
      id={id}
      name={name ?? id}
      {...props}
    />
  );
};
