import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMain,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './';
import { Badge } from '../Badge';
import { Button, Buttons } from '../Button';
import { Flex } from '../Flex';
import { Media } from '../Media';
import { Menu, MenuContent, MenuItem, MenuText, MenuTrigger } from '../Menu';
import { type Meta, type StoryObj } from '@storybook/react';
import React, { useEffect, useRef, useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog,
  parameters: {
    componentSubtitle:
      'A modal dialog that interrupts the user with important content and expects a response',
    docs: {
      description: {
        component:
          'This component uses `@radix-ui/react-alert-dialog` under the hood. View <a href="https://www.radix-ui.com/docs/primitives/components/alert-dialog" target="_blank">@radix-ui/react-alert-dialog</a> for additional properties and information.',
      },
    },
  },
  subcomponents: {
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogMain,
    AlertDialogTitle,
    AlertDialogTrigger,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Overlay/AlertDialog',
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const AlertDialogComponent: Story & any = {
  args: {},
  name: 'AlertDialog',
  render: function Component({ ...props }) {
    const [open, setOpen] = useState(false);

    return (
      <AlertDialog
        onOpenChange={props.setOpen ?? setOpen}
        open={props.open ?? open}
        {...props}
      >
        {props.triggerRef === undefined && (
          <AlertDialogTrigger asChild>
            {props.triggerComponent ?? <Button>Open alert dialog</Button>}
          </AlertDialogTrigger>
        )}
        <AlertDialogMain>
          <AlertDialogHeader>
            <Badge variant="error">Alert Dialog</Badge>
          </AlertDialogHeader>
          <AlertDialogContent>
            <AlertDialogTitle>Warning!</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              assessment and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogContent>
          <AlertDialogFooter>
            <Flex alignItems="center" justifyContent="space-between">
              <Media asChild greaterThanOrEqual="s">
                <Badge>Crop model 2022</Badge>
              </Media>
              <Buttons justifyContent="end">
                <AlertDialogCancel asChild>
                  <Button variant="plain">Cancel</Button>
                </AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button variant="error">Delete</Button>
                </AlertDialogAction>
              </Buttons>
            </Flex>
          </AlertDialogFooter>
        </AlertDialogMain>
      </AlertDialog>
    );
  },
};

/* =======================================
 * Trigger outside root component (outside context)
 * ======================================= */

export const AlertDialogTriggerOutsideContext: Story = {
  args: {},
  name: 'Trigger Outside Context',
  parameters: {
    docs: {
      description: {
        story:
          'If `AlertDialogTrigger` is used outside the `AlertDialog` component: add `id`, `dialogId`, `triggerRef` and `open` props to `<AlertDialog id="unique-alert-dialog-id" triggerRef={ref} open={open} />` and to `<AlertDialogTrigger dialogId="unique-alert-dialog-id" triggerRef={ref} open={open} />` with `useRef`. This makes sure that triggers are focused after the dialog is closed and the triggers have their intended functionalities.',
      },
    },
  },
  render: function Component() {
    const [open, setOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>();

    return (
      <>
        <Flex gap="small">
          <AlertDialogTrigger
            alertDialogId="unique-alert-dialog-id"
            asChild
            onClick={() => setOpen(!open)}
            open={open}
            triggerRef={triggerRef}
          >
            <Button>Trigger</Button>
          </AlertDialogTrigger>
          <Menu onOpenChange={setMenuOpen} open={menuOpen}>
            <MenuTrigger asChild>
              <Button icon="arrowDown">Actions</Button>
            </MenuTrigger>
            <MenuContent>
              <AlertDialogTrigger
                alertDialogId="unique-alert-dialog-id"
                asChild
                onClick={() => setOpen(!open)}
                open={open}
                triggerRef={triggerRef}
              >
                <MenuItem>
                  <MenuText>Trigger in menu</MenuText>
                </MenuItem>
              </AlertDialogTrigger>
            </MenuContent>
          </Menu>
        </Flex>
        <AlertDialog
          id="unique-alert-dialog-id"
          onOpenChange={setOpen}
          open={open}
          triggerRef={triggerRef}
        >
          <AlertDialogMain>
            <AlertDialogHeader>
              <AlertDialogTitle asChild>
                <Badge variant="info">Assessment type change</Badge>
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogContent>
              <AlertDialogDescription>
                Note that you are about to change <strong>Draft name</strong> to
                an official assessment. This means your current official
                assessment will be changed to a draft.
              </AlertDialogDescription>
            </AlertDialogContent>
            <AlertDialogFooter>
              <Buttons justifyContent="end">
                <AlertDialogCancel asChild>
                  <Button variant="plain">Cancel</Button>
                </AlertDialogCancel>
                <AlertDialogAction asChild>
                  <Button variant="primary">Confirm</Button>
                </AlertDialogAction>
              </Buttons>
            </AlertDialogFooter>
          </AlertDialogMain>
        </AlertDialog>
      </>
    );
  },
};

/* =======================================
 * Disable closing
 * ======================================= */

export const AlertDialogDisableClosing: Story = {
  args: {},
  name: 'Disable Closing',
  parameters: {
    docs: {
      description: {
        story:
          'Apply `e.preventDefault()` to AlertDialogAction (or its child if using `asChild`) to prevent any of the close actions (ESC key, `DialogClose`, overlay) running. This is useful if dialog needs to be open e.g. during an async request.',
      },
    },
  },
  render: function Component() {
    const [open, setOpen] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setSubmitting(false);
      }, 3000);
      () => {
        clearTimeout(timer);
      };
    }, [submitting]);

    return (
      <AlertDialog
        onOpenChange={bool => {
          if (!submitting) setOpen(bool);
        }}
        open={open}
      >
        <AlertDialogTrigger asChild>
          <Button>Open alert dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogMain>
          <AlertDialogHeader>
            <AlertDialogTitle asChild>
              <Badge variant="info">Assessment type change</Badge>
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogContent>
            <AlertDialogDescription>
              Note that you are about to change <strong>Draft name</strong> to
              an official assessment. This means your current official
              assessment will be changed to a draft.
            </AlertDialogDescription>
          </AlertDialogContent>
          <AlertDialogFooter>
            <Buttons justifyContent="end">
              <AlertDialogCancel asChild>
                <Button variant="plain">Cancel</Button>
              </AlertDialogCancel>
              <AlertDialogAction asChild>
                <Button
                  loading={submitting}
                  onClick={e => {
                    e.preventDefault();
                    setSubmitting(true);
                  }}
                  variant="primary"
                >
                  Confirm
                </Button>
              </AlertDialogAction>
            </Buttons>
          </AlertDialogFooter>
        </AlertDialogMain>
      </AlertDialog>
    );
  },
};
