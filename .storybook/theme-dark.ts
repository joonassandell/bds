import { create } from '@storybook/theming';
import theme from './theme.js';

/**
 * Note that variable comments refer to _theme-dark.scss variables
 */
export default create({
  ...theme,
  base: 'dark',
  colorPrimary: '#3959f9', // var(--b-primary)
  colorSecondary: '#3959f9', // var(--b-primary)

  // UI
  appBg: '#000b29', // var(--b-bg-100)
  appContentBg: '#000e33', // var(--b-surface-0)
  appBorderColor: '#121c49', // var(--b-surface-0-border)

  // Text colors
  textColor: '#e0e3eb', // var(--b-text-200)
  textInverseColor: '#001242', // var(--b-text-static-500)
  textMutedColor: '#949db8', // var(--b-text-50)

  // Toolbar default and active colors
  barTextColor: '#e0e3eb', // var(--b-text-200)
  barSelectedColor: '#3959f9', // var(--b-primary)
  barBg: '#031243', // var(--b-surface-1)

  // Form colors
  inputBg: '#000e33', // var(--b-surface-0)
  inputBorder: '#121c49', // var(--b-surface-0-border)
  inputTextColor: '#b3b9cc', // var(--b-text)

  // Button colors
  buttonBg: '#0b164c', // var(--b-surface-3)
  buttonBorder: '#182562', // var(--b-border-3-border)

  // Boolean (Switch)
  booleanBg: '#0b164c', // var(--b-surface-3)
  booleanSelectedBg: '#000e33', // var(--b-surface-0)
});
