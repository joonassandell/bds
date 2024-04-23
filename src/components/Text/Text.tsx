import { getCssSpaceHelper, isBoolean, isNumber } from '../../lib/utils';
import { type TextProps } from './';
import c from 'clsx';
import React, { forwardRef } from 'react';

export const Text = forwardRef<HTMLDivElement, TextProps>(
  (
    {
      children,
      className,
      color = 'neutral',
      colorAccent = 'light',
      marginBottom,
      marginTop,
      size,
      tag = 'div',
      truncate,
      style,
    },
    forwardedRef,
  ) => {
    const isTextTruncateClamp = isNumber(truncate) && truncate >= 2;
    const classes = c(className, 'b-Text', {
      '-color:accent:highlight': colorAccent === 'highlight',
      '-color:error': color === 'error',
      '-color:highlight': color === 'highlight',
      '-color:info': color === 'info',
      '-color:light': color === 'light',
      '-color:success': color === 'success',
      '-color:warning': color === 'warning',
      '-size:l': size === 'large',
      '-size:m': size === 'medium',
      '-size:s': size === 'small',
      '-size:xs': size === 'xSmall',
      'b-textTruncate': (isBoolean(truncate) && truncate) || truncate === 1,
      'b-textTruncateClamp': isNumber(truncate) && truncate >= 2,
      ...getCssSpaceHelper('marginBottom', marginBottom),
      ...getCssSpaceHelper('marginTop', marginTop),
    });
    const premadeColor =
      color === 'neutral' ||
      color === 'error' ||
      color === 'info' ||
      color === 'light' ||
      color === 'success' ||
      color === 'highlight' ||
      color === 'warning';
    const Tag = tag;

    return (
      <Tag
        className={classes}
        ref={forwardedRef}
        style={{
          ['--b-Text-color' as string]: !premadeColor ? color : null,
          ['--b-textTruncateClamp' as string]: isTextTruncateClamp
            ? truncate
            : null,
          ...style,
        }}
      >
        {children}
      </Tag>
    );
  },
);
