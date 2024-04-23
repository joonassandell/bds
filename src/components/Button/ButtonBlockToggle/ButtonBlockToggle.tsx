import { Button } from '../Button';
import { type ButtonProps } from '../';
import React, { forwardRef, useEffect, useState } from 'react';

export const ButtonBlockToggle = forwardRef<
  HTMLButtonElement & HTMLAnchorElement,
  ButtonProps
>(
  (
    { icon = 'arrowDown', iconActive = false, onClick, ...props },
    forwardedRef,
  ) => {
    const [iconIsActive, setIconIsActive] = useState(iconActive);

    useEffect(() => {
      setIconIsActive(iconActive);
    }, [iconActive]);

    return (
      <Button
        justify="block"
        {...props}
        icon={icon}
        iconActive={iconIsActive}
        onClick={(e: any) => {
          onClick && onClick(e);
          setIconIsActive(!iconIsActive);
        }}
        ref={forwardedRef}
      />
    );
  },
);
