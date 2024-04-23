import { Box } from '../Box';
import { Flex } from '../Flex';
import { Grid, GridCol } from '../Grid';
import { Icon, ICON_NAME } from './';
import { type Meta, type StoryObj } from '@storybook/react';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Icon> = {
  component: Icon,
  parameters: {
    componentSubtitle:
      'Collection of commonly used interface icons to be used in the consuming application.',
  },
  title: 'Components/Media & Icons/Icon',
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const IconComponent: Story = {
  args: {
    name: 'arrowDown',
  },
  name: 'Icon',
  render: ({ name, ...props }) => (
    <Grid minColWidth={120}>
      {ICON_NAME.map(n => (
        <GridCol key={n}>
          <Tooltip content={n}>
            <Box
              asChild
              border="small"
              borderRadius
              height="100%"
              minHeight="7.5rem"
              padding="small"
              {...(name == n && {
                backgroundColor: 'var(--b-bg-300)',
                borderColor: 'var(--b-border-300)',
              })}
            >
              <Flex
                alignItems="center"
                flexDirection="column"
                gap="xSmall"
                justifyContent="center"
              >
                <Icon name={n} {...props} />
                <Text size="small" truncate>
                  {n}
                </Text>
              </Flex>
            </Box>
          </Tooltip>
        </GridCol>
      ))}
    </Grid>
  ),
};
