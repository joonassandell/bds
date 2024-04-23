import { Button } from '../Button';
import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { Fieldset, type FieldsetProps } from './';
import { Grid, GridCol } from '../Grid';
import { InputStory } from '../Input/Input.stories';
import { SelectStory } from '../Select/Select.stories';
import { SwitchStory } from '../Switch/Switch.stories';
import { TextareaStory } from '../Textarea/Textarea.stories';
import React, { type FC } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Fieldset> = {
  component: Fieldset,
  excludeStories: ['FieldsetStory'],
  parameters: {
    componentSubtitle:
      'Renders a box with a legend around a set of form items.',
  },
  title: 'Components/Forms/Fieldset',
};

export default meta;

type Story = StoryObj<typeof Fieldset>;

export const FieldsetComponent: Story = {
  args: {
    children: (
      <Grid>
        <GridCol colSpan={{ m: 6 }}>
          <InputStory beacon={undefined} color="surface:3" hint={undefined} />
        </GridCol>
        <GridCol colSpan={{ m: 6 }}>
          <InputStory color="surface:3" disabled hint={undefined} />
        </GridCol>
        <GridCol colSpan={{ m: 6 }}>
          <Grid>
            <GridCol>
              <TextareaStory beacon={undefined} color="surface:3" />
            </GridCol>
            <GridCol>
              <TextareaStory color="surface:3" disabled />
            </GridCol>
          </Grid>
        </GridCol>
        <GridCol colSpan={{ m: 6 }}>
          <Grid>
            <GridCol>
              <SelectStory />
            </GridCol>
            <GridCol>
              <SwitchStory />
            </GridCol>
          </Grid>
        </GridCol>
        <GridCol>
          <Button>Button</Button>
        </GridCol>
      </Grid>
    ),
    legend: 'Legend of the fieldset',
  },
  name: 'Fieldset',
};

export const FieldsetStory: FC<FieldsetProps> = composeStory(
  FieldsetComponent,
  meta,
);
