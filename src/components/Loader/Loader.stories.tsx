import { Loader } from './Loader';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Loader> = {
  component: Loader,
  parameters: {
    componentSubtitle:
      'Use Loader to display loading indicator in large views when the data is loading',
    docs: {
      description: {
        component: `Do not use Loader with multiple individual components such as Input but rather with a larger set of components such as loading an entire route. Loader is not the best option for loading the entire application either since it needs to wait for the JS bundle to load before it'll be visible and basically makes the whole loader partially lose its meaning. There should be another inlined CSS alternative for the application loading (TBA).`,
      },
    },
  },
  title: 'Components/Feedback/Loader',
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const LoaderComponent: Story = {
  args: {
    name: 'product',
    variant: 'default',
  },
  name: 'Loader',
  render: ({ ...props }) => <Loader {...props} />,
};
