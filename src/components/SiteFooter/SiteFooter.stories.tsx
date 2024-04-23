import { Box } from '../Box';
import { Flex } from '../Flex';
import { type Meta, type StoryObj } from '@storybook/react';
import { SiteFooter } from './';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof SiteFooter> = {
  component: SiteFooter,
  parameters: {
    componentSubtitle:
      'Footer to be shared in our marketing services such as Website and Reporting.',
    layout: 'fullscreen',
  },
  title: 'Components/Layout/SiteFooter',
};

export default meta;

type Story = StoryObj<typeof SiteFooter>;

export const SiteFooterComponent: Story = {
  args: {
    navigation: [
      {
        href: '#',
        items: [
          { href: '#', text: 'How it works' },
          { href: '#', text: "Who it's for" },
          { href: '#', text: 'Pricing' },
        ],
        text: 'Product',
      },
      {
        href: '#',
        items: [
          { href: '#', text: 'About us' },
          { href: '#', text: 'Customers' },
          { href: '#', text: 'News' },
          { href: '#', text: 'Contact us' },
          { href: '#', text: 'Privacy policy' },
        ],
        text: 'Company',
      },
      {
        href: '#',
        items: [
          { href: '#', text: 'Articles' },
          { href: '#', text: 'Customer stories' },
          { href: '#', text: 'FAQ' },
        ],
        text: 'Learn',
      },
    ],
  },
  name: 'SiteFooter',
  render: ({ navigation, ...props }) => (
    <Box asChild backgroundColor="var(--b-bg-50)" height="100vh">
      <Flex flexDirection="column" gap={0} justifyContent="space-between">
        <span />
        <SiteFooter navigation={navigation} {...props} />
      </Flex>
    </Box>
  ),
};
