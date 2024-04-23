import { Button } from '../../../components/Button';
import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { Digit } from '../../../components/Digit';
import { Flex } from '../../../components/Flex';
import { Heading } from '../../../components/Heading';
import { HeadingSelect } from '.';
import { Icon } from '../../../components/Icon';
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSelect,
  MenuText,
  MenuTrigger,
} from '../../../components/Menu';
import { options } from '../../../components/Select/Select.stories';
import { type SelectOptions } from '../../../components/Select';
import { Separator } from '../../../components/Separator';
import React, { useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof HeadingSelect> = {
  component: HeadingSelect,
  excludeStories: ['HeadingSelectStory'],
  parameters: {
    componentSubtitle:
      'Example of HeadingSelect component that can be used as a starting point in the consuming application.',
    docs: {
      description: {
        component: `Initially HeadingSelect was supposed to be created as a
          reusable component, however do to the complexity of this component and the need for
          possible various layout variations it might need, it makes more sense to do them in
          the consuming application rather than trying to create forced layouts with
          bunch of subcomponents. Uses container queries under the hood!`,
      },
    },
  },
  title: 'Examples/HeadingSelect',
};

export default meta;

type Story = StoryObj<typeof HeadingSelect>;

export const HeadingSelectComponent: Story = {
  name: 'HeadingSelect',
  render: function Component() {
    const [open, setOpen] = useState(false);
    const [openMobileMenu, setOpenMobileMenu] = useState(false);
    const [value, setValue] = useState<SelectOptions>(options[0].options[0]);

    return (
      <HeadingSelect>
        <Flex gap="small">
          <Menu onOpenChange={setOpen} open={open}>
            <MenuTrigger asChild className="b-HeadingSelect-selectButton">
              <Button icon="select" justify="block">
                Open Menu
              </Button>
            </MenuTrigger>
            <MenuContent width="large">
              <MenuSelect
                id="heading-select-menu"
                onChange={value => {
                  setValue(value as SelectOptions);
                  setOpen(false);
                }}
                options={options}
                placeholder="Search..."
                value={value}
              />
            </MenuContent>
          </Menu>
          <Heading
            className="b-HeadingSelect-label"
            margin={0}
            onClick={() => setOpen(true)}
            size="h4"
          >
            {value?.label}
          </Heading>
          <Separator className="b-HeadingSelect-separator" />
          <Digit className="b-HeadingSelect-digit-l" number={6.68} />
          <Flex className="b-HeadingSelect-buttons" gap="xSmall">
            <Menu onOpenChange={setOpenMobileMenu} open={openMobileMenu}>
              <MenuTrigger asChild className="b-HeadingSelect-buttons-s">
                <Button icon="ellipsisHorizontal" justify="block" size="xSmall">
                  Help
                </Button>
              </MenuTrigger>
              <MenuContent align="end">
                <MenuItem>
                  <MenuText>
                    <Icon name="help" />
                    <MenuText>Help</MenuText>
                  </MenuText>
                </MenuItem>
                <MenuItem>
                  <MenuText>
                    <Icon name="trash" />
                    <MenuText>Delete</MenuText>
                  </MenuText>
                </MenuItem>
              </MenuContent>
            </Menu>
            <Button
              className="b-HeadingSelect-buttons-l"
              icon="help"
              justify="block"
            >
              Help
            </Button>
            <Button
              className="b-HeadingSelect-buttons-l"
              icon="trash"
              justify="block"
            >
              Delete
            </Button>
          </Flex>
        </Flex>
        <Digit className="b-HeadingSelect-digit-s" number={6.68} size="small" />
      </HeadingSelect>
    );
  },
};

export const HeadingSelectStory = composeStory(HeadingSelectComponent, meta);
