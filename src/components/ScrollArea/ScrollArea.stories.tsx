import { Box } from '../Box';
import { Grid, GridCol } from '../Grid';
import { Heading } from '../Heading';
import { type Meta, type StoryObj } from '@storybook/react';
import { ScrollArea } from './ScrollArea';
import { Text } from '../Text';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof ScrollArea> = {
  component: ScrollArea,
  parameters: {
    componentSubtitle:
      'Augments native scroll functionality for custom, cross-browser styling.',
    controls: { disable: true },
    docs: {
      description: {
        component:
          'This component uses `@radix-ui/react-scroll-area` under the hood with restricted properties and simplified usage. View <a href="https://www.radix-ui.com/docs/primitives/components/scroll-area" target="_blank">@radix-ui/react-scroll-area documentation</a> for more information. This component is mainly intended for internal usage for components such as `<Menu />` or `<Tabs />` but can be used for other purposes as well.',
      },
    },
  },
  title: 'Components/Other/ScrollArea',
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const ScrollAreaComponent: Story = {
  name: 'ScrollArea',
  render: ({}) => (
    <Grid minColWidth={240}>
      <GridCol>
        <Box border borderRadius style={{ height: '18rem' }}>
          <ScrollArea orientation="vertical">
            <Box
              padding="base"
              style={{
                height: 'calc(18rem - (var(--b-border-width) * 2))',
              }}
            >
              <Text>
                <Heading>Vertically scrollable content</Heading>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  quaerat vero assumenda cumque, veniam fugiat molestiae
                  necessitatibus. Pariatur, magnam voluptatem! Repellendus
                  corrupti ex ullam. Ut sunt aliquam in totam magni?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  quaerat vero assumenda cumque, veniam fugiat molestiae
                  necessitatibus. Pariatur, magnam voluptatem! Repellendus
                  corrupti ex ullam. Ut sunt aliquam in totam magni?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  quaerat vero assumenda cumque, veniam fugiat molestiae
                  necessitatibus. Pariatur, magnam voluptatem! Repellendus
                  corrupti ex ullam. Ut sunt aliquam in totam magni?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  quaerat vero assumenda cumque, veniam fugiat molestiae
                  necessitatibus. Pariatur, magnam voluptatem! Repellendus
                  corrupti ex ullam. Ut sunt aliquam in totam magni?
                </p>
              </Text>
            </Box>
          </ScrollArea>
        </Box>
      </GridCol>
      <GridCol>
        <Box border borderRadius style={{ height: '18rem' }}>
          <ScrollArea orientation="horizontal">
            <Box
              padding="base"
              style={{
                height: 'calc(18rem - (var(--b-border-width) * 2))',
                width: '1200px',
              }}
            >
              <Text>
                <Heading>Horizontally scrollable content</Heading>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  quaerat vero assumenda cumque, veniam fugiat molestiae
                  necessitatibus. Pariatur, magnam voluptatem! Repellendus
                  corrupti ex ullam. Ut sunt aliquam in totam magni?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  quaerat vero assumenda cumque, veniam fugiat molestiae
                  necessitatibus. Pariatur, magnam voluptatem! Repellendus
                  corrupti ex ullam. Ut sunt aliquam in totam magni?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  quaerat vero assumenda cumque, veniam fugiat molestiae
                  necessitatibus. Pariatur, magnam voluptatem! Repellendus
                  corrupti ex ullam. Ut sunt aliquam in totam magni?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                  quaerat vero assumenda cumque, veniam fugiat molestiae
                  necessitatibus. Pariatur, magnam voluptatem! Repellendus
                  corrupti ex ullam. Ut sunt aliquam in totam magni?
                </p>
              </Text>
            </Box>
          </ScrollArea>
        </Box>
      </GridCol>
    </Grid>
  ),
};
