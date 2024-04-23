import { Box } from '../Box';
import { Flex } from '../Flex';
import { Grid, GridCol } from '../Grid';
import { Illustration, ILLUSTRATION_NAME } from './';
import { type Meta, type StoryObj } from '@storybook/react';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Illustration> = {
  component: Illustration,
  parameters: {
    componentSubtitle:
      'Collection of illustrations to be used in the consuming application.',
  },
  title: 'Components/Media & Icons/Illustration',
};

export default meta;

type Story = StoryObj<typeof Illustration>;

export const IllustrationComponent: Story = {
  args: {
    name: 'rawMaterials',
    width: '50%',
  },
  name: 'Illustration',
  render: ({ name, ...props }) => (
    <Grid minColWidth={320}>
      {ILLUSTRATION_NAME.map(n => (
        <GridCol key={n}>
          <Tooltip content={n}>
            <Box
              asChild
              border="small"
              borderRadius
              height="100%"
              minHeight="15rem"
              padding="small"
              {...(name == n && {
                borderColor: 'var(--b-border-mute-strong)',
              })}
            >
              <Flex
                alignItems="center"
                flexDirection="column"
                gap="xSmall"
                justifyContent="center"
              >
                <Illustration name={n} {...props} />
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
