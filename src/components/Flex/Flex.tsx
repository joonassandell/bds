import { type FlexProps } from './';
import { getCssSpaceHelpers, getFlexHelperClass } from '../../lib/utils';
import { HELPER } from '../../lib/config';
import { Primitive } from '../../types';
import { Slot } from '@radix-ui/react-slot';
import c from 'clsx';
import omit from 'ramda/es/omit';
import React, { forwardRef } from 'react';

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      alignItems,
      alignSelf,
      asChild,
      children,
      className,
      flexBasis,
      flexDirection,
      flexGrow,
      flexShrink,
      flexWrap,
      flex,
      gap = 'base',
      height,
      init,
      justifyContent,
      justifyItems,
      justifySelf,
      maxHeight,
      maxWidth,
      minHeight,
      minWidth,
      style,
      width,
      ...props
    },
    forwardedRef,
  ) => {
    const classes = c(className, 'b-Flex', {
      '-gap:0': gap === 0,
      '-gap:2xs': gap === '2xSmall',
      '-gap:l': gap === 'large',
      '-gap:s': gap === 'small',
      '-gap:xs': gap === 'xSmall',
      ...getFlexHelperClass(init),
      ...getCssSpaceHelpers(props),
    });
    const Component = asChild ? Slot : Primitive.div;
    const restProps = omit(HELPER, props);

    return (
      <Component
        className={classes}
        ref={forwardedRef}
        style={{
          alignItems,
          alignSelf,
          flex,
          flexBasis,
          flexDirection,
          flexGrow,
          flexShrink,
          flexWrap,
          height,
          justifyContent,
          justifyItems,
          justifySelf,
          maxHeight,
          maxWidth,
          minHeight,
          minWidth,
          width,
          ...style,
        }}
        {...restProps}
      >
        {children}
      </Component>
    );
  },
);
