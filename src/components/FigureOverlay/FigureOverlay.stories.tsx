import { FigureOverlay } from './';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof FigureOverlay> = {
  component: FigureOverlay,
  parameters: {
    componentSubtitle:
      'An overlay for images and other media to reduce contrast.',
    docs: {
      description: {
        component: 'Currently FigureOverlay is only visible in dark theme.',
      },
    },
  },
  title: 'Components/Media & Icons/FigureOverlay',
};

export default meta;

type Story = StoryObj<typeof FigureOverlay>;

const FigureOverlayTemplate: Story = {
  render: ({ children, ...props }) => (
    <FigureOverlay {...props}>{children}</FigureOverlay>
  ),
};

export const FigureOverlayComponent: Story = {
  args: {
    children: <img src="/card-image.png" width="100%" />,
  },
  name: 'FigureOverlay',
  ...FigureOverlayTemplate,
};
