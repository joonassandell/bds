import { Badge } from '../Badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from './';
import { Button, Buttons } from '../Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogMain,
  DialogTitle,
  DialogTrigger,
} from '../Dialog';
import { Flex } from '../Flex';
import { type Meta, type StoryObj } from '@storybook/react';
import React, { useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Breadcrumb> = {
  component: Breadcrumb,
  parameters: {
    componentSubtitle:
      'A set of items that can be used as navigation trail, process, etc.',
    docs: {
      description: {
        component:
          'Each breadcrumb item has a preset maximum width; if item is truncated, Tooltip is used to display the item text.',
      },
    },
  },
  subcomponents: {
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Navigation/Breadcrumb',
};

export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const BreadcrumbComponent: Story = {
  args: {
    children: (
      <>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Breadcrumb link</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Hidden breadcrumb item link</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Breadcrumb link</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <a href="#as-child">Breadcrumb link as child</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>Current page</BreadcrumbItem>
      </>
    ),
  },
  name: 'Breadcrumb',
  render: function Component({ children, ...props }) {
    return <Breadcrumb {...props}>{children}</Breadcrumb>;
  },
};

/* =======================================
 * With Badge
 * =======================================
 *
 * Note that the tooltips don't work with badges currently
 */

export const BreadcrumbWithBadge: Story & any = {
  args: {
    ariaLabel: 'Current assessment path',
    badges: [
      'Badge A',
      'Assessment A',
      'Some long text that should be hidden',
      'Badge B',
      'Badge C',
      'Badge D',
    ],
    mode: 'decorative',
  },
  name: 'With Badge',
  parameters: {
    docs: {
      description: {
        story:
          'You can use Badge as children of BreadcrumbItem to use the Breadcrumb as a visualisation of current page for example in Dialogs. Apply `presentation` mode in this case.',
      },
    },
  },
  render: function Component({ badges, ...props }) {
    const [open, setOpen] = useState(false);

    return (
      <Dialog closeAriaLabel="Close" onOpenChange={setOpen} open={open}>
        <DialogTrigger asChild>
          <Button icon="plus">New Assessment</Button>
        </DialogTrigger>
        <DialogMain>
          <DialogHeader>
            <DialogTitle asChild>
              <Badge variant="info">Dialog title</Badge>
            </DialogTitle>
          </DialogHeader>
          <DialogContent>
            <DialogDescription>
              You are about to request verification for your assessment. During
              the verification process your accessment will be locked. We will
              contct you once our experts have completed the verification.
            </DialogDescription>
            <Breadcrumb marginTop="base" {...props}>
              {badges.map((badge: string | number, index: number) =>
                index === badges.length - 1 ? (
                  <BreadcrumbItem key={index}>
                    <Badge>{badge}</Badge>
                  </BreadcrumbItem>
                ) : (
                  <React.Fragment key={index}>
                    <BreadcrumbItem>
                      <Badge>{badge}</Badge>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </React.Fragment>
                ),
              )}
            </Breadcrumb>
          </DialogContent>
          <DialogFooter>
            <Flex justifyItems="space-between">
              <Buttons justifyContent="end" width="100%">
                <DialogClose asChild>
                  <Button variant="plain">Cancel</Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button variant="primary">Confirm</Button>
                </DialogClose>
              </Buttons>
            </Flex>
          </DialogFooter>
        </DialogMain>
      </Dialog>
    );
  },
};
