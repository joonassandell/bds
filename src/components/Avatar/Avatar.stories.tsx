import { Avatar, type AvatarProps } from './';
import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { Flex } from '../Flex';
import { MarkProducer } from '../Mark';
import React, { type FC } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  excludeStories: ['AvatarStory'],
  parameters: {
    componentSubtitle:
      'The Avatar component is mainly used to represent user, and displays the profile picture or avatar-like icon/mark, initials (possibly as fallback) and custom text below the name.',
  },
  title: 'Components/Media & Icons/Avatar',
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const AvatarComponent: Story = {
  args: {
    image: '/avatar-image.jpg',
    name: 'Forename Lastname',
    text: 'forename.lastname@biocode.io',
  },
  name: 'Avatar',
  render: ({ ...props }) => <Avatar {...props} />,
};

export const AvatarStory: FC<AvatarProps> = composeStory(AvatarComponent, meta);

/* =======================================
 * Variants
 * ======================================= */

export const AvatarVariants: Story = {
  name: 'Variants',
  parameters: {
    docs: {
      description: {
        story:
          "Examples of various Avatar variants when different properties are applied. Icons or meta content shouldn't be displayed if the size is smaller than medium size.",
      },
    },
  },
  render: () => (
    <>
      <Flex alignItems="center" flexWrap="wrap" gap="small">
        <Avatar image="/avatar-image.jpg" name="2 XLarge" size="2xLarge" />
        <Avatar image="/avatar-image.jpg" name="X Large" size="xLarge" />
        <Avatar image="/avatar-image.jpg" name="L arge" size="large" />
        <Avatar
          image="/avatar-image.jpg"
          name="Medium Large"
          size="mediumLarge"
        />
        <Avatar image="/avatar-image.jpg" name="M edium" size="medium" />
        <Avatar image="/avatar-image.jpg" name="S mall" size="small" />
        <Avatar image="/avatar-image.jpg" name="X Small" size="xSmall" />
      </Flex>
      <hr />
      <Flex alignItems="center" flexWrap="wrap" gap="small">
        <Avatar name="2 XLarge" size="2xLarge" />
        <Avatar name="X Large" size="xLarge" />
        <Avatar name="L arge" size="large" />
        <Avatar name="Medium Large" size="mediumLarge" />
        <Avatar name="M edium" size="medium" />
        <Avatar name="S mall" size="small" />
        <Avatar name="X Small" size="xSmall" />
      </Flex>
      <hr />
      <Flex alignItems="center" flexWrap="wrap" gap="small">
        <Avatar icon="seedling" size="2xLarge" />
        <Avatar icon="seedling" size="xLarge" />
        <Avatar icon="seedling" size="large" />
        <Avatar icon="seedling" size="mediumLarge" />
        <Avatar icon="seedling" size="medium" />
      </Flex>
      <hr />
      <Flex alignItems="center" flexWrap="wrap" gap="small">
        <Avatar image={<MarkProducer />} name="2 XLarge" size="2xLarge" />
        <Avatar image={<MarkProducer />} name="X Large" size="xLarge" />
        <Avatar image={<MarkProducer />} name="L arge" size="large" />
        <Avatar
          image={<MarkProducer />}
          name="Medium Large"
          size="mediumLarge"
        />
        <Avatar image={<MarkProducer />} name="M edium" size="medium" />
        <Avatar image={<MarkProducer />} name="S mall" size="small" />
        <Avatar image={<MarkProducer />} name="X Small" size="xSmall" />
      </Flex>
      <hr />
      <Flex alignItems="center" flexWrap="wrap" gap="small">
        <Avatar
          meta
          name="Forename Lastname"
          size="2xLarge"
          text="forename.lastname@biocode.io"
        />
        <Avatar
          meta
          name="Forename Lastname"
          size="xLarge"
          text="forename.lastname@biocode.io"
        />
        <Avatar
          meta
          name="Forename Lastname"
          size="large"
          text="forename.lastname@biocode.io"
        />
        <Avatar meta name="Forename Lastname" size="mediumLarge" />
        <Avatar meta name="Forename Lastname" size="medium" />
      </Flex>
      <hr />
      <Flex alignItems="center" flexWrap="wrap" gap="small">
        <Avatar name="2 XLarge" size="2xLarge" variant="primary" />
        <Avatar name="X Large" size="xLarge" variant="primary" />
        <Avatar name="L arge" size="large" variant="primary" />
        <Avatar name="Medium Large" size="mediumLarge" variant="primary" />
        <Avatar name="M edium" size="medium" variant="primary" />
        <Avatar name="S mall" size="small" variant="primary" />
        <Avatar name="X Small" size="xSmall" variant="primary" />
      </Flex>
      <hr />
      <Flex alignItems="center" flexWrap="wrap" gap="small">
        <Avatar name="2 XLarge" size="2xLarge" variant="secondary" />
        <Avatar name="X Large" size="xLarge" variant="secondary" />
        <Avatar name="L arge" size="large" variant="secondary" />
        <Avatar name="Medium Large" size="mediumLarge" variant="secondary" />
        <Avatar name="M edium" size="medium" variant="secondary" />
        <Avatar name="S mall" size="small" variant="secondary" />
        <Avatar name="X Small" size="xSmall" variant="secondary" />
      </Flex>
    </>
  ),
};
