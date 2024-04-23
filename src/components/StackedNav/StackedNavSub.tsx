import { ButtonBlockToggle } from '../Button';
import { Content, Trigger } from '@radix-ui/react-collapsible';
import { getCssSpaceHelpers } from '../../lib/utils';
import { type StackedNavSubProps } from './';
import { useStackedNavItemContext } from './StackedNavItem';
import c from 'clsx';
import React, { type FC, useEffect } from 'react';

export const StackedNavSub: FC<StackedNavSubProps> = ({
  children,
  open = false,
  ...props
}) => {
  const { setOpen, setSubNav, open: openContext } = useStackedNavItemContext();
  const classes = c('b-StackedNav-sub', {
    ...getCssSpaceHelpers(props),
  });

  useEffect(() => {
    if (open) setOpen(true);
    if (!open) setOpen(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    setSubNav(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="b-StackedNav-button">
        <Trigger
          asChild
          className="b-StackedNav-button-inner"
          onClick={() => setOpen(!openContext)}
        >
          <ButtonBlockToggle iconActive={openContext} variant="plain" />
        </Trigger>
      </div>
      <Content asChild>
        <ul className={classes}>{children}</ul>
      </Content>
    </>
  );
};
