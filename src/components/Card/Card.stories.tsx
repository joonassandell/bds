import { Badge } from '../Badge';
import { Button } from '../Button';
import { Card } from './Card';
import { Grid, GridCol } from '../Grid';
import { Icon } from '../Icon';
import { Link } from '../Link';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Card> = {
  component: Card,
  parameters: {
    componentSubtitle:
      'Card is a component used to group and display content in a clear and concise format.',
  },
  title: 'Components/Data display/Card',
};

export default meta;

type Story = StoryObj<typeof Card>;

const CardTemplate: Story = {
  render: ({ heading, ...props }) => (
    <Grid>
      <GridCol colSpan={{ l: 4, m: 6, s: 7 }}>
        <Card heading={heading} {...props} />
      </GridCol>
    </Grid>
  ),
};

export const CardComponent: Story = {
  args: {
    ['aria-label']: 'View card heading',
    // avatar: false,
    // avatar: 'This can be string too',
    // avatar: {
    //   icon: 'beef',
    //   variant: 'primary',
    //   name: 'Model name',
    // },
    badge: {
      children: 'Member',
    },
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit optio molestias id nihil reiciendis iusto.',
    footer: {
      left: 'Updated 2 minutes ago',
      right: (
        <Link aria-hidden tabIndex={-1}>
          View
          <Icon name="arrowRight" />
        </Link>
      ),
    },
    heading: 'Card heading',
    href: '#',
    image: {
      alt: 'Alt text for card image',
      height: 360,
      src: '/card-image.png',
      width: 640,
    },
    imageLayout: {
      mode: 'fill',
    },
    // logo: {
    //   alt: 'Logo',
    //   height: '100%',
    //   src: 'https://biocode.io/wp-content/uploads/2021/11/feelia-perus.svg',
    //   // src: 'https://biocode.io/wp-content/uploads/2020/12/valio.jpg',
    //   // src: 'https://biocode.io/wp-content/uploads/2020/12/beanit.jpg',
    //   // src: 'https://biocode.io/wp-content/uploads/2020/12/hkscan.jpg',
    //   // src: 'https://biocode.io/wp-content/uploads/2021/01/KinnusenMylly-65oats-logo-rgb-01.jpeg',
    //   width: '100%',
    // },
    onClick: e => {
      e.preventDefault();
      alert('Use router and e.preventDefault() in onClick event for linking.');
      console.log(e);
    },
    subtitles: [
      { subtitle: '2020' },
      {
        subtitle: '10 986',
        subtitleSuffix: 'KG CO₂e / KG',
        subtitleSuffixCase: false,
      },
    ],
  },
  name: 'Card',
  ...CardTemplate,
};

/* =======================================
 * Donut
 * ======================================= */

export const CardDonut: Story = {
  args: {
    ...CardComponent.args,
    badge: {
      children: '2020-2022',
    },
    donut: {
      data: [
        {
          color: 'var(--b-accent-1-100)',
          id: 'rawMaterials',
          label: 'Raw materials',
          tooltip: {
            values: [
              { label: 'Carbon footprint', unit: 'kg CO₂e / kg', value: 1.72 },
              { label: 'Emissions', unit: 'kg CO₂e', value: 20301 },
            ],
          },
          value: 20,
        },
        {
          color: 'var(--b-accent-4)',
          id: 'sourcing',
          label: 'Sourcing',
          value: 20,
        },
        {
          color: 'var(--b-accent-2)',
          id: 'production',
          label: 'Production',
          value: 30,
        },
        {
          color: 'var(--b-accent-3)',
          id: 'packaging',
          label: 'Packaging',
          value: 10,
        },
        {
          color: 'var(--b-accent-5)',
          id: 'delivery',
          label: 'Delivery',
          value: 20,
        },
      ],
      digitUnit: '',
      number: 2002,
    },
    footer: {
      left: 'company.com',
      right: (
        <Link aria-hidden tabIndex={-1}>
          Profile
          <Icon name="arrowRight" />
        </Link>
      ),
    },
    heading: 'Card with donut',
  },
  name: 'Donut',
  parameters: {
    docs: {
      description: {
        story: 'Example of using Donut in Card.',
      },
    },
  },
  ...CardTemplate,
};

/* =======================================
 * Skeleton loading
 * ======================================= */

export const CardLoading: Story = {
  args: {
    ...CardComponent.args,
    footer: {
      left: <Badge variant="success">Badge</Badge>,
      right: '3 hours ago',
    },
    skeletonLoading: true,
  },
  name: 'Skeleton Loading',
  ...CardTemplate,
};

/* =======================================
 * Custom colors
 * ======================================= */

export const CardCustomColors: Story = {
  args: {
    ['aria-label']: 'New assessment',
    avatar: {
      backgroundColor: 'var(--b-bg-300)',
      borderColor: 'var(--b-border-300)',
    },
    backgroundColor: 'var(--b-bg-300)',
    border: {
      color: 'var(--b-border-300)',
      size: 'large',
      style: 'dashed',
    },
    footer: {
      right: (
        <Button icon="plus" size="xSmall">
          Create
        </Button>
      ),
    },
    heading: 'New assessment',
    href: '#',
    subtitles: [{ subtitle: 'Start assessing' }],
  },
  name: 'Custom Colors',
  ...CardTemplate,
};
