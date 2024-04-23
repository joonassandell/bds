import { create } from '@storybook/theming';
import theme from './theme.js';

/**
 * Note that variable comments refer to _theme-light.scss variables
 */
export default create({
  ...theme,
  colorPrimary: '#3959f9', // var(--b-primary)
  colorSecondary: '#3959f9', // var(--b-primary)

  // UI
  appBg: '#f4f6fa', // var(--b-surface-2)
  appContentBg: '#FFFFFF', // var(--b-surface-0)
  appBorderColor: '#e2e7f3', // var(--b-surface-0-border)

  // Text colors
  textColor: '#263b73', // var(--b-text)
  textInverseColor: '#e0e3eb', // var(--b-text-static-50)
  textMutedColor: '#606d90', // var(--b-text-50)

  // Toolbar default and active colors
  barTextColor: '#001242', // var(--b-text-200)
  barSelectedColor: '#3959f9', // var(--b-primary)
  barBg: '#FFFFFF', // var(--b-surface-0)

  // Form colors
  inputBg: '#FFFFFF', // var(--b-surface-0)
  inputBorder: '#e2e7f3', // var(--b-surface-0-border)
  inputTextColor: '#263b73', // var(--b-text)

  // Button colors
  buttonBg: '#FFFFFF', // var(--b-surface-3)
  buttonBorder: '#d4dbed', // var(--b-border-300)

  // Boolean (Switch)
  booleanBg: '#e2e7f3', // var(--b-bg-mute-400)
  booleanSelectedBg: '#FFFFFF', // var(--b-static-white)
});
