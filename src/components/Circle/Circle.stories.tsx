import { Circle } from './';
import { Illustration } from '../Illustration';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Circle> = {
  component: Circle,
  parameters: {
    componentSubtitle:
      'Circle is a layout component that renders its child within itself in a rounded shape',
    docs: {
      description: {
        component:
          'By default Circle adds a border. Under the hood Cirle extends the Box component.',
      },
    },
  },
  title: 'Components/Layout/Circle',
};

export default meta;

type Story = StoryObj<typeof Circle>;

export const CircleComponent: Story = {
  args: {
    children: <Illustration name="landUse" width="100%" />,
    // children: <img src="/avatar-image.jpg" />,
    // children: <Icon name="arrowDown" />,
    padding: 2,
    size: 'var(--b-Donut-size)',
  },
  name: 'Circle',
  render: function Component({ children, ...props }) {
    return <Circle {...props}>{children}</Circle>;
  },
};
