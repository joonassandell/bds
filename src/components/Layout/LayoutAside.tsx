import { Aside } from '../Aside';
import { type LayoutAsideProps, useLayoutContext } from './';
import c from 'clsx';
import React, { forwardRef } from 'react';

export const LayoutAside = forwardRef<HTMLDivElement, LayoutAsideProps>(
  ({ children, className, ...props }, ref) => {
    const { asideOpen, setAsideOpen, asideTriggerRef } = useLayoutContext();
    const classes = c(className, 'b-Layout-aside');

    return (
      <div className={classes}>
        <Aside
          ref={ref}
          {...props}
          id="b-Layout-aside"
          layoutBreakpoint="l"
          mode="layout"
          onOpenChange={setAsideOpen}
          open={asideOpen}
          triggerRef={asideTriggerRef}
        >
          {children}
        </Aside>
      </div>
    );
  },
);
