import { Box } from '../Box';
import { Button } from '../Button';
import { Media, MediaContextProvider, useMediaQueries } from './';
import { type Meta, type StoryObj } from '@storybook/react';
import { Text } from '../Text';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Media> = {
  component: Media,
  parameters: {
    componentSubtitle:
      'Responsive visibility helper to control any React components visibility',
    docs: {
      description: {
        component: `<p>Wrap consuming application with \`MediaContextProvider\` if not using the default \`Provider\`. This component uses \`@artsy/fresnel\` under the hood. View <a href="https://github.com/artsy/fresnel" target="_blank">@artsy/fresnel documentation</a> for additional properties and information. There are three ways to use this component in preferred usage order:</p>
        // asChild prop if the underlying component forwards refs:
    <Media asChild greaterThanOrEqual="m">
      <Box ... />
    </Media>

    // Render props if the component doesn't forward refs:
    <Media greaterThanOrEqual="m">
      {(c, render) => render && <Number className={c} ... />}
    </Media>

    // Simply with children but this will render an extra <div>:
    <Media greaterThanOrEqual="m">
      <Box ... />
    </Media>
        `,
      },
    },
  },
  subcomponents: {
    MediaContextProvider,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Disclosure/Media',
};

export default meta;

type Story = StoryObj<typeof Media>;

export const MediaComponent: Story = {
  name: 'Media',
  render: () => (
    <>
      <Media lessThan="m">I'm visibile in mobile only</Media>
      <Media at="xs">I'm visibile in xSmall breakpoint only</Media>
      <Media greaterThanOrEqual="m">
        I'm visibile starting at medium breakpoint
      </Media>
      <Media greaterThanOrEqual="l">
        I'm visibile starting at large breakpoint
      </Media>
      <Media greaterThanOrEqual="xl">
        I'm visibile starting at xLarge breakpoint
      </Media>
      <Media asChild greaterThanOrEqual="m">
        <Box>I'm visibile Box starting at medium breakpoint using asChild</Box>
      </Media>
      <Media greaterThanOrEqual="m">
        {(c, render) =>
          render && (
            <div className={c}>
              I'm visibile starting at medium breakpoint using render props
            </div>
          )
        }
      </Media>
    </>
  ),
};

/* =======================================
 * useMediaQueries hook
 * ======================================= */

export const UseMediaQueries = {
  name: 'useMediaQueries',
  parameters: {
    docs: {
      description: {
        story:
          'Use useMediaQueries hook instead of the Media if needed e.g. to change properties of components. Note that useMediaQueries is not directly related to Media under the hood but it has similar API.',
      },
    },
  },
  render: function Component() {
    const { mq: l } = useMediaQueries();
    const mqL = l('greaterOrEqual', 'l');

    return (
      <>
        <Text marginBottom="base">
          {mqL
            ? "I'm visibile in large viewport"
            : "I'm visibile in viewport smaller than large"}
        </Text>
        <Button size={mqL ? 'small' : 'xSmall'}>
          Size changes based on viewport
        </Button>
      </>
    );
  },
};
