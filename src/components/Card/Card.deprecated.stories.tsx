import { Button } from '../Button';
import { CardPrimary } from './CardPrimary';
import { Grid, GridCol } from '../Grid';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof CardPrimary> = {
  component: CardPrimary,
  title: 'Components/Deprecated/CardPrimary',
};

export default meta;

type Story = StoryObj<typeof CardPrimary>;

const CardPrimaryTemplate: Story = {
  render: ({ heading, children, ...props }) => (
    <Grid>
      <GridCol colSpan={{ m: 6 }}>
        <CardPrimary heading={heading} {...props}>
          {children}
        </CardPrimary>
      </GridCol>
    </Grid>
  ),
};

export const CardPrimaryComponent: Story = {
  args: {
    badge: {
      children: 'Founder',
    },
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa alias
        totam nam maiores mollitia voluptate ullam, similique pariatur non
        soluta commodi dicta est praesentium in numquam, architecto nesciunt
        assumenda quae.
      </p>
    ),
    heading:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa alias totam nam maiores mollitia voluptate ullam',
    headingResult: 1.2,
    headingSize: 'h3',
    size: 'small',
    subtitles: [
      { subtitle: '2020' },
      {
        subtitle: '10 986',
        subtitleSuffix: 'KG CO₂e / KG',
        subtitleSuffixCase: false,
      },
    ],
    toolbarButtons: [
      <Button key="1" size="small" variant="secondary">
        Button
      </Button>,
      <Button key="2" size="small" variant="secondary">
        Button
      </Button>,
    ],
  },
  name: 'CardPrimary',
  ...CardPrimaryTemplate,
};
