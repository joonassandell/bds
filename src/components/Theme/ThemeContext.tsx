import { createContext, useContext } from 'react';
import { type ThemeContextProps } from './';

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context) return context;
  throw new Error('useTheme must be used within ThemeProvider');
};
