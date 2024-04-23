import { type AccordionTitleProps } from './';
import { Slot } from '@radix-ui/react-slot';
import c from 'clsx';
import React, { type ElementType, type FC } from 'react';

export const AccordionTitle: FC<AccordionTitleProps> = ({
  asChild,
  className,
  children,
  element,
  ...props
}) => {
  const classes = c(className, 'b-Accordion-heading', {
    'b-headingReset': !asChild,
  });
  const HeadingElement: ElementType = element ?? 'h3';

  if (asChild) {
    return (
      <Slot className={classes} {...props}>
        {children}
      </Slot>
    );
  }

  return <HeadingElement className={classes}>{children}</HeadingElement>;
};
