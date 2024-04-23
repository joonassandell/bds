import { Button } from '../Button';
import { type Meta, type StoryObj } from '@storybook/react';
import { ThemeProvider, useTheme } from './';
import { useDarkMode } from 'storybook-dark-mode';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof ThemeProvider> = {
  component: ThemeProvider,
  parameters: {
    componentSubtitle:
      'Control the dark/light theme of the consuming application.',
    docs: {
      description: {
        component: `<p>Wrap the consuming application with \`ThemeProvide§r\` if not using the default \`Provider\` and use \`useTheme\` hook to control the dark/light theme. Note that in this story ThemeProvider has props to match with the unidirectional Storybook dark/light mode to not conflict with the Provider Storybook already includes. **To prevent initial flashes of the opposite theme in server rendered apps add the following script to the \`\<head\>\`**.</p>
    (function () {
      const html = document.documentElement;
      if (document.cookie.includes('b_theme=dark')) {
        html.classList.add('b-theme:dark');
      } else if (document.cookie.includes('b_theme=light')) {
        html.classList.add('b-theme:light');
      } else {
        const matchMediaDark = window.matchMedia('(prefers-color-scheme: dark)');
        matchMediaDark.matches
          ? html.classList.add('b-theme:dark')
          : html.classList.add('b-theme:light');
      }
    })();
<p>Note that if you have theme based images, it's possible that changing the theme could create a flash of the opposite image in server renderes apps since updating happens in the front-end. So, it's recommended that you apply the picture source settings beforehand in the server or in some other way if possible.</p>`,
      },
    },
  },
  title: 'Components/Theme/ThemeProvider',
};

export default meta;

type Story = StoryObj<typeof ThemeProvider>;

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      icon={theme === 'light' ? 'night' : 'day'}
      onClick={() => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
      }}
    >
      {theme === 'light' ? 'Dark mode' : 'Light mode'}
    </Button>
  );
};

export const ThemeProviderComponent: Story = {
  args: {},
  name: 'ThemeProvider',
  render: function Component({ ...props }) {
    return (
      <ThemeProvider
        initialTheme={useDarkMode() ? 'dark' : 'light'}
        updateWithCookie={false}
        {...props}
      >
        <p>Hello from the consuming application using the ThemeProvider.</p>
        <ThemeToggle />
      </ThemeProvider>
    );
  },
};
