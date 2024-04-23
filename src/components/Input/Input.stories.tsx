import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { Input, type InputProps } from './';
import { type Optional } from '../../types';
import React, { type ChangeEvent, type FC, useEffect, useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Input> = {
  component: Input,
  excludeStories: ['InputStory'],
  parameters: {
    componentSubtitle:
      'The Input component is a component that is used to get user input in a number or text field.',
    docs: {
      description: {
        component:
          'By default controlled version of this component is like `type="number"` but under the hood it\'s `type="text"` which disables adding text with some default `pattern` and validity magic. To deal with issues entering decimal numbers with different separators (,.) in different browsers in different OSs with different language settings, all commas are replaced with periods and extra periods are removed. This mutates the event.target.value property.  Change to `type="text"` to add text values. Controlled input adds default value of `\'\'` if no value is set.',
      },
    },
  },
  title: 'Components/Forms/Input',
};

export default meta;

type Story = StoryObj<typeof Input>;

const InputTemplate: Story = {
  render: function Component({ ...props }) {
    const [value, setValue] = useState(props.value);

    useEffect(() => {
      setValue(props.value);
    }, [props.value]);

    return (
      <Input
        {...props}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setValue(e.target.value);
        }}
        value={value}
      />
    );
  },
};

export const InputComponent: Story = {
  args: {
    beacon: 'info',
    disabled: false,
    enableNegativeValues: true,
    error: '',
    helpOnClick: () => alert('You clicked help'),
    hint: 'Lorem ipsum dolor…',
    id: 'number-input',
    label: 'Label',
    labelSuffix: '(suffix)',
    placeholder: '1234',
    readOnly: false,
    required: true,
    type: 'number',
    unit: 'kg',
    value: 81.83,
    warning: '',
  },
  name: 'Input',
  ...InputTemplate,
};

export const InputStory: FC<Optional<InputProps, 'id'>> = composeStory(
  InputComponent,
  meta,
);

/* =======================================
 * Input: Uncontrolled
 * ======================================= */

export const InputComponentUncontrolled: Story = {
  name: 'Uncontrolled',
  parameters: {
    docs: {
      description: {
        story:
          "If you don't apply `onChange` prop to the input it'll be uncontrolled which means you shouldn't use the `value` prop either. In uncontrolled version the `type=\"number\"` works like in a native input.",
      },
    },
  },
  render: () => (
    <Input
      defaultValue="Default value in uncontrolled input…"
      id="uncontrolled-input"
      placeholder="Add value…"
      type="text"
    />
  ),
};
