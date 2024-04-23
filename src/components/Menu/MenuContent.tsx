import { Content } from '@radix-ui/react-dropdown-menu';
import { m } from 'framer-motion';
import { type MenuContentProps } from './';
import { ScrollArea } from '../ScrollArea';
import { TRANS_DEFAULT, TRANS_DEFAULT_M } from '../../lib/config';
import c from 'clsx';
import React, { forwardRef, useEffect } from 'react';

export const MenuContent = forwardRef<HTMLDivElement, MenuContentProps>(
  (
    {
      align = 'start',
      children,
      collisionPadding = 16,
      className,
      width = 'medium',
      ...props
    },
    forwardedRef,
  ) => {
    const classes = c('b-Menu-content', className, {
      '-width:fit': width === 'fit',
      '-width:l': width === 'large',
      '-width:trigger': width === 'trigger',
      '-width:xl': width === 'xLarge',
    });

    // See CHANGELOG 0.3.35 issue
    useEffect(
      () => () => {
        document.body.style.pointerEvents = '';
      },
      [],
    );

    return (
      <Content
        align={align}
        asChild
        className={classes}
        collisionPadding={collisionPadding}
        forceMount
        ref={forwardedRef}
        tabIndex={undefined} // Related to viewport jumping bug
        {...props}
      >
        <m.div
          animate={{
            opacity: 1,
            transition: TRANS_DEFAULT_M,
            y: 'var(--b-space-xs)',
          }}
          exit={{
            opacity: 0,
            transition: TRANS_DEFAULT,
            y: 'var(--b-space-m)',
          }}
          initial={{ opacity: 0, y: 'var(--b-space-m)' }}
        >
          <ScrollArea>{children}</ScrollArea>
        </m.div>
      </Content>
    );
  },
);
