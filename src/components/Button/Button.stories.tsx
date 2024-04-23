import { Button, ButtonBlockToggle, Buttons } from './';
import { MarkProduct } from '../Mark';
import { type Meta, type StoryObj } from '@storybook/react';
import React, { useEffect, useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    componentSubtitle:
      'Button component is used to trigger an action or event, such as submitting a form, ohelping a Dialog, canceling an action, or performing a delete operation. Button can also be used as a link.',
    docs: {
      description: {
        component:
          '**Button needs to be refactored: make it composable, isolate justify="block" as IconButton etc.**',
      },
    },
  },
  subcomponents: {
    ButtonBlockToggle,
    Buttons,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Forms/Button',
};

export default meta;

type Story = StoryObj<typeof Button>;

export const ButtonComponent: Story = {
  args: {
    children: 'Button',
    onClick: () => console.log('Button click'),
  },
  name: 'Button',
  render: function Component({ children, ...props }) {
    return <Button {...props}>{children}</Button>;
  },
};

/* =======================================
 * Variants
 * ======================================= */

export const ButtonVariants: Story = {
  name: 'Variants',
  parameters: {
    docs: {
      description: {
        story:
          'Various Button variants. If you need to align multiple buttons, wrap each button element with `<Buttons />`',
      },
    },
  },
  render: () => {
    const Variants = ({ ...props }) => (
      <Buttons>
        <Button {...props}>Default</Button>
        <Button icon="help" {...props}>
          Icon
        </Button>
        <Button iconLeft="plus" {...props}>
          Icon left
        </Button>
        <Button active {...props}>
          Active
        </Button>
        <Button disabled {...props}>
          Disabled
        </Button>
        <Button image={<MarkProduct />} {...props}>
          Mark
        </Button>
        <Button image="/avatar-image.jpg" {...props}>
          Image
        </Button>
        <Button textStyle="subtitle" {...props}>
          Subtitle
        </Button>
        <Button variant="secondary" {...props}>
          Secondary
        </Button>
        <Button icon="help" variant="secondary" {...props}>
          Icon
        </Button>
        <Button iconLeft="plus" variant="secondary" {...props}>
          Icon left
        </Button>
        <Button active variant="secondary" {...props}>
          Active
        </Button>
        <Button disabled variant="secondary" {...props}>
          Disabled
        </Button>
        <Button variant="plain" {...props}>
          Plain
        </Button>
        <Button icon="help" variant="plain" {...props}>
          Icon
        </Button>
        <Button iconLeft="plus" variant="plain" {...props}>
          Icon left
        </Button>
        <Button active variant="plain" {...props}>
          Active
        </Button>
        <Button disabled variant="plain" {...props}>
          Disabled
        </Button>
        <Button variant="primary" {...props}>
          Primary
        </Button>
        <Button active variant="primary" {...props}>
          Active
        </Button>
        <Button disabled variant="primary" {...props}>
          Disabled
        </Button>
        <Button icon="help" justify="block" {...props}>
          Justify block
        </Button>
        <Button active icon="help" justify="block" {...props}>
          Active
        </Button>
        <Button icon="help" justify="block" variant="secondary" {...props}>
          Secondary
        </Button>
        <Button
          active
          icon="help"
          justify="block"
          variant="secondary"
          {...props}
        >
          Active
        </Button>
        <Button icon="help" justify="block" variant="plain" {...props}>
          Plain
        </Button>
        <Button active icon="help" justify="block" variant="plain" {...props}>
          Active
        </Button>
        <Button icon="help" justify="block" variant="primary" {...props}>
          Primary
        </Button>
        <Button active icon="help" justify="block" variant="primary" {...props}>
          Active
        </Button>
        <Button icon="pen" justify="block" loading {...props}>
          Justify block loading
        </Button>
        <Button
          icon="pen"
          justify="block"
          loading
          variant="secondary"
          {...props}
        >
          Secondary
        </Button>
        <Button icon="pen" justify="block" loading variant="plain" {...props}>
          Plain
        </Button>
        <Button icon="pen" justify="block" loading variant="primary" {...props}>
          Primary
        </Button>
        <Button loading {...props}>
          Loading
        </Button>
        <Button loading variant="secondary" {...props}>
          Loading
        </Button>
        <Button loading variant="primary" {...props}>
          Loading
        </Button>
        <Button variant="success" {...props}>
          Success
        </Button>
        <Button disabled variant="success" {...props}>
          Disabled
        </Button>
        <Button loading variant="success" {...props}>
          Loading
        </Button>
        <Button justify="block" loading variant="success" {...props}>
          Justify block Loading
        </Button>
        <Button variant="warning" {...props}>
          Warning
        </Button>
        <Button disabled variant="warning" {...props}>
          Disabled
        </Button>
        <Button loading variant="warning" {...props}>
          Loading
        </Button>
        <Button justify="block" loading variant="warning" {...props}>
          Justify block Loading
        </Button>
        <Button variant="error" {...props}>
          Error
        </Button>
        <Button disabled variant="error" {...props}>
          Disabled
        </Button>
        <Button loading variant="error" {...props}>
          Loading
        </Button>
        <Button justify="block" loading variant="error" {...props}>
          Justify block Loading
        </Button>
      </Buttons>
    );

    return (
      <>
        <Variants />
        <hr />
        <Variants size="medium" />
        <hr />
        <Variants size="xSmall" />
      </>
    );
  },
};

/* =======================================
 * Loading
 * ======================================= */

export const ButtonLoading: Story = {
  args: {},
  name: 'Loading',
  parameters: {
    docs: {
      description: {
        story: 'Set `loading` to `true` for loading animation.',
      },
    },
  },
  render: function Component({ ...props }) {
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
      if (isLoading) setTimeout(() => setLoading(false), 2000);
    }, [isLoading]);

    return (
      <Button
        loading={isLoading}
        onClick={() => setLoading(!isLoading)}
        {...props}
      >
        Button
      </Button>
    );
  },
};

/* =======================================
 * ButtonBlockToggle
 * ======================================= */

export const ButtonBlockToggleComponent: Story = {
  args: {},
  name: 'ButtonBlockToggle',
  parameters: {
    docs: {
      description: {
        story:
          'Click the button block to see the arrow rotating. Currently `help` is the only icon animating when `iconActive` is `true` or `false`.',
      },
    },
  },
  render: props => (
    <ButtonBlockToggle onClick={e => console.log(e)} {...props} />
  ),
};
