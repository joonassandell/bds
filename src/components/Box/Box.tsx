import { type BoxProps } from './';
import { getCssSpaceHelpers, isBoolean, isNumber } from '../../lib/utils';
import { HELPER } from '../../lib/config';
import { type HelperSpaceStaticSmall, Primitive } from '../../types';
import { Slot } from '@radix-ui/react-slot';
import c from 'clsx';
import omit from 'ramda/es/omit';
import React, { forwardRef } from 'react';

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      alignSelf,
      asChild,
      backgroundColor,
      border,
      borderColor,
      borderRadius,
      children,
      className,
      color,
      flexBasis,
      flexGrow,
      flexShrink,
      height,
      justifySelf,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      overflow,
      shadow,
      size,
      style,
      width,
      ...props
    },
    forwardedRef,
  ) => {
    const classes = c(className, 'b-Box', {
      '-border': border || borderColor,
      '-border:radius': isBoolean(borderRadius) || borderRadius === 'large',
      '-border:radius:full': borderRadius === 'full',
      '-border:radius:pill': borderRadius === 'pill',
      '-border:size:s': border === 'small',
      '-shadow': shadow,
      ...getCssSpaceHelpers(props),
    });
    const Component = asChild ? Slot : Primitive.div;
    const restProps = omit(HELPER, props);
    const smallStaticPadding = isNumber(props.padding)
      ? (props.padding as HelperSpaceStaticSmall)
      : false;
    const smallStaticMargin = isNumber(props.margin)
      ? (props.margin as HelperSpaceStaticSmall)
      : false;

    return (
      <Component
        className={classes}
        ref={forwardedRef}
        style={{
          alignSelf,
          flexBasis,
          flexGrow,
          flexShrink,
          height,
          justifySelf,
          maxHeight,
          maxWidth,
          minHeight,
          minWidth,
          overflow,
          ...(size && {
            height: size,
            width: size,
          }),
          ...(!size && {
            height,
          }),
          ...(!size && {
            width,
          }),
          ['--b-Box-color' as string]: color,
          ['--b-Box-border-color' as string]: borderColor,
          ['--b-Box-background-color' as string]: backgroundColor,
          ...(smallStaticPadding && {
            padding: smallStaticPadding,
          }),
          ...(smallStaticMargin && {
            margin: smallStaticMargin,
          }),
          ...style,
        }}
        {...restProps}
      >
        {children}
      </Component>
    );
  },
);
