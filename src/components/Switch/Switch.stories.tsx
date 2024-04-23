import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { type Optional } from '../../types';
import { Switch, type SwitchProps } from './';
import React, { type FC, useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Switch> = {
  component: Switch,
  excludeStories: ['SwitchStory'],
  parameters: {
    componentSubtitle:
      'The Switch component is used as an alternative for the forthcoming Checkbox component.',
    docs: {
      description: {
        component:
          'This component uses `@radix/react-switch` under the hood. View <a href="https://www.radix-ui.com/primitives/docs/components/switch" target="_blank">react-switch</a> for additional properties and information.',
      },
    },
  },
  title: 'Components/Forms/Switch',
};

export default meta;

type Story = StoryObj<typeof Switch>;

const SwitchTemplate: Story = {
  render: function Component({ ...props }) {
    const [value, setValue] = useState(props.checked);

    return <Switch {...props} checked={value} onCheckedChange={setValue} />;
  },
};

export const SwitchComponent: Story = {
  args: {
    checked: false,
    helpOnClick: () => alert('You clicked help'),
    id: 'switch-id',
    label: 'Switch label',
  },
  name: 'Switch',
  ...SwitchTemplate,
};

export const SwitchStory: FC<Optional<SwitchProps, 'checked' | 'id'>> =
  composeStory(SwitchComponent, meta);
