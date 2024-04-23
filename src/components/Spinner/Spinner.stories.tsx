import { Flex } from '../Flex';
import { type Meta, type StoryObj } from '@storybook/react';
import { Separator } from '../Separator';
import { Spinner } from './';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  parameters: {
    componentSubtitle:
      'Spinner provides a visual cue that an action is processing awaiting a course of change or a result.',
    docs: {
      description: {
        component:
          "Use Spinner only in small areas to indicate a loading process; if you're loading entire UI sections, pages or components use `<Skeleton />` instead.",
      },
    },
  },
  title: 'Components/Feedback/Spinner',
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const SpinnerComponent: Story = {
  name: 'Spinner',
  render: ({ ...props }) => <Spinner {...props} />,
};

/* =======================================
 * Variants
 * ======================================= */

export const SpinnerVariants: Story = {
  name: 'Variants',
  parameters: {
    docs: {
      description: {
        story: 'Various Spinner variants',
      },
    },
  },
  render: () => {
    const Variants = ({ ...props }) => (
      <Flex alignItems="center" flexWrap="wrap" gap="small">
        <Spinner size="large" {...props} />
        <Spinner size="medium" {...props} />
        <Spinner size="small" {...props} />
        <Spinner size="xSmall" {...props} />
      </Flex>
    );
    return (
      <>
        <Variants />
        <Separator marginBottom="base" marginTop="base" />
        <Variants variant="success" />
        <Separator marginBottom="base" marginTop="base" />
        <Variants variant="warning" />
        <Separator marginBottom="base" marginTop="base" />
        <Variants variant="error" />
      </>
    );
  },
};
