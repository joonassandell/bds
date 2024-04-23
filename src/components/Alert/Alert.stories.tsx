import {
  Alert,
  AlertBadge,
  AlertButton,
  AlertContent,
  AlertIcon,
  type AlertProps,
  AlertText,
} from './';
import { Button } from '../Button';
import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import React, { type FC, useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Alert> = {
  component: Alert,
  excludeStories: ['AlertVariantsStory'],
  parameters: {
    componentSubtitle:
      'Alerts are used to communicate a state that affects a system, feature or page. By default Alert has `neutral` variant. Make sure that the variant matches the message.',
  },
  subcomponents: {
    AlertBadge,
    AlertButton,
    AlertContent,
    AlertIcon,
    AlertText,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Feedback/Alert',
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const AlertComponent: Story = {
  args: {
    children: (
      <>
        This is alert text, make sure that the variant matches the message{' '}
        <a href="#">content</a>.
      </>
    ),
  },
  name: 'Alert',
  render: function Component({ children, ...props }) {
    return (
      <Alert {...props}>
        <AlertIcon />
        <AlertContent>
          <AlertText>{children}</AlertText>
        </AlertContent>
      </Alert>
    );
  },
};

/* =======================================
 * Variants
 * ======================================= */

export const AlertVariants: Story = {
  args: {},
  name: 'Variants',
  parameters: {
    docs: {
      description: {
        story: 'Various Alert variants',
      },
    },
  },
  render: ({ ...props }) => (
    <Flex flexDirection="column">
      <Alert {...props} variant="neutral">
        <AlertIcon />
        <AlertContent>
          <AlertText>
            Update notice for changes in our <a href="#">Legal agreements</a>.
          </AlertText>
        </AlertContent>
      </Alert>
      <Alert {...props} variant="info">
        <AlertIcon />
        <AlertContent>
          <AlertText>
            We've updated your plan. <a href="#">Learn more</a>.
          </AlertText>
        </AlertContent>
      </Alert>
      <Alert {...props} variant="success">
        <AlertIcon />
        <AlertContent>
          <AlertText>
            Your assessment has been calculated successfully.{' '}
            <a href="#">View calculation</a>.
          </AlertText>
        </AlertContent>
      </Alert>
      <Alert {...props} variant="warning">
        <AlertIcon />
        <AlertContent>
          <AlertText>
            This data significantly alters from the{' '}
            <a href="#">expected values</a>.
          </AlertText>
        </AlertContent>
      </Alert>
      <Alert {...props} variant="error">
        <AlertIcon />
        <AlertContent>
          <AlertText>
            We're experiencing an incident. Please see our{' '}
            <a href="#">status page</a> for more details.
          </AlertText>
        </AlertContent>
      </Alert>
      <Alert {...props} variant="highlight">
        <AlertIcon />
        <AlertContent>
          <AlertText>
            Tip: Did you know that you can also add multiple raw materials to{' '}
            <a href="#">your calculation</a>?
          </AlertText>
        </AlertContent>
      </Alert>
    </Flex>
  ),
};

export const AlertVariantsStory: FC<AlertProps> = composeStory(
  AlertVariants,
  meta,
);

/* =======================================
 * With Button
 * ======================================= */

export const AlertWithButton: Story = {
  name: 'With Button',
  parameters: {
    docs: {
      description: {
        story:
          'Apply `<AlertButton />` to include button inside the Alert. Button variants are automatically applied but can be overridden if needed.',
      },
    },
  },
  render: ({ ...props }) => (
    <Flex flexDirection="column">
      <Alert {...props}>
        <AlertIcon />
        <AlertContent>
          <AlertText>
            This is alert text, make sure that the variant matches the message
            content.
          </AlertText>
        </AlertContent>
        <AlertButton onClick={() => console.log("I'm AlertButton")}>
          Button
        </AlertButton>
      </Alert>
    </Flex>
  ),
};

/* =======================================
 * With Badge and link
 * ======================================= */

export const AlertWithBadgeLinkIcon: Story = {
  args: {
    asChild: true,
    size: 'small',
  },
  name: 'With Badge, Link and Icon',
  parameters: {
    docs: {
      description: {
        story:
          'Use Alert as "teaser" to display blog posts etc. Apply `<AlertBadge />` and `<Icon />` to apply custom icon. Apply `asChild` to convert Alert to a link, button or any other node.',
      },
    },
  },
  render: ({ ...props }) => (
    <Alert {...props}>
      <a href="#">
        <AlertBadge variant="info">New</AlertBadge>
        <AlertContent>
          <AlertText truncate>
            This is default small alert with AlertBadge, inner Icon and
            truncated AlertText set as link with asChild lorem ipsum, dolor sit
            amet consectetur adipisicing elit excepturi eum odio.
          </AlertText>
          <Icon name="arrowRight" size="xSmall" />
        </AlertContent>
      </a>
    </Alert>
  ),
};

/* =======================================
 * With animation
 * ======================================= */

export const AlertWithAnimation: Story = {
  name: 'Shake Animation',
  render: function Component() {
    const [shake, setShake] = useState(false);

    return (
      <>
        <Alert
          animate={shake}
          onAnimationComplete={() => setShake(false)}
          variant="error"
        >
          <AlertIcon />
          <AlertContent>
            <AlertText>Invalid login</AlertText>
          </AlertContent>
        </Alert>
        <Button marginTop="medium" onClick={() => setShake(true)}>
          Submit
        </Button>
      </>
    );
  },
};
