import { Icon } from '../Icon';
import { Link } from './';
import { type Meta, type StoryObj } from '@storybook/react';
import React from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Link> = {
  component: Link,
  parameters: {
    componentSubtitle:
      'Plain text link to use when navigating. Could also be used as a button.',
  },
  title: 'Components/Navigation/Link',
};

export default meta;

type Story = StoryObj<typeof Link>;

const LinkTemplate: Story = {
  render: ({ children, ...props }) => <Link {...props}>{children}</Link>,
};

export const LinkComponent: Story = {
  args: {
    children: 'Link',
    href: '#',
    onClick: e => {
      e.preventDefault();
      alert('You clicked Link');
    },
  },
  name: 'Link',
  ...LinkTemplate,
};

/* =======================================
 * Link with Icon
 * ======================================= */

export const LinkWithIcon: Story = {
  args: {
    ...LinkComponent.args,
    children: (
      <>
        Link
        <Icon name="plus" />
      </>
    ),
    size: 'large',
  },
  name: 'Link with Icon',
  parameters: {
    docs: {
      description: {
        story:
          "Add `<Icon />` before or after the link text to display an Icon. Icon is automatically resized based on the link's `size` property.",
      },
    },
  },
  ...LinkTemplate,
};

/* =======================================
 * Link as child
 * ======================================= */

export const LinkAsChild: Story = {
  args: {
    asChild: true,
    children: <button>Link as child</button>,
    onClick: () => alert("I'm button under the hood"),
  },
  name: 'As Child',
  parameters: {
    docs: {
      description: {
        story:
          'Apply `asChild` to convert Alert to a button or any other node.',
      },
    },
  },
  ...LinkTemplate,
};
