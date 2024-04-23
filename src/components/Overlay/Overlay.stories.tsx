import { m } from 'framer-motion';
import { type Meta, type StoryObj } from '@storybook/react';
import { Overlay } from './Overlay';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Overlay> = {
  component: Overlay,
  parameters: {
    componentSubtitle:
      'Overlay to be used under overlay-like components such as `Alert` or `Aside`',
    docs: {
      description: {
        component: 'Components/Overlay/Overlay',
      },
    },
  },
  title: 'Components/Overlay/Overlay',
};

export default meta;

type Story = StoryObj<typeof Overlay>;

export const OverlayComponent: Story = {
  name: 'Overlay',
  render: function Component({ ...props }) {
    return (
      <div style={{ padding: '1rem', position: 'relative' }}>
        <Overlay key="Overlay" motion={m} {...props} />
        <p
          style={{
            position: 'relative',
            zIndex: 101,
          }}
        >
          Content under overlay.
        </p>
      </div>
    );
  },
};
