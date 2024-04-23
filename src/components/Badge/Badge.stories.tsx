import { Badge, type BadgeProps } from './';
import { Beacon } from '../Beacon';
import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { Flex } from '../Flex';
import { Text } from '../Text';
import React, { type FC } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Badge> = {
  component: Badge,
  excludeStories: ['BadgeVariantsStory'],
  parameters: {
    componentSubtitle:
      "Badges are used to highlight an item's status for quick recognition.",
  },
  title: 'Components/Feedback/Badge',
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const BadgeComponent: Story = {
  args: {
    children: 'Badge',
  },
  name: 'Badge',
  render: function Component({ children, ...props }) {
    return <Badge {...props}>{children}</Badge>;
  },
};

/* =======================================
 * Variants
 * ======================================= */

export const BadgeVariants: Story = {
  args: { ...BadgeComponent.args },
  name: 'Variants',
  parameters: {
    docs: {
      description: {
        story: 'Badge variants',
      },
    },
  },
  render: function Component({ children, ...props }) {
    return (
      <Flex alignItems="center" gap="xSmall">
        <Badge {...props}>{children}</Badge>
        <Badge {...props} variant="info">
          {children}
        </Badge>
        <Badge {...props} variant="success">
          {children}
        </Badge>
        <Badge {...props} variant="warning">
          {children}
        </Badge>
        <Badge {...props} variant="error">
          {children}
        </Badge>
        <Badge {...props} variant="highlight">
          {children}
        </Badge>
        <Badge {...props} variant="primary">
          {children}
        </Badge>
      </Flex>
    );
  },
};

export const BadgeVariantsStory: FC<BadgeProps> = composeStory(
  BadgeVariants,
  meta,
);

/* =======================================
 * With Beacon
 * ======================================= */

export const BadgeWithBeacon: Story = {
  args: { ...BadgeComponent.args },
  name: 'With Beacon',
  parameters: {
    docs: {
      description: {
        story:
          'Apply Beacon to indicate "progress" of something. Variants and animation for the Beacon are automatically applied based on the Badge variant but they can be overridden.',
      },
    },
  },
  render: function Component({ children, ...props }) {
    return (
      <Flex alignItems="center" gap="xSmall">
        <Badge {...props}>
          {children}
          <Beacon />
        </Badge>
        <Badge {...props} variant="info">
          {children}
          <Beacon />
        </Badge>
        <Badge {...props} variant="success">
          {children}
          <Beacon />
        </Badge>
        <Badge {...props} variant="warning">
          {children}
          <Beacon />
        </Badge>
        <Badge {...props} variant="error">
          {children}
          <Beacon />
        </Badge>
        <Badge {...props} variant="highlight">
          {children}
          <Beacon />
        </Badge>
        <Badge {...props} variant="primary">
          {children}
          <Beacon />
        </Badge>
      </Flex>
    );
  },
};

/* =======================================
 * Truncate
 * ======================================= */

export const BadgeTruncate: Story = {
  args: {
    children:
      'Truncated Badge text. Excepteur est est id nisi fugiat ex laboris. Occaecat veniam non duis officia nisi mollit dolore. Adipisicing eu ad aliquip minim in. Cupidatat veniam fugiat et. Consequat incididunt eu laboris quis quis laboris aliquip sunt dolor ea magna laboris. Sunt anim consectetur et consectetur esse officia veniam pariatur laborum aute eiusmod enim Lorem culpa tempor. Elit elit ullamco sint duis. Mollit dolore anim do reprehenderit.',
  },
  name: 'Truncate',
  parameters: {
    docs: {
      description: {
        story:
          'To truncate the Badge text, wrap the text with `<Text truncate />`.',
      },
    },
  },
  render: function Component({ children, ...props }) {
    return (
      <Badge {...props}>
        <Text truncate>{children}</Text>
        <Beacon />
      </Badge>
    );
  },
};
