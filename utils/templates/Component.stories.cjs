/* eslint-disable */
module.exports = componentName => ({
  content: `import { type Meta, type StoryObj } from '@storybook/react';
import { ${componentName} } from './';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof ${componentName}> = {
  component: ${componentName},
  parameters: {
    componentSubtitle: 'Useful subtitle for ${componentName}',
    docs: {
      description: {
        component: 'Useful description for ${componentName}.',
      },
    },
  },
  // Uncomment below if the component is using subcomponents.
  // Please, remember to remove all the boilerplate comments.
  // subcomponents: {
  //   ${componentName}SubComponent,
  // } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/AddToSuitableCategory/${componentName}',
};

export default meta;

type Story = StoryObj<typeof ${componentName}>;

export const ${componentName}Component: Story = {
  args: {
    children: 'Foo bar...',
  },
  name: '${componentName}',
  render: function Component({ children, ...props }) {
    return <${componentName} {...props}>{children}</${componentName}>;
  },
};

/* =======================================
 * ${componentName}: Example
 * ======================================= */

// Please, remember to remove all the boilerplate comments.

// You can bind the story to use the template above...
// export const ${componentName}Example: Story = {
//   args: {
//     children: 'Example foo bar...',
//     variant: 'foo',
//   },
//   name: '${componentName} Example',
//   parameters: {
//     docs: {
//       description: {
//         story: 'Description of the component',
//       },
//     },
//   },
//   ...${componentName}Component,
// };

// ...or create a new story without using the template.
// export const ${componentName}Example: Story = {
//   args: {
//     children: 'Example foo bar...',
//   },
//   name: '${componentName} Example',
//   parameters: {
//     docs: {
//       description: {
//         story: 'Description of the component',
//       },
//     },
//   },
//   render: function Component({ children, ...props }) {
//     return <${componentName} {...props}>{children}</${componentName}>;
//   },
// };

`,
  extension: `.stories.tsx`,
});
