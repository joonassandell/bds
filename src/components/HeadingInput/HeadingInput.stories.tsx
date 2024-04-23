import { HeadingInput } from './';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof HeadingInput> = {
  component: HeadingInput,
  parameters: {
    componentSubtitle: 'HTML input with heading aesthetics.',
    docs: {
      description: {
        component:
          'This component extends the standard `<input />` element, so all the input properties are available.',
      },
    },
  },
  title: 'Components/Forms/HeadingInput',
};

export default meta;

type Story = StoryObj<typeof HeadingInput>;

export const HeadingInputComponent: Story = {
  args: {
    autoFocus: true,
    id: 'heading',
    onChange: e => console.log(e),
    // defaultValue: 'New draft title',
    placeholder: 'Add draft title…',
  },
  name: 'HeadingInput',
  render: function Component({ id, ...props }) {
    return <HeadingInput id={id} {...props} />;
  },
};
