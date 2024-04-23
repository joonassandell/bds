import { Root } from '@radix-ui/react-collapsible';
import { type StackedNavItemContextProps, type StackedNavItemProps } from './';
import c from 'clsx';
import React, { createContext, type FC, useContext, useState } from 'react';

export const StackedNavItemContext = createContext<StackedNavItemContextProps>({
  active: false,
  open: false,
  setActive: value => value,
  setOpen: value => value,
  setSubNav: value => value,
  subNav: false,
});

export const useStackedNavItemContext = () => useContext(StackedNavItemContext);

export const StackedNavItem: FC<StackedNavItemProps> = ({
  className,
  children,
}) => {
  const [state, setState] = useState<
    Pick<StackedNavItemContextProps, 'open' | 'active' | 'subNav'>
  >({
    active: false,
    open: false,
    subNav: false,
  });
  const classes = c(className, 'b-StackedNav-item', {
    'is-active': state.active,
  });

  const setOpen = (value: boolean) => {
    setState(prevState => ({
      ...prevState,
      open: value,
    }));
  };

  const setActive = (value: boolean) => {
    setState(prevState => ({
      ...prevState,
      active: value,
    }));
  };

  const setSubNav = (value: boolean) => {
    setState(prevState => ({
      ...prevState,
      subNav: value,
    }));
  };

  return (
    <StackedNavItemContext.Provider
      value={{
        active: state.active,
        open: state.open,
        setActive,
        setOpen,
        setSubNav,
        subNav: state.subNav,
      }}
    >
      <Root asChild open={state.open}>
        <li className={classes}>{children}</li>
      </Root>
    </StackedNavItemContext.Provider>
  );
};
