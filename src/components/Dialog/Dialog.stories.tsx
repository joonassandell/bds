import { Alert } from '../Alert';
import { Badge } from '../Badge';
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
} from './';
import { Flex } from '../Flex';
import { Grid, GridCol } from '../Grid';
import { HeadingInput } from '../HeadingInput';
import { Media } from '../Media';
import { Menu, MenuContent, MenuItem, MenuText, MenuTrigger } from '../Menu';
import { type Meta, type StoryObj } from '@storybook/react';
import { Select } from '../Select';
import { Textarea } from '../Textarea';
import React, { useRef, useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  parameters: {
    componentSubtitle:
      'A window overlaid on either the primary window or another dialog window, rendering the content underneath inert.',
    docs: {
      description: {
        component:
          'This component uses `@radix-ui/react-dialog` under the hood. View <a href="https://www.radix-ui.com/docs/primitives/components/dialog" target="_blank">@radix-ui/react-dialog</a> for additional properties and information.',
      },
    },
  },
  subcomponents: {
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogMain,
    DialogTitle,
    DialogTrigger,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Overlay/Dialog',
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const DialogComponent: Story & any = {
  args: {},
  name: 'Dialog',
  render: function Component({ ...props }) {
    const [open, setOpen] = useState(false);
    const [assessmentType, setAssessmentType] = useState({
      label: 'Draft',
      value: 'draft',
    });

    return (
      <Dialog
        aria-describedby={undefined}
        closeAriaLabel="Close"
        onOpenChange={props.setOpen ?? setOpen}
        open={props.open ?? open}
        {...props}
      >
        <DialogTrigger asChild>
          {props.triggerComponent ?? (
            <Button icon="plus">New Assessment</Button>
          )}
        </DialogTrigger>
        <DialogMain>
          <form>
            <DialogHeader>
              <DialogTitle asChild>
                <Badge variant="info">New Assessment</Badge>
              </DialogTitle>
            </DialogHeader>
            <DialogContent>
              <Grid gap="small">
                <GridCol colSpan={{ base: 12, m: 4 }}>
                  <Select
                    id="Select Life cycle"
                    label="Life cycle model"
                    noOptionsMessage={undefined}
                    options={[
                      {
                        label: 'Crop production',
                        options: [
                          {
                            label: 'Crop model A',
                            value: 'Crop model A',
                          },
                          {
                            label: 'Crop model B',
                            value: 'Crop model B',
                          },
                        ],
                      },
                      {
                        label: 'Pig meat',
                        options: [
                          {
                            label: 'Pig meat model A',
                            value: 'Pig meat model A',
                          },
                          {
                            label: 'Pig meat model B',
                            value: 'Pig meat model B',
                          },
                        ],
                      },
                      {
                        label: 'Broiler meat',
                        options: [
                          {
                            label: 'Broiler meat model A',
                            value: 'Broiler meat model A',
                          },
                          {
                            label: 'Broiler meat model B',
                            value: 'Broiler meat model B',
                          },
                        ],
                      },
                    ]}
                    placeholder="Select model"
                  />
                </GridCol>
                <GridCol colSpan={{ base: 12, m: 4 }}>
                  <Select
                    id="Assessment-year"
                    label="Assessment year"
                    noOptionsMessage={() => 'No assessment years…'}
                    options={[
                      {
                        label: '2022',
                        value: '2022',
                      },
                      {
                        label: '2021',
                        value: '2021',
                      },

                      {
                        label: '2020',
                        value: '2020',
                      },
                    ]}
                    placeholder="Select year"
                  />
                </GridCol>
                <GridCol colSpan={{ base: 12, m: 4 }}>
                  <Select
                    id="Assessment-type"
                    label="Assessment type"
                    noOptionsMessage={() => 'No assessment types…'}
                    onChange={e => setAssessmentType(e as any)}
                    options={[
                      {
                        label: 'Official',
                        value: 'official',
                      },
                      {
                        label: 'Draft',
                        value: 'draft',
                      },
                    ]}
                    placeholder="Select type"
                    value={assessmentType}
                  />
                </GridCol>
                <GridCol>
                  <HeadingInput
                    id="draft-description"
                    marginTop="small"
                    placeholder="New draft title…"
                  />
                  <Textarea
                    id="draft-description"
                    marginTop="base"
                    minHeight="4rem"
                    placeholder="Add description…"
                    resize="none"
                    variant="plain"
                  />
                </GridCol>
                {assessmentType.value === 'official' && (
                  <GridCol>
                    <Alert variant="error">
                      There is already an official assessment with the current
                      model and year. If you choose to continue, the current
                      official assessment type will be changed to draft
                    </Alert>
                  </GridCol>
                )}
              </Grid>
            </DialogContent>
            <DialogFooter>
              <Buttons justifyContent="space-between">
                <Button disabled>Import</Button>
                <DialogClose asChild>
                  <Button
                    variant={
                      assessmentType.value === 'Official' ? 'error' : 'primary'
                    }
                  >
                    Save
                  </Button>
                </DialogClose>
              </Buttons>
            </DialogFooter>
          </form>
        </DialogMain>
      </Dialog>
    );
  },
};

/* =======================================
 * Trigger outside root component (outside context)
 * ======================================= */

export const DialogTriggerOutsideContext: Story = {
  args: {},
  name: 'Trigger Outside Context',
  parameters: {
    docs: {
      description: {
        story:
          'If `DialogTrigger` is used outside the `Dialog` component: add `id`, `dialogId`, `triggerRef` and `open` props to `<Dialog id="unique-dialog-id" triggerRef={ref} open={open} />` and to `<DialogTrigger dialogId="unique-dialog-id" triggerRef={ref} open={open} />` with `useRef`. This makes sure that triggers are focused after the dialog is closed and the triggers have their intended functionalities.',
      },
    },
  },
  render: function Component() {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <>
        <Flex gap="small">
          <DialogTrigger
            asChild
            dialogId="unique-dialog-id"
            onClick={() => setOpen(!open)}
            open={open}
            triggerRef={triggerRef}
          >
            <Button>Trigger</Button>
          </DialogTrigger>
          <Menu onOpenChange={setMenuOpen} open={menuOpen}>
            <MenuTrigger asChild>
              <Button icon="arrowDown">Actions</Button>
            </MenuTrigger>
            <MenuContent>
              <DialogTrigger
                asChild
                dialogId="unique-dialog-id"
                onClick={() => setOpen(!open)}
                open={open}
                triggerRef={triggerRef}
              >
                <MenuItem>
                  <MenuText>Trigger in menu</MenuText>
                </MenuItem>
              </DialogTrigger>
            </MenuContent>
          </Menu>
        </Flex>
        <Dialog
          closeAriaLabel="Close"
          id="unique-dialog-id"
          onOpenChange={setOpen}
          open={open}
          triggerRef={triggerRef}
        >
          <DialogMain>
            <DialogHeader>
              <DialogTitle asChild>
                <Badge variant="info">Import Assessment</Badge>
              </DialogTitle>
            </DialogHeader>
            <DialogContent>
              <Select
                id="Assessment"
                label="Assessment"
                noOptionsMessage={() => 'No assessments…'}
                options={[
                  {
                    label: 'Assessment A',
                    value: 'Assessment A',
                  },
                  {
                    label: 'Assessment B',
                    value: 'Assessment B',
                  },
                ]}
                placeholder="Select Assessment"
              />
              <DialogDescription asChild>
                <Alert marginTop="medium" variant="error">
                  This will override all of your current assessment fields
                </Alert>
              </DialogDescription>
            </DialogContent>
            <DialogFooter>
              <Flex alignItems="center" justifyContent="space-between">
                <Media asChild greaterThanOrEqual="s">
                  <Badge>Crop model 2022</Badge>
                </Media>
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
      </>
    );
  },
};
