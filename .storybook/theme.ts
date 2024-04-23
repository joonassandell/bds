import { create, themes } from '@storybook/theming';

/**
 * https://storybook.js.org/docs/react/configure/theming
 */
export default create({
  ...themes.light,
  brandImage: 'https://cdn.biocode.io/biocode/favicon.svg',
  brandUrl: 'https://biocode.io',
  brandTarget: '_blank',
  fontBase: 'Helvetica, system-ui, sans-serif',
  fontCode:
    'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  appBorderRadius: 3,
  inputBorderRadius: 3,
});
