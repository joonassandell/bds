import { type Meta, type StoryObj } from '@storybook/react';
import { Progress } from './Progress';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Progress> = {
  component: Progress,
  parameters: {
    componentSubtitle:
      'Progress is used to display the progress status for a task that takes a long time or consists of several steps',
  },
  title: 'Components/Feedback/Progress',
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const ProgressComponent: Story = {
  args: {
    amount: 10,
    label: 'Raw materials',
    labelSuffix: '(Suffix)',
    percent: 30,
    progressColor: 'var(--b-accent-1-200)',
    subtitle: 'kg CO₂ / kg',
    subtitleCase: false,
  },
  name: 'Progress',
  render: ({ ...props }) => <Progress {...props} />,
};
