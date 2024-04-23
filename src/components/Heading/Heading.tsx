import { getCssSpaceHelpers } from '../../lib/utils';
import { type HeadingProps, type HeadingSize } from './';
import { HELPER } from '../../lib/config';
import { omit } from 'ramda';
import { Slot } from '@radix-ui/react-slot';
import c from 'clsx';
import isNil from 'ramda/es/isNil';
import React, { type ElementType, forwardRef } from 'react';

export const Heading = forwardRef<HTMLDivElement, HeadingProps>(
  (
    {
      asChild,
      balance,
      children,
      className,
      color,
      size = 'h2',
      tag,
      title,
      truncate,
      ...props
    },
    forwardedRef,
  ) => {
    const classes = c(className, 'b-Heading', {});
    const headingClasses = c('b-Heading-heading', {
      [`b-${size}`]: !isNil(tag), // Uses helpers
      'b-textBalance': balance,
      'b-textTruncateClamp': truncate,
      ...getCssSpaceHelpers(props),
    });

    const Tag: ElementType = !isNil(tag) ? tag : (size as HeadingSize);
    const Root = asChild ? Slot : 'div';
    const restProps = omit(HELPER, props);

    return (
      <Root className={classes} ref={forwardedRef} {...restProps}>
        <Tag
          className={headingClasses}
          style={{
            ['--b-Heading-color' as string]: color,
            ['--b-textTruncateClamp' as string]: truncate,
          }}
          title={title}
        >
          {children}
        </Tag>
      </Root>
    );
  },
);
