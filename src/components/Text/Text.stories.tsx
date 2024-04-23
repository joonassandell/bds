import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { Flex } from '../Flex';
import { Heading } from '../Heading';
import { Icon } from '../Icon';
import { Subtitle } from '../Subtitle';
import { Text, type TextProps } from './';
import React, { type FC } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Text> = {
  component: Text,
  excludeStories: ['TextStory'],
  parameters: {
    componentSubtitle: 'Text is a component for adding basic text contents',
    docs: {
      description: {
        component:
          '**Remember to write valid html.** Add paragraphs and other elements  `<p />` `<ul />` `<hr />`, `<h1 />` etc. as content. By default the text size is the root font size (medium). Text handles basic margins and spacings for `<Heading />` and for plain elements (`<h1 />`, `<p />` etc.).',
      },
    },
  },
  title: 'Components/Typography/Text',
};

export default meta;

type Story = StoryObj<typeof Text>;

export const TextComponent: Story = {
  args: {
    children: (
      <>
        <Heading size="h1">
          Biocode — Carbon footprint calculator that makes sense (h1)
        </Heading>
        <Text size="large">
          <p>
            Large text dolor sit amet <u>consectetur</u> adipisicing elit.
            Eveniet architecto corporis modi <Icon name="help" size="small" />{' '}
            adipisci
            <strong>ratione qui</strong> quaerat eum obcaecati fuga suscipit
            esse necessitatibus <a href="#">Nesciunt</a> temporibus facere{' '}
            <em>voluptate reiciendis</em> impedit nostrum.
          </p>
        </Text>
        <Heading size="h2">
          Biocode — Carbon footprint calculator that makes sense (h2)
        </Heading>
        <p>
          Lorem ipsum dolor sit amet <u>consectetur</u> adipisicing elit.
          Eveniet architecto corporis modi <Icon name="help" size="xSmall" />{' '}
          adipisci
          <strong>ratione qui</strong> quaerat eum obcaecati fuga suscipit esse
          necessitatibus <a href="#">Nesciunt</a> temporibus facere{' '}
          <em>voluptate reiciendis</em> impedit nostrum.
        </p>
        <Heading size="h3">
          Biocode — Carbon footprint calculator that makes sense (h3)
        </Heading>
        <p>
          Lorem ipsum dolor sit amet <u>consectetur</u> adipisicing elit.
          Eveniet architecto corporis modi <Icon name="help" size="xSmall" />{' '}
          adipisci
          <strong>ratione qui</strong> quaerat eum obcaecati fuga suscipit esse
          necessitatibus <a href="#">Nesciunt</a> temporibus facere{' '}
          <em>voluptate reiciendis</em> impedit nostrum.
        </p>
        <Heading size="h4">
          Biocode — Carbon footprint calculator that makes sense (h4)
        </Heading>
        <p>
          Lorem ipsum dolor sit amet <u>consectetur</u> adipisicing elit.
          Eveniet architecto corporis modi <Icon name="help" size="xSmall" />{' '}
          adipisci
          <strong>ratione qui</strong> quaerat eum obcaecati fuga suscipit esse
          necessitatibus <a href="#">Nesciunt</a> temporibus facere{' '}
          <em>voluptate reiciendis</em> impedit nostrum.
        </p>
        <Heading size="h5">
          Biocode — Carbon footprint calculator that makes sense (h5)
        </Heading>
        <p>
          Lorem ipsum dolor sit amet <u>consectetur</u> adipisicing elit.
          Eveniet architecto corporis modi <Icon name="help" size="xSmall" />{' '}
          adipisci
          <strong>ratione qui</strong> quaerat eum obcaecati fuga suscipit esse
          necessitatibus <a href="#">Nesciunt</a> temporibus facere{' '}
          <em>voluptate reiciendis</em> impedit nostrum.
        </p>
        <Heading size="h6">
          Biocode — Carbon footprint calculator that makes sense (h6)
        </Heading>
        <p>
          Lorem ipsum dolor sit amet <u>consectetur</u> adipisicing elit.
          Eveniet architecto corporis modi <Icon name="help" size="xSmall" />{' '}
          adipisci
          <strong>ratione qui</strong> quaerat eum obcaecati fuga suscipit esse
          necessitatibus <a href="#">Nesciunt</a> temporibus facere{' '}
          <em>voluptate reiciendis</em> impedit nostrum.
        </p>
        <hr />
        <Subtitle color="strong" subtitle="Subtitle" />
        <ul>
          <li>
            List item lorem ipsum dolor sit amet consectetur adipisicing elit
          </li>
          <li>
            List item lorem ipsum dolor sit amet consectetur adipisicing elit
          </li>
          <li>
            List item lorem ipsum dolor sit amet consectetur adipisicing elit
          </li>
        </ul>
        <ol>
          <li>
            List item lorem ipsum dolor sit amet consectetur adipisicing elit
          </li>
          <li>
            List item lorem ipsum dolor sit amet consectetur adipisicing elit
          </li>
          <li>
            List item lorem ipsum dolor sit amet consectetur adipisicing elit
          </li>
        </ol>
        <hr />
        <Flex flexWrap="wrap" gap="small">
          <Text color="neutral">
            Neutral text with <a href="#">link</a>
          </Text>
          <Text color="light">
            Light text with <a href="#">link</a>
          </Text>
          <Text color="light" colorAccent="highlight">
            Light text with <a href="#">link accent</a>
          </Text>
          <Text color="info">
            Info text with <a href="#">link</a>
          </Text>
          <Text color="error">
            Error text with <a href="#">link</a>
          </Text>
          <Text color="success">
            Success text with <a href="#">link</a>
          </Text>
          <Text color="warning">
            Warning text with <a href="#">link</a>
          </Text>
          <Text color="highlight">
            Highlight text with <a href="#">link</a>
          </Text>
        </Flex>
      </>
    ),
  },
  name: 'Text',
  render: function Component({ children, ...props }) {
    return (
      <Text
        {...props}
        style={{ margin: '0 auto', maxWidth: 'calc(var(--b-space) * 36)' }}
      >
        {children}
      </Text>
    );
  },
};

export const TextStory: FC<TextProps> = composeStory(TextComponent, meta);
