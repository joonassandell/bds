import { Box } from '../Box';
import { ButtonBlockToggle } from '../Button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Collapsible> = {
  component: Collapsible,
  parameters: {
    componentSubtitle:
      'An interactive component which expands/collapses a panel.',
    docs: {
      description: {
        component:
          'This component uses `@radix-ui/react-collapsible` under the hood. View <a href="https://www.radix-ui.com/docs/primitives/components/collapsible" target="_blank">@radix-ui/react-collapsible</a> for additional properties and information.',
      },
    },
  },
  subcomponents: {
    CollapsibleContent,
    CollapsibleTrigger,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Disclosure/Collapsible',
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const CollapsibleComponent: Story = {
  args: {},
  name: 'Collapsible',
  render: ({ ...props }) => (
    <Collapsible {...props}>
      <CollapsibleTrigger asChild>
        <ButtonBlockToggle />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Box border borderRadius marginTop="medium" padding="small">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam a
          elementum massa. Sed nec lectus nec orci imperdiet rutrum eleifend
          eget massa. Quisque quis finibus risus, sed tristique mauris.
        </Box>
      </CollapsibleContent>
    </Collapsible>
  ),
};
