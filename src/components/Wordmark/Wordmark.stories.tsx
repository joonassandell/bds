import { type Meta, type StoryObj } from '@storybook/react';
import { WordmarkBiocode } from './';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof WordmarkBiocode> = {
  component: WordmarkBiocode,
  parameters: {
    componentSubtitle:
      'The Biocode wordmark should be used in all references to Biocode where possible. Monochrome usage is preferred with the brand colors.',
  },
  title: 'Components/Media & Icons/Wordmark',
};

export default meta;

type Story = StoryObj<typeof WordmarkBiocode>;

export const WordmarkComponent: Story = {
  args: {},
  name: 'Wordmark',
  render: ({ ...props }) => <WordmarkBiocode {...props} />,
};
