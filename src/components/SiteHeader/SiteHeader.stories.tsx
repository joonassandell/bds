import { Box } from '../Box';
import { type Meta, type StoryObj } from '@storybook/react';
import { SiteHeader } from './';
import { TextStory } from '../Text/Text.stories';
import { Wrap } from '../Wrap';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof SiteHeader> = {
  component: SiteHeader,
  parameters: {
    componentSubtitle:
      'Header to be shared in our marketing services such as Website and Reporting.',
    docs: {
      description: {
        component:
          "Note that SiteHeader doesn't work properly in Storybook's docs view since it's missing the fixed positioning.",
      },
    },
    layout: 'fullscreen',
  },
  title: 'Components/Layout/SiteHeader',
};

export default meta;

type Story = StoryObj<typeof SiteHeader>;

export const SiteHeaderComponent: Story = {
  args: {
    languageItems: [
      { language: 'en', name: 'In English' },
      { language: 'fi', name: 'Suomeksi' },
    ].map(value => ({
      href: `/#${value.language}`,
      text: value.name,
    })),
    navigation: [
      { active: false, href: '#', text: 'Product' },
      {
        href: '#',
        items: [
          {
            description:
              'Make carbon footprint visible to customers, suppliers and the whole world',
            href: '#',
            mark: 'product',
            text: 'Food brands & products',
          },
          {
            description:
              'Produce more responsible food with field-plot specific calculations and carbon removals',
            href: '#',
            mark: 'producer',
            text: 'Producers & farmers',
          },
          {
            description:
              'Visualise, communicate and report your responsibility reliably and accurately',
            href: '#',
            mark: 'report',
            text: 'Reporting',
          },
        ],
        text: "Who it's for",
      },
      { href: '#', text: 'Pricing' },
      {
        href: '#',
        items: [
          {
            href: '#',
            text: 'Articles',
          },
          {
            href: '#',
            text: 'Customer stories',
          },
          {
            href: '#',
            text: 'Questions & answers',
          },
          {
            href: '#',
            target: '_blank',
            text: 'Help centre',
          },
        ],
        text: 'Learn',
      },
    ],
  },
  name: 'SiteHeader',
  render: ({ navigation, ...props }) => (
    <Box backgroundColor="var(--b-bg-50)" minHeight="100vh">
      <SiteHeader navigation={navigation} {...props} />
      <Wrap>
        <Box marginBottom="xLarge" marginTop="xLarge">
          <TextStory />
        </Box>
      </Wrap>
    </Box>
  ),
};
