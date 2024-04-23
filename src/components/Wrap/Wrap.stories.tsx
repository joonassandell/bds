import { type Meta, type StoryObj } from '@storybook/react';
import { Wrap } from './Wrap';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Wrap> = {
  component: Wrap,
  parameters: {
    componentSubtitle:
      'Wrap is a layout component to wrap the entire consuming application contents to a pre-defined maximum width.',
    docs: {
      description: {
        component:
          "Wrap is useful to keep our varying services, such as Reports and Website, to a share maximum width. Wrap is only essential if the application's or layout components' layout is designed to have a maximum width. So for example, Wrap doesn't work properly with `Layout` or `AuthLayout` but for `SiteHeader` and `SiteFooter` it suits well.",
      },
    },
  },
  title: 'Components/Layout/Wrap',
};

export default meta;

type Story = StoryObj<typeof Wrap>;

export const WrapComponent: Story = {
  args: {
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
        perferendis assumenda aspernatur voluptates a placeat, modi dolore neque
        veritatis, nemo voluptatibus eaque obcaecati! Voluptatibus magni
        laudantium aut quae quas tempore.
      </p>
    ),
  },
  name: 'Wrap',
  render: ({ children, ...props }) => <Wrap {...props}>{children}</Wrap>,
};
