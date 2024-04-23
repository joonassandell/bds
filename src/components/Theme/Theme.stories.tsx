import { Box } from '../Box';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Heading } from '../Heading';
import { MenuStory } from '../Menu/Menu.stories';
import { type Meta, type StoryObj } from '@storybook/react';
import { Theme } from './';
import { TooltipStory } from '../Tooltip/Tooltip.stories';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Theme> = {
  component: Theme,
  parameters: {
    componentSubtitle:
      "Apply dark or light mode to Theme to set a specific color mode for its children. By default the color mode is 'light'.",
    docs: {
      description: {
        component:
          "Note that it's most likely essential to have a dark/light background behind the content so that the inversed colors are visible. Theme component is not directly related to ThemeProvider which controls the theme of the entire application.",
      },
    },
  },
  title: 'Components/Theme/Theme',
};

export default meta;

type Story = StoryObj<typeof Theme>;

export const ThemeComponent: Story = {
  args: {
    children: (
      <Box
        backgroundColor="var(--b-surface-1)"
        border
        borderColor="var(--b-surface-1-border)"
        borderRadius
        padding="medium"
      >
        <Heading>I'm heading in a dark background</Heading>
        <p>
          I'm text in a dark background{' '}
          <strong>no matter what the global theme is</strong>.
        </p>
        <Flex gap="small">
          <Button>Dark button</Button>
          <MenuStory />
          <TooltipStory />
        </Flex>
      </Box>
    ),
    mode: 'dark',
  },
  name: 'Theme',
  render: ({ children, ...props }) => <Theme {...props}>{children}</Theme>,
};
