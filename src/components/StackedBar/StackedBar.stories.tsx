import { Box } from '../Box';
import { type Meta, type StoryObj } from '@storybook/react';
import { StackedBar } from './StackedBar';
import { Theme } from '../Theme';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof StackedBar> = {
  component: StackedBar,
  parameters: {
    componentSubtitle:
      'Chart to display useful values in a stacked horizontal bar.',
  },
  title: 'Components/Data display/StackedBar',
};

export default meta;

type Story = StoryObj<typeof StackedBar>;

export const StackedBarComponent: Story = {
  args: {
    colors: [
      {
        dummy11: 'aquamarine',
        dummy13: {
          color: 'var(--b-bg-700)',
          label: 'var(--b-text-200)',
        },
      },
    ],
    data: {
      dummy: 100,
      dummy1: 100,
      dummy10: 100,
      dummy11: 100,
      dummy12: 100,
      dummy13: 50,
      dummy2: 100,
      dummy3: 100,
      dummy4: 100,
      dummy5: 100,
      dummy6: 100,
      dummy7: 100,
      dummy8: 100,
      dummy9: 100,
      energy: 84,
      farm: 'x0812m03x1',
      fertilizers: 92,
      manure: 127,
    },
    keys: [
      'manure',
      'energy',
      'fertilizers',
      'dummy',
      'dummy1',
      'dummy2',
      'dummy3',
      'dummy4',
      'dummy5',
      'dummy6',
      'dummy7',
      'dummy8',
      'dummy9',
      'dummy10',
      'dummy11',
      'dummy12',
      'dummy13',
    ],
    labels: {
      dummy11: 'Custom color',
      dummy13: 'Custom color and label color',
      energy: 'Energies',
      fertilizers: 'Fertilizers',
      manure: 'Manure',
    },
    unit: 'kg',
  },
  name: 'StackedBar',
  render: ({ data, keys, ...props }) => (
    <Box marginBottom="xLarge" marginTop="large">
      <StackedBar data={data} keys={keys} {...props} />
    </Box>
  ),
};

/* =======================================
 * Negative color, margin & ticks
 * ======================================= */

export const StackedBarNegative: Story = {
  args: {
    colors: [
      {
        biogenic: {
          color: 'var(--b-accent-5)',
          label: 'var(--b-static-white)',
        },
        fossil: {
          color: 'var(--b-accent-5-600)',
          label: 'var(--b-static-white)',
        },
      },
    ],
    data: {
      biogenic: 3.22,
      fossil: 5.38,
    },
    descriptions: {
      biogenic: 'Biogenic carbon footprint means this and that...',
      fossil:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quos magni tempora nisi cumque! Delectus ut illo harum natus officiis consequatur placeat, velit obcaecati pariatur beatae autem deleniti, amet dolorem.',
    },
    keys: ['fossil', 'biogenic'],
    labelSkipWidth: 96,
    labels: {
      biogenic: 'Biogenic carbon footprint',
      fossil: 'Fossil carbon footprint',
    },
    margin: { left: 32 },
    ticks: 'zeroOnly',
    tooltip: 'primary',
    unit: 't CO₂e',
  },
  parameters: {
    docs: {
      description: {
        story: 'Negative color, margin, ticks, tooltip & description',
      },
    },
  },
  render: ({ data, keys, ...props }) => (
    <Theme asChild mode="dark">
      <Box
        backgroundColor="var(--b-surface-2)"
        borderRadius
        marginBottom="xLarge"
        marginTop="large"
        padding="large"
        paddingBottom="2xLarge"
        paddingTop="xLarge"
      >
        <StackedBar data={data} keys={keys} {...props} />
      </Box>
    </Theme>
  ),
};

/* =======================================
 * Negative value
 * ======================================= */

export const StackedBarNegativeValue: Story = {
  ...StackedBarComponent,
  args: {
    colors: [
      {
        biogenic: {
          color: 'var(--b-accent-3-300)',
          label: 'var(--b-accent-3-900)',
        },
        fossil: {
          color: 'var(--b-bg-600)',
          label: 'var(--b-text-200)',
        },
      },
    ],
    data: {
      biogenic: -0.87,
      fossil: -0.91,
    },
    keys: ['fossil', 'biogenic'],
    margin: { right: 32 },
    ticks: 'zeroOnly',
    tooltip: 'primary',
    unit: 't CO₂e',
  },
  name: 'Negative Value',
};

/* =======================================
 * Mixed
 * ======================================= */

export const StackedBarNegativeValues: Story = {
  ...StackedBarComponent,
  args: {
    colors: [
      {
        biogenic: {
          color: 'var(--b-accent-3-300)',
          label: 'var(--b-accent-3-900)',
        },
        fossil: {
          color: 'var(--b-bg-600)',
          label: 'var(--b-text-200)',
        },
        other: {
          color: 'var(--b-bg-mute-400)',
          label: 'var(--b-text-200)',
        },
      },
    ],
    data: {
      biogenic: -0.87,
      fossil: 0.91,
      other: -1,
      x: 2,
      y: -2,
    },
    keys: ['fossil', 'other', 'biogenic', 'y', 'x'],
    ticks: 'zeroOnly',
    tooltip: 'primary',
    unit: 't CO₂e',
  },
  name: 'Mixed',
};

/* =======================================
 * Single value
 * ======================================= */

export const StackedBarSingleValue: Story = {
  ...StackedBarComponent,
  args: {
    colors: [
      {
        biogenic: {
          color: 'var(--b-accent-3-300)',
          label: 'var(--b-accent-3-900)',
        },
        fossil: {
          color: 'var(--b-bg-600)',
          label: 'var(--b-text-200)',
        },
      },
    ],
    data: {
      biogenic: 0,
      fossil: 0.91,
    },
    keys: ['biogenic', 'fossil'],
    margin: { left: 32 },
    ticks: 'zeroOnly',
    tooltip: 'primary',
    unit: 't CO₂e',
  },
  name: 'Single Value',
};
