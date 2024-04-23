import { createContext, useContext } from 'react';
import { type ToastContextProps } from './';

export const ToastContext = createContext<ToastContextProps>({
  animation: 'fromRight',
  duration: 5000,
  swipeDirection: 'right',
  swipeThreshold: 50,
  variant: 'default',
});

export const ToastMainContext = createContext<{
  variant: ToastContextProps['variant'];
}>({ variant: 'default' });

export const useToastMain = () => useContext(ToastMainContext);

export const useToast = () => useContext(ToastContext);
