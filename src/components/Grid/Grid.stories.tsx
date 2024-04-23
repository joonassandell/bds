import { Box as BoxComponent } from '../Box';
import { Grid, GridCol } from './';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Grid> = {
  component: Grid,
  parameters: {
    componentSubtitle:
      'Powerful mobile-first CSS grid to build layouts of all shapes and sizes thanks to a twelve column system. Alongside alignment, Grid is also useful for adding vertical gaps between elements.',
    docs: {
      description: {
        component: `<p>Note that by default **base**, *medium* (\`Grid.$m\`) and **large** (large; \`Grid.$l\`) breakpoints are included in the responsive variants. If you need more breakpoints, you need to include them in the SCSS config. E.g. for xLarge and small breakpoints add:</p>
      @use '@biocode/ds/scss/Grid' with (
      $s: true,
      $xl: true,
    );
        `,
      },
    },
  },
  subcomponents: {
    GridCol,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Layout/Grid',
};

export default meta;

type Story = StoryObj<typeof Grid>;

const Box = ({ ...props }) => (
  <BoxComponent
    backgroundColor="var(--b-bg-500)"
    padding="base"
    style={{
      display: 'grid',
      minHeight: '5rem',
      placeItems: 'center',
      textAlign: 'center',
    }}
    {...props}
  />
);

export const GridComponent: Story = {
  args: {
    children: [
      Array(2)
        .fill('')
        .map((_, i) => (
          <GridCol colSpan={{ base: 6, m: 3 }} key={i}>
            <Box>Mobile: 6/12 &middot; Tablet: 3/12</Box>
          </GridCol>
        )),
      Array(2)
        .fill('')
        .map((_, i) => (
          <GridCol colSpan={{ m: 3 }} key={i}>
            <Box>Mobile: 12/12 &middot; Tablet: 3/12</Box>
          </GridCol>
        )),
      Array(2)
        .fill('')
        .map((_, i) => (
          <GridCol colSpan={6} key={i}>
            <Box>6/12</Box>
          </GridCol>
        )),
      <GridCol colSpan={{ base: 4, l: 4 }} key={1}>
        <Box>Mobile, Tablet, Desktop: 4/12</Box>
      </GridCol>,
      <GridCol colSpan={{ base: 8, l: 4 }} key={2}>
        <Box>Mobile, Tablet: 8/12 &middot; Desktop: 4/12</Box>
      </GridCol>,
      <GridCol colSpan={{ l: 4 }} key={3}>
        <Box>Mobile, Tablet: 12/12 &middot; Desktop: 4/12</Box>
      </GridCol>,
      <GridCol key={4}>
        <Box>12/12</Box>
      </GridCol>,
      <GridCol colSpan={7} key={5}>
        <Box>7/12</Box>
      </GridCol>,
      <GridCol colSpan={5} key={6}>
        <Box>5/12</Box>
      </GridCol>,
    ],
  },
  name: 'Grid',
  render: function Component({ children, ...props }) {
    return <Grid {...props}>{children}</Grid>;
  },
};

/* =======================================
 * GridCol column start
 * ======================================= */

export const GridColStart: Story = {
  ...GridComponent,
  args: {
    children: [
      <GridCol colSpan={5} colStart={2} key={1}>
        <Box>5/12 &middot; Start: 2</Box>
      </GridCol>,
      <GridCol colSpan={4} colStart={9} key={2}>
        <Box>4/12 &middot; Start: 9</Box>
      </GridCol>,
    ],
  },
  name: 'GridCol Column Start',
  parameters: {
    docs: {
      description: {
        story:
          'Pass the `colStart` prop to `<GridCol colStart={...} />` component to make an element start  at the nth grid position.',
      },
    },
  },
};
