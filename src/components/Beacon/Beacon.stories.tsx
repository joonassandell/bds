import { Beacon, type BeaconProps } from './';
import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { Flex } from '../Flex';
import React, { type FC } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Beacon> = {
  component: Beacon,
  excludeStories: ['BeaconVariantsStory'],
  parameters: {
    componentSubtitle:
      'A beacon to notify the user about something happening somewhere in the UI.',
  },
  title: 'Components/Feedback/Beacon',
};

export default meta;

type Story = StoryObj<typeof Beacon>;

export const BeaconComponent: Story = {
  args: {
    animateIn: true,
  },
  name: 'Beacon',
  render: ({ ...props }) => <Beacon {...props} />,
};

/* =======================================
 * Variants
 * ======================================= */

export const BeaconVariants: Story = {
  args: {},
  name: 'Variants',
  parameters: {
    docs: {
      description: {
        story: 'Beacon variants',
      },
    },
  },
  render: function Component({ ...props }) {
    return (
      <Flex>
        <Beacon {...props} variant="info" />
        <Beacon {...props} variant="success" />
        <Beacon {...props} variant="warning" />
        <Beacon {...props} variant="error" />
        <Beacon {...props} variant="highlight" />
        <Beacon {...props} variant="primaryForeground" />
      </Flex>
    );
  },
};

export const BeaconVariantsStory: FC<BeaconProps> = composeStory(
  BeaconVariants,
  meta,
);

/* =======================================
 * Loop animation
 * ======================================= */

export const BeaconLoopAnimation: Story = {
  ...BeaconVariants,
  args: {
    animate: {
      type: 'loop',
    },
  },
  name: 'Loop Animation',
  parameters: {
    docs: {
      description: {
        story:
          "Loop the beacon with `animate.type: 'loop'` to visualize something \
        being in \"progress” etc. Usable for example in Badges.",
      },
    },
  },
};
