import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { Heading, type HeadingProps } from './';
import { Text } from '../Text';
import React, { type FC } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Heading> = {
  component: Heading,
  excludeStories: ['HeadingStory'],
  parameters: {
    componentSubtitle:
      'Heading is used to render semantic HTML heading elements. By default heading renders `<h2 />` tag. Heading sizes are responsive.',
  },
  title: 'Components/Typography/Heading',
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const HeadingComponent: Story = {
  args: {
    children: 'Carbon footprint calculator that makes sense',
    size: 'h2',
  },
  name: 'Heading',
  render: ({ children, ...props }) => <Heading {...props}>{children}</Heading>,
};

export const HeadingStory: FC<HeadingProps> = composeStory(
  HeadingComponent,
  meta,
);

/* ======
 * Variants
 * ====== */

export const HeadingVariants: Story = {
  name: 'Variants',
  parameters: {
    docs: {
      description: {
        story: 'Heading variants',
      },
    },
  },
  render: () => (
    <>
      <Heading size="h1">
        Carbon footprint calculator that makes sense (h1)
      </Heading>
      <hr />
      <Heading size="h2">
        Carbon footprint calculator that makes sense (h2)
      </Heading>
      <hr />
      <Heading size="h3">
        Carbon footprint calculator that makes sense (h3)
      </Heading>
      <hr />
      <Heading size="h4">
        Carbon footprint calculator that makes sense (h4)
      </Heading>
      <hr />
      <Heading size="h5">
        Carbon footprint calculator that makes sense (h5)
      </Heading>
      <hr />
      <Heading size="h6">
        Carbon footprint calculator that makes sense (h6)
      </Heading>
      <hr />
      <Text marginBottom="base">
        <p>
          Extra large font sizes for reference. Used by Digit and most likely
          aren't needed for anything else.
        </p>
      </Text>
      <h1
        style={{
          fontSize: 'var(--b-font-size-8xl)',
          lineHeight: 'var(--b-line-height-8xl)',
        }}
      >
        Carbon footprint calculator that makes sense (8xl)
      </h1>
      <hr />
      <h1
        style={{
          fontSize: 'var(--b-font-size-7xl)',
          lineHeight: 'var(--b-line-height-7xl)',
        }}
      >
        Carbon footprint calculator that makes sense (7xl)
      </h1>
      <hr />
      <h1
        style={{
          fontSize: 'var(--b-font-size-6xl)',
          lineHeight: 'var(--b-line-height-6xl)',
        }}
      >
        Carbon footprint calculator that makes sense (6xl)
      </h1>
      <hr />
      <h1
        style={{
          fontSize: 'var(--b-font-size-5xl)',
          lineHeight: 'var(--b-line-height-5xl)',
        }}
      >
        Carbon footprint calculator that makes sense (5xl)
      </h1>
    </>
  ),
};

/* ======
 * Heading as link
 * ====== */

export const HeadingAsChild: Story = {
  ...HeadingComponent,
  args: {
    ...HeadingComponent.args,
    asChild: true,
    children: <a href="#">Heading as link</a>,
  },
  name: 'As Child',
  parameters: {
    docs: {
      description: {
        story:
          'Apply `asChild` to convert Heading to a link, button or any other node.',
      },
    },
  },
};
