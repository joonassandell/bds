import { AsideTrigger } from '../Aside';
import { Button } from '../Button';
import { type LayoutAsideTriggerProps, useLayoutContext } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const LayoutAsideTrigger: FC<LayoutAsideTriggerProps> = ({
  asChild,
  className,
  children,
  onClick,
}) => {
  const { asideOpen, setAsideOpen, asideTriggerRef } = useLayoutContext();
  const classes = c(className, 'b-Layout-asideTriggerButton');

  const asideTriggerProps = {
    asChild: true,
    asideId: 'b-Layout-aside',
    className: classes,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick && onClick(e);
      setAsideOpen(!asideOpen);
    },
    open: asideOpen,
    triggerRef: asideTriggerRef,
  };

  if (asChild) {
    return <AsideTrigger {...asideTriggerProps}>{children}</AsideTrigger>;
  }

  return (
    <AsideTrigger {...asideTriggerProps}>
      <Button icon="hamburger" iconActive={asideOpen} justify="block" />
    </AsideTrigger>
  );
};
