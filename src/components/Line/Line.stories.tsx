import { Line } from './';
import { LineCarbonFootprintProgress } from './LineCarbonFootprintProgress';
import { LineClimateAction } from './LineClimateAction';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Line> = {
  component: Line,
  parameters: {
    componentSubtitle: 'Line chart to display values in a X/Y-scale.',
  },
  subcomponents: {
    LineCarbonFootprintProgress,
    LineClimateAction,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Data display/Line',
};

export default meta;

type Story = StoryObj<typeof Line>;

export const LineComponent: Story = {
  args: {
    colors: ['var(--b-border-mute-900)'],
    data: [
      {
        data: [
          { x: 2021, y: 1 },
          { x: 2022, y: 0.9 },
          {
            point: {
              isActive: true,
            },
            x: 2023,
            y: 0.8,
          },
          {
            point: {
              isSuccess: true,
            },
            tooltip: {
              description: 'Lorem ipsum dolor sit amet',
              heading: 'Example heading',
            },
            x: 2035,
            y: 0,
          },
          {
            x: 2050,
            y: 0,
          },
        ],
        id: 'example',
      },
      {
        // color: 'var(--b-primary)',
        data: [
          { x: 2021, y: 1 },
          { x: 2042, y: 0.9 },
          {
            x: 2043,
            y: 0.8,
          },
          {
            x: 2045,
            y: 0,
          },
          {
            x: 2060,
            y: 0,
          },
        ],

        id: 'example2',
      },
    ],
  },
  name: 'Line',
  render: function Component({ data, ...props }) {
    return <Line data={data} {...props} />;
  },
};

/* =======================================
 * LineCarbonFootprintProgress
 * ======================================= */

export const LineCarbonFootprintProgressComponent: Story = {
  name: 'LineCarbonFootprintProgress',
  parameters: {
    docs: {
      description: {
        story: 'Use to display product carbon footprint assessments',
      },
    },
  },
  render: () => {
    const data = [
      {
        data: [
          {
            subtitle: 'Carbon footprint 2021',
            x: 2021,
            y: 2.92,
          },
          {
            subtitle: 'Carbon footprint 2022',
            x: 2022,
            y: 1.32,
          },
          {
            point: {
              isActive: true,
            },
            subtitle: 'Carbon footprint 2025',
            x: 2023,
            y: 1.22,
          },
        ],
        id: 'example',
      },
    ];
    return (
      <LineCarbonFootprintProgress
        data={data}
        target={{
          description: 'Target for product carbon footprint in 2035.',
          subtitle: 'Target by 2035',
          x: 2035,
          y: 0,
        }}
      />
    );
  },
};

/* =======================================
 * LineClimateAction
 * ======================================= */

export const LineClimateActionComponent: Story = {
  name: 'LineClimateAction',
  parameters: {
    docs: {
      description: {
        story:
          'Y-scale line for measuring heat from negative to positive. X-scale for years.',
      },
    },
  },
  render: () => {
    const data = [
      {
        data: [
          {
            point: {
              isSuccess: true,
            },
            tooltip: {
              description: 'Lorem ipsum...',
              heading: '1971',
            },
            x: 1971,
          },
          {
            point: {
              isSuccess: true,
            },
            tooltip: {
              description: 'Lorem ipsum...',
              heading: '1984',
            },
            x: 1984,
          },
          {
            point: {
              isSuccess: true,
            },
            tooltip: {
              description: 'Lorem ipsum...',
              heading: '1990',
            },
            x: 1990,
          },
          {
            point: {
              isSuccess: true,
            },
            tooltip: {
              description: 'Lorem ipsum...',
              heading: '2007',
            },
            x: 2007,
          },
          {
            point: {
              isSuccess: true,
            },
            tooltip: {
              description: 'Lorem ipsum...',
              heading: '2018',
            },
            x: 2018,
          },
          {
            point: {
              isSuccess: true,
            },
            tooltip: {
              description: 'Lorem ipsum...',
              heading: '2019',
            },
            x: 2019,
          },
          {
            point: {
              isSuccess: true,
            },
            tooltip: {
              description: 'Lorem ipsum...',
              heading: '2021',
            },
            x: 2021,
          },
          {
            point: {
              isSuccess: true,
            },
            tooltip: {
              description: 'Lorem ipsum...',
              heading: '2021',
            },
            x: 2021,
          },
        ],
        id: 'dataMultiple',
      },
    ];

    const targets = [
      //  Example of successful target in the past
      // {
      //   x: 2018,
      //   point: {
      //     isSuccess: true,
      //   },
      //   tooltip: {
      //     heading: '2020',
      //     description:
      //       "Company's operations are carbon neutral (Scope 1 + 2 emissions).",
      //   },
      // },
      {
        tooltip: {
          description:
            "Company's supply chain is carbon neutral (Scope 3 emissions).",
          heading: '2035',
        },
        x: 2035,
      },
      {
        tooltip: {
          description:
            'Emissions should be preferably cut by at least 50% by 2030 to target global warming of 1.5 degrees Celsius. Substituting higher carbon footprint products with lower carbon footprint products will help reach Paris climate goals. The sooner the better.',
          heading: '2050',
        },
        x: 2050,
      },
    ];

    return (
      <div
        style={{
          marginTop: '2rem',
        }}
      >
        <LineClimateAction
          data={data}
          startingPointText="Y-axis is a visualization of smaller emissions."
          targets={targets}
          tooltipExcerpt="See more measures below"
        />
      </div>
    );
  },
};
