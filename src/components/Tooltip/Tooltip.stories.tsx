import { Button } from '../Button';
import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Tooltip, type TooltipProps, TooltipProvider } from './';
import React, { type FC } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  excludeStories: ['TooltipStory'],
  parameters: {
    componentSubtitle:
      'A portalled popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    docs: {
      description: {
        component:
          'Wrap the consuming application with `TooltipProvider` if not using the default `Provider`. This component uses `@radix-ui/react-tooltip` under the hood with simplified usage. View <a href="https://www.radix-ui.com/docs/primitives/components/tooltip" target="_blank">@radix-ui/react-tooltip documentation</a> for additional properties and information. Note that in Storybook the Provider is already applied to the whole application.',
      },
    },
  },
  subcomponents: {
    TooltipProvider,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Overlay/Tooltip',
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const TooltipComponent: Story = {
  args: {
    content: "I'm tooltip content",
  },
  name: 'Tooltip',
  render: function Component({ ...props }) {
    return (
      <Flex>
        <Tooltip {...props}>
          <Button>Hover over for tooltip</Button>
        </Tooltip>
        <Tooltip {...props}>
          <Icon name="help" tabIndex={0} />
        </Tooltip>
      </Flex>
    );
  },
};

export const TooltipStory: FC<TooltipProps> = composeStory(
  TooltipComponent,
  meta,
);
