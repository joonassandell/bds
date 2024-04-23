import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { Donut, type DonutProps } from './';
import { type Optional } from '../../types';
import React, { type FC } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Donut> = {
  component: Donut,
  excludeStories: ['DonutStory'],
  parameters: {
    componentSubtitle:
      'Chart to display useful percentages and other values in a rounded shape',
  },
  title: 'Components/Data display/Donut',
};

export default meta;

type Story = StoryObj<typeof Donut>;

export const DonutComponent: Story = {
  args: {
    colors: false,
    data: [
      {
        color: 'var(--b-accent-1-200)',
        id: 'rawMaterials',
        label: 'Raw materials with long heading and with custom maxWidth',
        tooltip: {
          maxWidth: 264,
          values: [
            { label: 'Carbon footprint', unit: 'kg CO₂e / kg', value: 1.72 },
            { label: 'Emissions', unit: 'kg CO₂e', value: 20301 },
          ],
        },
        value: 20,
      },
      {
        id: 'sourcing',
        label: 'Sourcing',
        value: 20,
      },
      {
        id: 'production',
        label: 'Production',
        value: 30,
      },
      {
        id: 'packaging',
        label: 'Packaging',
        value: 10,
      },
      {
        id: 'delivery',
        label: 'Delivery has which way too long label so it has maxWidth',
        value: 20,
      },
      {
        id: 'others',
        label: 'Delivery has which way too long label so it has maxWidth',
        value: 20,
      },
    ],
    digitSubtitle: 'Carbon footprint',
    digitUnit: '%',
    number: 20,
  },
  name: 'Donut',
  render: ({ data, number, ...props }) => (
    <Donut data={data} number={number} {...props} />
  ),
};

export const DonutStory: FC<Optional<DonutProps, 'data'>> = composeStory(
  DonutComponent,
  meta,
);

/* =======================================
 * xLarge
 * ======================================= */

export const DonutComponentXlarge: Story = {
  args: {
    ...DonutComponent.args,
    data: [
      {
        color: 'var(--b-accent-1-200)',
        id: 'rawMaterials',
        label: 'Raw materials',
        tooltip: {
          values: [
            { label: 'Carbon footprint', unit: 'kg CO₂e / kg', value: 1.72 },
            { label: 'Emissions', unit: 'kg CO₂e', value: 20301 },
          ],
        },
        value: 20,
      },
      {
        color: 'var(--b-accent-4)',
        id: 'sourcing',
        label: 'Sourcing',
        value: 20,
      },
      {
        color: 'var(--b-accent-2-200)',
        id: 'production',
        label: 'Production',
        value: 30,
      },
      {
        color: 'var(--b-accent-3)',
        id: 'packaging',
        label: 'Packaging',
        value: 10,
      },
      {
        color: 'var(--b-accent-5-300)',
        id: 'delivery',
        label: 'Delivery',
        value: 20,
      },
      {
        color: 'var(--b-accent-4-200)',
        id: 'others',
        label: 'Others',
        value: 20,
      },
    ],
    digitUnit: undefined,
    number: 62.3,
    size: 'xLarge',
  },
  name: 'xLarge',
};
