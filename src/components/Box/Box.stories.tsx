import { Box, Boxes } from './';
import { Grid, GridCol } from '../Grid';
import { type Meta, type StoryObj } from '@storybook/react';
import { Text } from '../Text';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Box> = {
  component: Box,
  parameters: {
    componentSubtitle:
      "Box is a multifunctional helper component which allows to build areas with responsive spacing, colors, borders etc. with any content. By default Box doesn't contain any styling.",
    docs: {
      description: {
        component:
          'This component is very flexible, so be responsible and consult designers with all the variations you are about to use. Box renders a `div` element.',
      },
    },
  },
  title: 'Components/Layout/Box',
};

export default meta;

type Story = StoryObj<typeof Box>;

export const BoxComponent: Story = {
  args: {
    border: true,
    borderRadius: true,
    children: `Hello, I'm simple Box with responsive padding, margin, border and radius. 👋`,
    marginBottom: 'medium',
    padding: {
      base: 'base',
      m: 'medium',
    },
  },
  name: 'Box',
  render: function Component({ children, ...props }) {
    return <Box {...props}>{children}</Box>;
  },
};

/* =======================================
 * Boxes
 * ======================================= */

export const BoxesComponent: Story = {
  name: 'Boxes',
  parameters: {
    docs: {
      description: {
        story:
          'Align boxes automatically with equal responsive columns using `minBoxWidth`. This uses CSS grid `auto-fit` and `minmax()` internally.',
      },
    },
  },
  render: () => (
    <Boxes
      borderColor="var(--b-border-400)"
      borderOuterColor="var(--b-border-400)"
      minBoxWidth={320}
    >
      <Box backgroundColor="var(--b-bg-500)" padding="medium">
        <Text>
          <p>Box</p>
        </Text>
      </Box>
      <Box backgroundColor="var(--b-bg-400)" padding="medium">
        <Text>
          <p>Box</p>
        </Text>
      </Box>
      <Box backgroundColor="var(--b-bg-300)" padding="medium">
        <Text>
          <p>Box</p>
        </Text>
      </Box>
      <Box backgroundColor="var(--b-bg-400)" padding="medium">
        <Text>
          <p>Box</p>
        </Text>
      </Box>
      <Box backgroundColor="var(--b-bg-300)" padding="medium">
        <Text>
          <p>Box</p>
        </Text>
      </Box>
      <Box backgroundColor="var(--b-bg-200)" padding="medium">
        <Text>
          <p>Box</p>
        </Text>
      </Box>
      <Box backgroundColor="var(--b-bg-300)" padding="medium">
        <Text>
          <p>Box</p>
        </Text>
      </Box>
      <Box backgroundColor="var(--b-bg-200)" padding="medium">
        <Text>
          <p>Box</p>
        </Text>
      </Box>
      <Box backgroundColor="var(--b-bg-100)" padding="medium">
        <Text>
          <p>Box</p>
        </Text>
      </Box>
    </Boxes>
  ),
};

/* =======================================
 * With Grid
 * ======================================= */

export const BoxesWithGrid: Story = {
  name: 'Boxes with Grid',
  parameters: {
    docs: {
      description: {
        story:
          'For more flexible and responsive boxes aligment you can use `<Boxes asChild />` with `<Grid />` and `<GridCol />` to control individual Boxes.',
      },
    },
  },
  render: () => (
    <Boxes asChild border="small" borderColor="var(--b-border-mute-100)">
      <Grid>
        <GridCol>
          <Box padding={{ base: 'base', m: 'medium' }}>Box: 12/12 span</Box>
        </GridCol>
        <GridCol colSpan={{ m: 6 }}>
          <Box padding={{ base: 'base', m: 'medium' }}>
            Box: 6/12 span @ medium breakpoint
          </Box>
        </GridCol>
        <GridCol colSpan={{ m: 6 }}>
          <Box padding={{ base: 'base', m: 'medium' }}>
            Box: 6/12 span @ medium breakpoint
          </Box>
        </GridCol>
        <GridCol colSpan={{ m: 6 }}>
          <Box padding={{ base: 'base', m: 'medium' }}>
            Box: 6/12 span @ medium breakpoint
          </Box>
        </GridCol>
        <GridCol colSpan={{ m: 6 }}>
          <Box padding={{ base: 'base', m: 'medium' }}>
            Box: 6/12 span @ medium breakpoint
          </Box>
        </GridCol>
        <GridCol>
          <Box
            backgroundColor="var(--b-bg-mute-100)"
            padding={{ base: 'base', m: 'medium' }}
          >
            Box: 12/12 span
          </Box>
        </GridCol>
      </Grid>
    </Boxes>
  ),
};
