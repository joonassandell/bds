import { Button } from '../Button';
import { Flex } from '../Flex';
import { Input } from '../Input';
import { List, ListItem, ListItemHeading, ListItemValue } from '../List';
import { type Meta, type StoryObj } from '@storybook/react';
import { Popover, PopoverContent, PopoverTrigger } from './';
import { Subtitle } from '../Subtitle';
import React, { useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Popover> = {
  component: Popover,
  parameters: {
    componentSubtitle:
      'Popovers are small overlays that open on demand. They let users access additional content and actions without cluttering the page.',
  },
  subcomponents: {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Overlay/Popover',
};

export default meta;

type Story = StoryObj<typeof Popover>;

const PopoverTemplate: Story = {
  render: function Component({ children, ...props }) {
    const [open, setOpen] = useState(false);

    return (
      <Popover {...props} onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <Button
            icon="ellipsisHorizontal"
            justify="block"
            onClick={() => {
              setOpen(true);
            }}
          />
        </PopoverTrigger>
        {children}
      </Popover>
    );
  },
};

export const PopoverComponent: Story = {
  args: {
    children: (
      <PopoverContent>
        <Subtitle marginBottom="small">Additional inputs</Subtitle>
        <Flex flexDirection="column">
          <Input
            color="surface:3"
            helpText="Category of your custom emission. For example, emissions come from purchasing hoodies for employees can be categorised as 'Office apparel'"
            id="test-input"
            label="Emission category"
            placeholder="Add emission category..."
          />
          <Input
            color="surface:3"
            id="test-input"
            label="Activity description"
            placeholder="Add activity description..."
          />
        </Flex>
      </PopoverContent>
    ),
  },
  name: 'Popover',
  ...PopoverTemplate,
};

export const PopoverWithMultipleRows: Story = {
  args: {
    children: (
      <PopoverContent>
        <Subtitle marginBottom="small">Additional information</Subtitle>
        <List>
          <ListItem>
            <ListItemHeading>Emission category</ListItemHeading>
            <ListItemValue truncate>Uncategorised</ListItemValue>
          </ListItem>
          <ListItem>
            <ListItemHeading>Activity Description</ListItemHeading>
            <ListItemValue truncate>Activity ABCXYZ</ListItemValue>
          </ListItem>
          <ListItem>
            <ListItemHeading>Donec venenatis</ListItemHeading>
            <ListItemValue truncate>elit quis egestas auctor</ListItemValue>
          </ListItem>
          <ListItem>
            <ListItemHeading>Sed diam eros</ListItemHeading>
            <ListItemValue truncate>
              Scelerisque nec viverra id, vestibulum id purus
            </ListItemValue>
          </ListItem>
          <ListItem>
            <ListItemHeading>Mauris nulla libero</ListItemHeading>
            <ListItemValue truncate>
              Sodales vel scelerisque id, auctor id orci
            </ListItemValue>
          </ListItem>
          <ListItem>
            <ListItemHeading>Sed placerat vitae</ListItemHeading>
            <ListItemValue truncate>Dolor et pellentesque</ListItemValue>
          </ListItem>
          <ListItem>
            <ListItemHeading>Vestibulum tempus</ListItemHeading>
            <ListItemValue truncate>
              At lacinia libero tempor tincidunt
            </ListItemValue>
          </ListItem>
          <ListItem>
            <ListItemHeading>Suspendisse eget est justo</ListItemHeading>
            <ListItemValue truncate>Suspendisse vitae odio metus</ListItemValue>
          </ListItem>
          <ListItem>
            <ListItemHeading>Duis lorem nisl</ListItemHeading>
            <ListItemValue truncate>Ultrices vel dapibus nec</ListItemValue>
          </ListItem>
        </List>
      </PopoverContent>
    ),
  },
  name: 'Popover with Multiple Rows',
  ...PopoverTemplate,
};
