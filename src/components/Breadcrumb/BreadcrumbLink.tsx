import { type BreadcrumbLinkProps } from './';
import { Primitive } from '../../types';
import { Slot } from '@radix-ui/react-slot';
import c from 'clsx';
import React, {
  forwardRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from 'react';

export const BreadcrumbLink = forwardRef<any, BreadcrumbLinkProps>(
  ({ children, asChild, className, ...props }, forwardedRef) => {
    const classes = c('b-Breadcrumb-link', className);
    const Link = asChild
      ? Slot
      : (Primitive.a as ForwardRefExoticComponent<
          RefAttributes<HTMLLinkElement>
        >);

    return (
      <Link className={classes} {...props} ref={forwardedRef}>
        {children}
      </Link>
    );
  },
);
