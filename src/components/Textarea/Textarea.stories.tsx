import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { Grid, GridCol } from '../Grid';
import { Input } from '../Input';
import { Textarea, type TextareaProps } from './';
import React, { type ChangeEvent, type FC, useEffect, useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  excludeStories: ['TextareaStory'],
  parameters: {
    componentSubtitle:
      'The Textarea component allows you to easily create multi-line text inputs.',
  },
  title: 'Components/Forms/Textarea',
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const TextareaComponent: Story = {
  args: {
    beacon: 'warning',
    disabled: false,
    error: '',
    helpOnClick: () => alert('You clicked help'),
    hint: '',
    label: 'Label',
    labelSuffix: '(suffix)',
    placeholder: 'Add value…',
    value: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit odio…',
    warning: '',
  },
  name: 'Textarea',
  render: function Component({ ...props }) {
    const [value, setValue] = useState<TextareaProps['value']>(props.value);

    useEffect(() => {
      setValue(props.value);
    }, [props.value]);

    return (
      <Textarea
        {...props}
        id="string-input"
        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
          setValue(e.target.value)
        }
        value={value}
      />
    );
  },
};

export const TextareaStory: FC<Omit<TextareaProps, 'id'>> = composeStory(
  TextareaComponent,
  meta,
);

/* =======================================
 * Min height, uncontrolled & usage in Grid
 * ======================================= */

export const TextareaUncontrolledMinHeight: Story = {
  name: 'Uncontrolled & Minimum Height',
  parameters: {
    docs: {
      description: {
        story:
          'You can apply `minHeight` to Textarea (e.g. `<Textarea minHeight="8.75rem" />`) preferrably in rems to tweak and match heights with other form elements.',
      },
    },
  },
  render: () => (
    <Grid rowGap="small">
      <GridCol colSpan={{ m: 6 }}>
        <Grid rowGap="small">
          <GridCol>
            <Input id="input-1" label="Label" type="text" />
          </GridCol>
          <GridCol>
            <Input id="input-2" label="Label" type="text" />
          </GridCol>
        </Grid>
      </GridCol>
      <GridCol colSpan={{ m: 6 }}>
        <Textarea
          defaultValue="Default value in uncontrolled textarea with minimum height set…"
          id="textarea-2"
          label="Label"
          minHeight="8.25rem"
        />
      </GridCol>
    </Grid>
  ),
};
