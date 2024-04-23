import { Digit } from './Digit';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Digit> = {
  component: Digit,
  parameters: {
    componentSubtitle:
      'As the name implies, the Digit component is used to display digits',
  },
  title: 'Components/Data display/Digit',
};

export default meta;

type Story = StoryObj<typeof Digit>;

export const DigitComponent: Story = {
  args: {
    changeValue: {
      color: 'default',
    },
    number: 223.92, // '--.--', 11.202232, 0.0, '0.0', '00.00', null, undefined
    size: '2xLarge',
    // subtitle: {
    //   subtitle: 'Carbon footprint',
    // },
    // scale: 6,
    // truncate: 5,
  },
  name: 'Digit',
  render: ({ number, ...props }) => <Digit number={number} {...props} />,
};
