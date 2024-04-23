// @ts-nocheck
import themeLight from './theme-light';
import themeDark from './theme-dark';
import { useDarkMode } from 'storybook-dark-mode';
import { Provider } from '../src';
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
} from '@storybook/blocks';
import type { Preview } from '@storybook/react';

/* =======================================
 * Storybook config
 * =======================================
 *
 * https://storybook.js.org/docs/react/configure/overview#configure-story-rendering
 * https://storybook.js.org/docs/react/writing-stories/parameters#global-parameters
 * https://storybook.js.org/docs/react/essentials/toolbars-and-globals#global-types-and-the-toolbar-annotation
 * https://storybook.js.org/addons/storybook-dark-mode
 */

/* ======
 * Global SCSS
 * ====== */

import './docs.scss';
import '../src/index.scss';
import '../src/stylesheets/_components.scss';

/* ======
 * Decorators
 * ======
 *
 * https://storybook.js.org/docs/react/writing-stories/decorators/#global-decorators
 */

/**
 * Add provider to each story
 */
function StoryWrapper(props) {
  return (
    <Provider
      themeProvider={{
        initialTheme: useDarkMode() ? 'dark' : 'light',
        updateWithCookie: false,
      }}
    >
      {props.children}
    </Provider>
  );
}

const decorators: Preview['decorators'] = [
  renderStory => <StoryWrapper>{renderStory()}</StoryWrapper>,
];

/* ======
 * Parameters
 * ====== */

const parameters: Preview['parameters'] = {
  backgrounds: {
    values: [
      {
        name: '900 (--b-bg-static-900)',
        value: 'hsl(224 100% 6%)',
      },
      {
        name: '800 (--b-bg-static-800)',
        value: 'hsl(224 100% 8%)',
      },
      {
        name: '700 (--b-bg-static-700)',
        value: 'hsl(224 100% 10%)',
      },
      {
        name: '600 (--b-bg-static-600)',
        value: 'hsl(224 100% 13%)',
      },
      {
        name: '500 (--b-bg-static-500)',
        value: 'hsl(224 100% 19%)',
      },
      {
        name: '400 (--b-bg-static-400)',
        value: 'hsl(224 100% 93%)',
      },
      {
        name: '300 (--b-bg-static-300)',
        value: 'hsl(224 100% 97%)',
      },
      {
        name: '200 (--b-bg-static-200)',
        value: 'hsl(224 100% 98%)',
      },
      {
        name: '100 (--b-bg-static-100)',
        value: 'hsl(224 100% 99%)',
      },
      {
        name: '50 (--b-bg-static-50)',
        value: 'hsl(224 100% 100%)',
      },
    ],
  },
  darkMode: {
    classTarget: 'html',
    current: 'light',
    dark: { ...themeDark },
    darkClass: 'b-theme:dark',
    light: { ...themeLight },
    lightClass: 'b-theme:light',
    stylePreview: true,
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: [
        'Components',
        ['*', 'Other', 'Deprecated'],
        'Design',
        'Hooks',
        'Examples',
      ],
    },
  },
  docs: {
    page: () => (
      <>
        <Title />
        <Subtitle />
        <Description />
        <Primary />
        <ArgsTable />
        <Stories />
      </>
    ),
  },
};

export default {
  decorators,
  parameters,
} as Preview;
