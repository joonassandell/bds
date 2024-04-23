import * as Mark from './';
import { Flex } from '../Flex';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Mark.MarkBiocode> = {
  component: Mark.MarkBiocode,
  parameters: {
    componentSubtitle:
      'Marks for branding purposes including Biocode logomark. Marks are icons but with higher meaning in branding.',
  },
  title: 'Components/Media & Icons/Mark',
};

export default meta;

type Story = StoryObj<typeof Mark.MarkBiocode>;

export const MarkComponent: Story = {
  args: {
    size: 'medium',
  },
  name: 'Mark',
  render: function Component({ ...props }) {
    return (
      <Flex flexWrap="wrap">
        <Mark.MarkBiocode {...props} />
        <Mark.MarkBiocodeIcon {...props} />
        <Mark.MarkProduct {...props} />
        <Mark.MarkProductMuted {...props} />
        <Mark.MarkProducer {...props} />
        <Mark.MarkProducerMuted {...props} />
        <Mark.MarkReport {...props} />
        <Mark.MarkReportMuted {...props} />
        <Mark.MarkReportSmall {...props} />
        <Mark.MarkReportSmallMuted {...props} />
      </Flex>
    );
  },
};
