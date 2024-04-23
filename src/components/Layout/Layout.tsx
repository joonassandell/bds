import { LayoutContext } from './Layout.context';
import { type LayoutContextProps, type LayoutProps } from './';
import c from 'clsx';
import React, { type FC, useRef, useState } from 'react';

export const Layout: FC<LayoutProps> = ({ className, children }) => {
  const [state, setState] = useState<
    Pick<LayoutContextProps, 'asideOpen' | 'mainAsideOpen'>
  >({
    asideOpen: false,
    mainAsideOpen: false,
  });
  const classes = c(className, 'b-Layout');
  const asideTriggerRef = useRef<HTMLButtonElement>();
  const mainAsideTriggerRef = useRef<HTMLButtonElement>();

  const setAsideOpen = (value: boolean) => {
    setState(prevState => ({
      ...prevState,
      asideOpen: value,
    }));
  };

  const setMainAsideOpen = (value: boolean) => {
    setState(prevState => ({
      ...prevState,
      mainAsideOpen: value,
    }));
  };

  return (
    <LayoutContext.Provider
      value={{
        asideOpen: state.asideOpen,
        asideTriggerRef,
        mainAsideOpen: state.mainAsideOpen,
        mainAsideTriggerRef,
        setAsideOpen,
        setMainAsideOpen,
      }}
    >
      <div className={classes}>{children}</div>
    </LayoutContext.Provider>
  );
};
