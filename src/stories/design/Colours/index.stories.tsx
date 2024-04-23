import { Description, Stories, Subtitle, Title } from '@storybook/blocks';
import { Examples } from './Examples';
import { type Meta, type StoryObj } from '@storybook/react';
import { Palette } from './Palette';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta = {
  parameters: {
    componentSubtitle: 'Colour palette with tokens.',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'Use this as a reference to apply appropriate colors to components and see the component examples to test how certain variables work together.',
      },
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Stories />
        </>
      ),
    },
  },
  title: 'Design/Colours',
};

export default meta;

export const PaletteComponent: StoryObj = {
  name: 'Palette',
  render: () => <Palette />,
};

export const ExamplesComponent: StoryObj = {
  name: 'Example components',
  render: () => <Examples />,
};
