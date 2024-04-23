import { Aside } from '../Aside';
import { type LayoutMainAsideProps, useLayoutContext } from './';
import c from 'clsx';
import React, { forwardRef } from 'react';

export const LayoutMainAside = forwardRef<HTMLDivElement, LayoutMainAsideProps>(
  ({ children, className, ...props }, forwardedRef) => {
    const { mainAsideOpen, setMainAsideOpen, asideTriggerRef } =
      useLayoutContext();
    const classes = c(className, 'b-Layout-main-aside');

    return (
      <Aside
        closeAlign="inside"
        {...props}
        align="right"
        className={classes}
        id="b-Layout-aside"
        layoutBreakpoint="xxl"
        layoutPosition="fixed"
        mode="layout"
        onOpenChange={setMainAsideOpen}
        open={mainAsideOpen}
        ref={forwardedRef}
        triggerRef={asideTriggerRef}
      >
        {children}
      </Aside>
    );
  },
);
