import { ClimateSmartTag } from './ClimateSmartTag';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof ClimateSmartTag> = {
  component: ClimateSmartTag,
  parameters: {
    componentSubtitle: 'Use to display Climate Smart tag with assessment year',
  },
  title: 'Components/Deprecated/ClimateSmartTag',
};

export default meta;

type Story = StoryObj<typeof ClimateSmartTag>;

export const ClimateSmartTagComponent: Story = {
  args: {},
  name: 'ClimateSmartTag',
  render: function Component({ ...props }) {
    return <ClimateSmartTag {...props} />;
  },
};
