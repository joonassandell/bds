import { Box } from '../Box';
import { Flex } from '../Flex';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Flex> = {
  component: Flex,
  parameters: {
    componentSubtitle:
      'Flex is very abstract helper based component which allows to align content with responsive spacing and initializing.',
    docs: {
      description: {
        component:
          'Use Flex together with `<Box />` or use inner Flex component to control flex items. Flex renders a `div` element. This component is very flexible, so be responsible and consult designers with all the variations you are about to use.',
      },
    },
  },
  title: 'Components/Layout/Flex',
};

export default meta;

type Story = StoryObj<typeof Flex>;

const boxProps = {
  backgroundColor: 'var(--b-bg-500)',
  padding: 'base',
  style: {
    display: 'grid',
    minHeight: '5rem',
    minWidth: '5rem',
    placeItems: 'center',
    textAlign: 'center',
  },
} as any;

export const FlexComponent: Story = {
  args: {
    alignItems: 'end',
    children: (
      <>
        <Box {...boxProps} />
        <Flex flexGrow={1}>
          <Box {...boxProps} style={{ ...boxProps.style, height: '8rem' }} />
        </Flex>
        <Box alignSelf="center" {...boxProps} />
      </>
    ),
    flex: 1,
  },
  name: 'Flex',
  render: function Component({ children, ...props }) {
    return <Flex {...props}>{children}</Flex>;
  },
};
