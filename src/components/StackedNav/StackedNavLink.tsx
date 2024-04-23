import { Primitive } from '../../types';
import { Slot } from '@radix-ui/react-slot';
import { type StackedNavLinkProps } from './';
import { useStackedNavItemContext } from './StackedNavItem';
import c from 'clsx';
import React, {
  forwardRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
  useEffect,
} from 'react';

export const StackedNavLink = forwardRef<HTMLLinkElement, StackedNavLinkProps>(
  (
    {
      active,
      asChild,
      children,
      className,
      initialSubNavOpen = true,
      ...props
    },
    forwardedRef,
  ) => {
    const classes = c(className, 'b-StackedNav-link');
    const { setOpen, open, subNav, setActive } = useStackedNavItemContext();
    const NavLink = asChild
      ? Slot
      : (Primitive.a as ForwardRefExoticComponent<
          RefAttributes<HTMLLinkElement>
        >);

    useEffect(() => {
      if (active) setActive(true);
      if (active === false) setActive(false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active]);

    return (
      <NavLink
        className={classes}
        {...props}
        onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          props.onClick && props.onClick(e);
          subNav && initialSubNavOpen && !open && setOpen(true);
        }}
        ref={forwardedRef}
      >
        {children}
      </NavLink>
    );
  },
);
