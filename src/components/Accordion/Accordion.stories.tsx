import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  AccordionTitle,
} from './';
import { Flex } from '../Flex';
import { Heading } from '../Heading';
import { type Meta, type StoryObj } from '@storybook/react';
import { Text } from '../Text';
import React, { useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  parameters: {
    componentSubtitle:
      'A vertically stacked set of interactive headings that each reveal an associated section of content.',
  },
  subcomponents: {
    AccordionContent,
    AccordionHeader,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    AccordionTitle,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Disclosure/Accordion',
};

export default meta;

type Story = StoryObj<typeof Accordion>;

const AccordionTemplate: Story = {
  render: function Component({ children, ...props }) {
    const [value, setValue] = useState('outputs_yield');

    return (
      <Accordion
        {...props}
        onValueChange={value => setValue(value)}
        value={value}
      >
        {children}
      </Accordion>
    );
  },
};

export const AccordionComponent: Story = {
  args: {
    children: (
      <>
        <AccordionItem key="outputs_yield" value="outputs_yield">
          <AccordionHeader>
            <AccordionTitle>Average yield of the plot</AccordionTitle>
          </AccordionHeader>
          <AccordionPanel>
            <AccordionContent>
              <Text>
                Average yield of this current field plot. Calculate by the
                following formula: Total yield / current plot area.
              </Text>
            </AccordionContent>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem
          key="outputs_yield_moisture"
          value="outputs_yield_moisture"
        >
          <AccordionHeader>
            <AccordionTitle>Moisture content of the yield (%)</AccordionTitle>
          </AccordionHeader>
          <AccordionPanel>
            <AccordionContent>
              <Text>
                To calculate a percentage moisture content, using the following
                formula: (weight of the crop after drying - weight of the crop
                after harvesting) / weight of the crop after harvesting * 100
              </Text>
            </AccordionContent>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem key="dsoc_organic_matter" value="dsoc_organic_matter">
          <AccordionHeader>
            <AccordionTitle>Organic content of the soil</AccordionTitle>
          </AccordionHeader>
          <AccordionPanel>
            <AccordionContent>
              <Text>
                <p>
                  Fill in the organic content (%) of the soil. If you know only
                  the soil organic matter class, use the following values:
                </p>
                <ul>
                  <li>Low = 1.50%</li>
                  <li>Medium = 4.45%</li>
                  <li>Rich = 8.95%</li>
                  <li>Very rich = 15.95%</li>
                  <li>Mull = 20.00%</li>
                  <li>Peat soil = 40.00%.</li>
                </ul>
              </Text>
            </AccordionContent>
          </AccordionPanel>
        </AccordionItem>
      </>
    ),
  },
  name: 'Accordion',
  ...AccordionTemplate,
};

/* =======================================
 * CustomAccordion
 * ======================================= */

export const CustomAccordion: Story = {
  args: {
    children: (
      <AccordionItem key="outputs_yield" value="outputs_yield">
        <AccordionHeader layout="custom">
          <Flex alignItems="center" justifyContent="space-between">
            <AccordionTitle asChild>
              <Heading marginBottom={false} size="h3">
                Average yield of the plot
              </Heading>
            </AccordionTitle>
            <AccordionIcon
              icon={{
                close: 'arrowDown',
                open: 'arrowUp',
              }}
              size="large"
            />
          </Flex>
        </AccordionHeader>
        <AccordionPanel>
          <AccordionContent>
            <Text>
              Average yield of this current field plot. Calculate by the
              following formula: Total yield / current plot area.
            </Text>
          </AccordionContent>
        </AccordionPanel>
      </AccordionItem>
    ),
  },
  name: 'Custom Accordion',
  parameters: {
    docs: {
      description: {
        story:
          'Use `<AccordionHeader layout="custom" />` to apply custom content. With `<AccordionIcon icon={{ close: "arrowDown", open: "arrowUp" }} />` icons can be changed based on the open state.',
      },
    },
  },
  ...AccordionTemplate,
};
