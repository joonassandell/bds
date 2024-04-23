import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { Flex } from '../Flex';
import { Grid, GridCol } from '../Grid';
import { Heading } from '../Heading';
import { InputStory } from '../Input/Input.stories';
import { type Meta, type StoryObj } from '@storybook/react';
import { SelectStory } from '../Select/Select.stories';
import { Separator } from '../Separator';
import { Skeleton } from './';
import { Text } from '../Text';
import React, { useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
  parameters: {
    componentSubtitle:
      'Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.',
    docs: {
      description: {
        component:
          "The data for your components might not be immediately available. You can improve the perceived responsiveness of the page by using skeletons. It feels like things are happening immediately, then the information is incrementally displayed on the screen. Skeleton is designed to be used directly in your components and in most cases it's recommended to infer the dimensions rather then specifying custom sizes to prevent large layout shifts.",
      },
    },
  },
  title: 'Components/Feedback/Skeleton',
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const SkeletonComponent: Story = {
  name: 'Skeleton',
  render: ({ ...props }) => <Skeleton {...props} />,
};

/* =======================================
 * Variants
 * ======================================= */

export const SkeletonVariants: Story = {
  name: 'Variants',
  parameters: {
    docs: {
      description: {
        story:
          'The component supports 4 shape variants: `text` (default), `circle`, `round` and `rectangle`.',
      },
    },
  },
  render: function Component() {
    const [loading, setLoading] = useState(true);

    return (
      <>
        {loading ? <Skeleton /> : 'Body text dolore aute cupidatat laborum'}
        <Separator marginBottom="base" marginTop="base" />
        {(loading && (
          <Skeleton variant="circle">
            <Avatar image="/avatar-image.jpg" size="xLarge" />
          </Skeleton>
        )) || <Avatar image="/avatar-image.jpg" size="xLarge" />}
        <Separator marginBottom="base" marginTop="base" />
        {(loading && (
          <Skeleton variant="round">
            <Flex gap="xSmall">
              <Badge size="small">Badge</Badge>
              <Badge size="small">Badge</Badge>
              <Badge size="small">Badge</Badge>
            </Flex>
          </Skeleton>
        )) || (
          <Flex gap="xSmall">
            <Badge size="small">Badge</Badge>
            <Badge size="small" variant="warning">
              Badge
            </Badge>
            <Badge size="small" variant="primary">
              Badge
            </Badge>
          </Flex>
        )}
        <Separator marginBottom="base" marginTop="base" />
        <Grid>
          <GridCol colSpan={4}>
            {loading ? (
              <Skeleton variant="rectangle">
                <img height="360" src="/card-image.png" width="640" />
              </Skeleton>
            ) : (
              <img height="360" src="/card-image.png" width="640" />
            )}
          </GridCol>
        </Grid>
        <Separator marginBottom="base" marginTop="base" />
        <Button onClick={() => setLoading(!loading)}>Toggle loading</Button>
      </>
    );
  },
};

/* =======================================
 * Dimensions
 * ======================================= */

export const SkeletonDimensions: Story = {
  name: 'Dimensions',
  parameters: {
    docs: {
      description: {
        story:
          'In addition to accepting `width` and `height` props, the component can also infer the dimensions. It works well when it comes to typography. But when it comes to other components you can pass children and it will infer its width and height from them.',
      },
    },
  },
  render: function Component() {
    const [loading, setLoading] = useState(true);

    return (
      <>
        <Grid minColWidth={200}>
          <GridCol>
            <Text>
              <Heading>{(loading && <Skeleton />) || 'H2 heading'}</Heading>
              <p>
                {(loading && <Skeleton lines={3} />) ||
                  'Body text aute fugiat dolore aute cupidatat laborum quis ea labore ipsum quis cillum exercitation pariatur et excepteur consequat laboris fugiat ut ad elit excepteur.'}
              </p>
            </Text>
          </GridCol>
          <GridCol>
            <Heading size="h1">
              {(loading && <Skeleton />) || 'H1 heading'}
            </Heading>
            <Heading size="h3">
              {(loading && <Skeleton />) || 'H3 heading'}
            </Heading>
            <Text size="small">
              <p>
                {(loading && <Skeleton lines={3} />) ||
                  'Small text aute fugiat dolore aute cupidatat laborum quis ea labore ipsum quis cillum exercitation pariatur et excepteur consequat laboris fugiat ut ad elit excepteur.'}
              </p>
            </Text>
          </GridCol>
        </Grid>
        <Separator marginBottom="base" marginTop="base" />
        <Flex alignItems="center" flexWrap="wrap">
          {(loading && (
            <Skeleton variant="circle">
              <Avatar image="/avatar-image.jpg" size="xLarge" />
            </Skeleton>
          )) || <Avatar image="/avatar-image.jpg" size="xLarge" />}
          {(loading && (
            <Skeleton variant="round">
              <Flex gap="xSmall">
                <Badge>Badge</Badge>
                <Badge>Badge</Badge>
                <Badge>Badge</Badge>
              </Flex>
            </Skeleton>
          )) || (
            <Flex gap="xSmall">
              <Badge>Badge</Badge>
              <Badge variant="warning">Badge</Badge>
              <Badge variant="primary">Badge</Badge>
            </Flex>
          )}
        </Flex>
        <Separator marginBottom="base" marginTop="base" />
        <Grid minColWidth={200}>
          <GridCol>
            {(loading && (
              <Skeleton variant="round" width="100%">
                <InputStory
                  helpOnClick={undefined}
                  hint={undefined}
                  id="skeleton"
                  label={undefined}
                />
              </Skeleton>
            )) || <InputStory hint={undefined} label="Skeleton" />}
          </GridCol>
          <GridCol>
            {(loading && (
              <Skeleton variant="round" width="100%">
                <SelectStory
                  helpOnClick={undefined}
                  id="skeleton"
                  label={undefined}
                />
              </Skeleton>
            )) || <SelectStory />}
          </GridCol>
        </Grid>
        <Separator marginBottom="base" marginTop="base" />
        <Text>
          <p>
            {loading ? (
              <Skeleton height="var(--b-space-s)" width="80%" />
            ) : (
              'Custom dimensions skeleton body text dolore aute cupidatat laborum'
            )}
          </p>
        </Text>
        <Separator marginBottom="base" marginTop="base" />
        <Button onClick={() => setLoading(!loading)}>Toggle loading</Button>
      </>
    );
  },
};

/* =======================================
 * Lines
 * ======================================= */

export const SkeletonLines: Story = {
  name: 'Lines',
  parameters: {
    docs: {
      description: {
        story:
          "You can apply number to `lines` property to repeat multiple lines in one Skeleton instance. `height` and `width` properties can be used to change the dimensions, however when it comes to height it's recommended to infer the dimensions instead as seen in first two examples.",
      },
    },
  },
  render: function Component() {
    const [loading, setLoading] = useState(true);

    return (
      <>
        <Grid minColWidth={200}>
          <GridCol>
            <Text>
              <p>
                {loading ? (
                  <Skeleton lines={4} />
                ) : (
                  'Body text dolore aute cupidatat laborum. Quis ea labore ipsum quis cillum exercitation pariatur et excepteur. Consequat laboris fugiat ut ad elit excepteur. Nisi quis tempor pariatur duis est pariatur tempor magna. Dolore mollit amet officia commodo enim.'
                )}
              </p>
            </Text>
          </GridCol>
          <GridCol>
            <Text size="small">
              <p>
                {loading ? (
                  <Skeleton lines={4} />
                ) : (
                  'Small text dolore aute cupidatat laborum. Quis ea labore ipsum quis cillum exercitation pariatur et excepteur. Consequat laboris fugiat ut ad elit excepteur. Nisi quis tempor pariatur duis est pariatur tempor magna. Dolore mollit amet officia commodo enim.'
                )}
              </p>
            </Text>
          </GridCol>
        </Grid>
        <Separator marginBottom="medium" marginTop="medium" />
        <Grid minColWidth={200}>
          <GridCol>
            <Text>
              <p>
                {loading ? (
                  <Skeleton
                    height="var(--b-space-xs)"
                    lines={3}
                    linesGap="small"
                  />
                ) : (
                  'Body text dolore aute cupidatat laborum. Quis ea labore ipsum quis cillum exercitation pariatur et excepteur. Consequat laboris fugiat ut ad elit excepteur.'
                )}
              </p>
            </Text>
          </GridCol>
          <GridCol>
            <Text size="small">
              <p>
                {loading ? (
                  <Skeleton
                    height="var(--b-space-xs)"
                    lines={3}
                    linesGap="xSmall"
                  />
                ) : (
                  'Small text dolore aute cupidatat laborum. Quis ea labore ipsum quis cillum exercitation pariatur et excepteur. Consequat laboris fugiat ut ad elit excepteur.'
                )}
              </p>
            </Text>
          </GridCol>
        </Grid>
        <Separator marginBottom="medium" marginTop="medium" />
        {loading ? (
          <Skeleton lines={3} linesDirection="horizontal" width="25%" />
        ) : (
          <Flex gap="small">
            <div>Body text dolor sit</div>
            <div>Body text dolor sit</div>
            <div>Body text dolor sit</div>
          </Flex>
        )}
        <Separator marginBottom="medium" marginTop="medium" />
        <Button onClick={() => setLoading(!loading)}>Toggle loading</Button>
      </>
    );
  },
};
