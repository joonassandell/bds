import { AsideTrigger } from '../Aside';
import { Button } from '../Button';
import { type LayoutMainAsideTriggerProps, useLayoutContext } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const LayoutMainAsideTrigger: FC<LayoutMainAsideTriggerProps> = ({
  asChild,
  className,
  children,
  onClick,
}) => {
  const { mainAsideOpen, setMainAsideOpen, mainAsideTriggerRef } =
    useLayoutContext();
  const classes = c(className, 'b-Layout-mainAsideTriggerButton');

  const asideTriggerProps = {
    asChild: true,
    asideId: 'b-Layout-main-aside',
    className: classes,
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      onClick && onClick(e);
      setMainAsideOpen(!mainAsideOpen);
    },
    open: mainAsideOpen,
    triggerRef: mainAsideTriggerRef,
  };

  if (asChild) {
    return <AsideTrigger {...asideTriggerProps}>{children}</AsideTrigger>;
  }

  return (
    <AsideTrigger {...asideTriggerProps}>
      <Button
        className={classes}
        icon="hamburger"
        iconActive={mainAsideOpen}
        justify="block"
      />
    </AsideTrigger>
  );
};
