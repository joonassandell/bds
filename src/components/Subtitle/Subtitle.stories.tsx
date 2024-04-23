import { Heading } from '../Heading';
import { type Meta, type StoryObj } from '@storybook/react';
import { Subtitle } from './';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Subtitle> = {
  component: Subtitle,
  parameters: {
    componentSubtitle:
      'Subtitle is used to render short and small informative sub headings usually together with Heading, Table or anything that might need a small but strong heading. Subtitle is also useful to distinguish certain sections of the application. By default Subtitle renders h6.',
  },
  title: 'Components/Typography/Subtitle',
};

export default meta;

type Story = StoryObj<typeof Subtitle>;

export const SubtitleComponent: Story = {
  args: {
    children: 'This is Subtitle',
  },
  name: 'Subtitle',
  render: ({ children, ...props }) => (
    <>
      <Subtitle {...props}>{children}</Subtitle>
      <Heading>Carbon footprint calculator that makes sense</Heading>
      <hr />
      <Subtitle {...props}>
        <a href="https://biocode.io">Subtitle as link &rarr;</a>
      </Subtitle>
    </>
  ),
};
