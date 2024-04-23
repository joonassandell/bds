import { Box } from '../../components/Box';
import { ButtonBlockToggle } from '../../components/Button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../../components/Collapsible';
import { Digit } from '../../components/Digit';
import { DonutStory } from '../../components/Donut/Donut.stories';
import { Flex } from '../../components/Flex';
import { Media } from '../../components/Media';
import { type Meta } from '@storybook/react';
import { Separator } from '../../components/Separator';
import { Subtitle } from '../../components/Subtitle';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta = {
  parameters: {
    componentSubtitle: 'DonutHeading build with Donut, Collapsible, Flex etc.',
  },
  title: 'Examples/DonutHeading',
};

export default meta;

export const DonutHeading = {
  render: () => (
    <Collapsible>
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <DonutStory />
          <Media lessThan="m">
            <Digit
              number={7.39}
              subtitle={{
                color: 'strong',
                subtitle: 'Cultivation',
              }}
            />
          </Media>
        </Flex>
        <Media greaterThanOrEqual="m">
          {(c, render) =>
            render && (
              <Subtitle
                className={c}
                color="strong"
                marginBottom={false}
                size="large"
                subtitle="Cultivation"
                subtitleCase
                truncate
              />
            )
          }
        </Media>
        <Box flexGrow={1}>
          <Separator />
        </Box>
        <Media greaterThanOrEqual="m">
          {(c, render) => render && <Digit className={c} number={7.39} />}
        </Media>
        <CollapsibleTrigger asChild>
          <ButtonBlockToggle />
        </CollapsibleTrigger>
      </Flex>
      <CollapsibleContent>
        <Box
          border
          borderRadius
          marginBottom="base"
          marginTop="base"
          padding="base"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          vulputate lacinia enim mattis vestibulum. Donec suscipit facilisis
          augue ut pellentesque. Quisque dignissim neque tortor, posuere
          pellentesque nibh imperdiet convallis. Sed sed erat rutrum, tempor
          nisl non, scelerisque augue. Nunc euismod dictum finibus. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Nulla elementum sem
          felis, ut molestie ligula venenatis sollicitudin. Donec sit amet metus
          viverra, malesuada urna sit amet, interdum dui. Morbi nec dolor
          cursus, bibendum orci a, ultrices augue. Integer aliquet sapien nunc,
          maximus hendrerit neque aliquet ut. Duis hendrerit, leo sit amet
          varius luctus, ante velit suscipit lorem, ac laoreet augue lacus in
          nisi. Sed sed semper eros, sit amet sollicitudin massa.
        </Box>
      </CollapsibleContent>
    </Collapsible>
  ),
};
