import { BaseProvider, Provider } from './';
import { MediaContextProvider } from '../Media';
import { type Meta, type StoryObj } from '@storybook/react';
import { TooltipProvider } from '../Tooltip';
import { useDarkMode } from 'storybook-dark-mode';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Provider> = {
  component: Provider,
  parameters: {
    componentSubtitle:
      "Wrap the consuming application to Provider to automatically apply the most common Providers needed. Note that this Provider doesn't include any context itself.",
    docs: {
      description: {
        component:
          "By default `<LazyMotion />`, `<ThemeProvider />`, `<MediaContextProvider />` and `<TooltipProvider />` are applied. If you don't need all of the common providers, use the `<BaseProvider />` instead. Note that in this story Provider is adding the `themeProvider` props to match with the unidirectional Storybook dark/light mode to not conflict with the Provider Storybook already includes.",
      },
    },
  },
  subcomponents: {
    BaseProvider,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Other/Provider',
};

export default meta;

type Story = StoryObj<typeof Provider>;

export const ProviderComponent: Story = {
  args: {
    children: 'Hello from the consuming application.',
  },
  name: 'Provider',
  render: function Component({ children, ...props }) {
    return (
      <Provider
        themeProvider={{
          initialTheme: useDarkMode() ? 'dark' : 'light',
          updateWithCookie: false,
        }}
        {...props}
      >
        {children}
      </Provider>
    );
  },
};

/* =======================================
 * BaseProvider
 * ======================================= */

export const BaseProviderComponent: Story = {
  name: 'BaseProvider',
  parameters: {
    docs: {
      description: {
        story:
          "BaseProvider applies the base needs for the consuming application. Currently it only wraps the application with `<LazyMotion />` to make sure that certain framer animation methods aren't used. Use BaseProvider if you want to apply/exclude other providers individually, for example if `<ThemeProvider />` is not needed. Note that BaseProvider doesn't include any context itself.",
      },
    },
  },
  render: () => (
    <BaseProvider>
      <MediaContextProvider>
        <TooltipProvider>
          Hello from the consuming application using BaseProvider with
          individually added child providers excluding ThemeProvider.
        </TooltipProvider>
      </MediaContextProvider>
    </BaseProvider>
  ),
};
