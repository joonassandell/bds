import { type Meta, type StoryObj } from '@storybook/react';
import { Separator } from './Separator';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Separator> = {
  component: Separator,
  parameters: {
    componentSubtitle: 'Visually or semantically separates content.',
    docs: {
      description: {
        component:
          'This component uses `@radix-ui/react-separator` under the hood. View <a href="https://www.radix-ui.com/docs/primitives/components/separator" target="_blank">@radix-ui/react-separator documentation</a> for additional properties and information.',
      },
    },
  },
  title: 'Components/Layout/Separator',
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const SeparatorComponent: Story = {
  name: 'Separator',
  render: ({ ...props }) => <Separator {...props} />,
};
