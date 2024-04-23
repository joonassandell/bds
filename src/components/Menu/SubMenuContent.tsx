import { m } from 'framer-motion';
import { Portal, SubContent } from '@radix-ui/react-dropdown-menu';
import { ScrollArea } from '../ScrollArea';
import { type SubContentProps } from './';
import { TRANS_DEFAULT_M } from '../../lib/config';
import c from 'clsx';
import React, { forwardRef } from 'react';

export const SubMenuContent = forwardRef<HTMLDivElement, SubContentProps>(
  ({ className, children, width = 'medium', ...props }, forwardedRef) => {
    const classes = c('b-Menu-content b-Menu-content--sub', className, {
      '-width:fit': width === 'fit',
      '-width:l': width === 'large',
      '-width:trigger': width === 'trigger',
      '-width:xl': width === 'xLarge',
    });

    return (
      <Portal>
        <SubContent asChild className={classes} ref={forwardedRef} {...props}>
          <m.div
            animate={{
              opacity: 1,
              transition: TRANS_DEFAULT_M,
              y: 0,
            }}
            initial={{ opacity: 0, y: 'var(--b-space-xs)' }}
          >
            <ScrollArea>{children}</ScrollArea>
          </m.div>
        </SubContent>
      </Portal>
    );
  },
);
