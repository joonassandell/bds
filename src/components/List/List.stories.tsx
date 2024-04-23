import { Box } from '../Box';
import { Icon } from '../Icon';
import {
  List,
  ListItem,
  ListItemHeading,
  ListItemHeadingText,
  ListItemSeparator,
  ListItemValue,
} from './';
import { type Meta, type StoryObj } from '@storybook/react';
import { Subtitle } from '../Subtitle';
import { Tooltip } from '../Tooltip';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof List> = {
  component: List,
  parameters: {
    componentSubtitle:
      'List is used to display list items. Renders a <dl> element.',
  },
  subcomponents: {
    ListItem,
    ListItemHeading,
    ListItemHeadingText,
    ListItemSeparator,
    ListItemValue,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Data display/List',
};

export default meta;

type Story = StoryObj<typeof List>;

export const ListComponent: Story & any = {
  args: {
    heading1: 'Biogenic',
    heading2: 'Fossil',
    value1: 20.75,
    value2: 30.45,
  },
  name: 'List',
  render: function Component({ heading1, heading2, value1, value2 }) {
    return (
      <>
        <Box border borderRadius maxWidth="380px" padding="base">
          <Subtitle>Carbon Footprint</Subtitle>
          <List>
            <ListItem>
              <ListItemHeading>
                <ListItemHeadingText>{heading2}</ListItemHeadingText>
              </ListItemHeading>
              <ListItemValue number={value2} />
            </ListItem>
            <ListItemSeparator />
            <ListItem>
              <ListItemHeading>
                <ListItemHeadingText>{heading1}</ListItemHeadingText>
                <Tooltip content="Neque porro quisquam est qui dolorem">
                  <Icon name="info" size="xSmall" />
                </Tooltip>
              </ListItemHeading>
              <ListItemValue number={value1} />
            </ListItem>
            <ListItemSeparator />
            <ListItem>
              <ListItemHeading>
                <ListItemHeadingText
                  truncate
                  truncateTooltip="Custom tooltip content if text is truncated. If this is not set, then the contents of children is used instead."
                >
                  Neque porro quisquam est qui dolorem
                </ListItemHeadingText>
                <Tooltip content={'Neque porro quisquam est qui dolorem'}>
                  <Icon name="info" size="xSmall" />
                </Tooltip>
              </ListItemHeading>
              <ListItemValue truncate>
                consectetur, adipisci velit
              </ListItemValue>
            </ListItem>
          </List>
        </Box>
        <Box marginTop="2xLarge" padding="base">
          <Subtitle>Carbon Footprint</Subtitle>
          <List>
            <ListItem>
              <ListItemHeading>
                <ListItemHeadingText>{heading2}</ListItemHeadingText>
              </ListItemHeading>
              <ListItemValue number={value2} />
            </ListItem>
            <ListItemSeparator />
            <ListItem>
              <ListItemHeading>
                <ListItemHeadingText>{heading1}</ListItemHeadingText>
              </ListItemHeading>
              <ListItemValue number={value1} />
            </ListItem>
            <ListItemSeparator />
            <ListItem>
              <ListItemHeading>
                <ListItemHeadingText truncate>
                  Neque porro quisquam est qui dolorem
                </ListItemHeadingText>
              </ListItemHeading>
              <ListItemValue truncate>
                consectetur, adipisci velit
              </ListItemValue>
            </ListItem>
          </List>
        </Box>
      </>
    );
  },
};
