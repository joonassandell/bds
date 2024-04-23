import { createContext, useContext } from 'react';
import { type LayoutContextProps } from './';

export const LayoutContext = createContext<LayoutContextProps>({
  asideOpen: false,
  asideTriggerRef: undefined,
  mainAsideOpen: false,
  mainAsideTriggerRef: undefined,
  setAsideOpen: value => value,
  setMainAsideOpen: value => value,
});

export const useLayoutContext = () => useContext(LayoutContext);
