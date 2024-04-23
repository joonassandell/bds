import { type BreadcrumbProps } from './';
import { getCssSpaceHelper } from '../../lib/utils';
import { Primitive } from '../../types';
import { ScrollArea } from '../ScrollArea';
import { Slot } from '@radix-ui/react-slot';
import c from 'clsx';
import React, { forwardRef, useEffect } from 'react';

export const Breadcrumb = forwardRef<HTMLDivElement, BreadcrumbProps>(
  (
    {
      ariaLabel,
      asChild,
      children,
      className,
      marginBottom,
      marginTop,
      mode = 'default',
    },
    forwardedRef,
  ) => {
    const classes = c(className, 'b-Breadcrumb', {
      ...getCssSpaceHelper('marginBottom', marginBottom),
      ...getCssSpaceHelper('marginTop', marginTop),
    });
    const scrollAreaRef = React.useRef<HTMLDivElement | null>(null);
    const BreadcrumbMain = mode === 'default' ? 'nav' : 'div';
    const Component = asChild ? Slot : Primitive.div;

    useEffect(() => {
      scrollAreaRef.current?.scrollBy(scrollAreaRef.current?.scrollWidth, 0);
    }, []);

    return (
      <Component className={classes} ref={forwardedRef}>
        <ScrollArea
          className="b-Breadcrumb-scrollArea"
          orientation="horizontal"
          ref={scrollAreaRef}
        >
          <BreadcrumbMain
            aria-label={mode === 'default' ? 'Breadcrumb' : ariaLabel}
            className="b-Breadcrumb-main"
          >
            {children}
          </BreadcrumbMain>
        </ScrollArea>
      </Component>
    );
  },
);
