import { AlertDialogComponent } from '../AlertDialog/AlertDialog.stories';
import { AlertDialogTrigger } from '../AlertDialog';
import { Avatar } from '../Avatar';
import { Badge } from '../Badge';
import { Button } from '../Button';
import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { DialogComponent } from '../Dialog/Dialog.stories';
import { Icon } from '../Icon';
import { MarkProduct } from '../Mark';
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  type MenuProps,
  MenuSelect,
  MenuSeparator,
  MenuText,
  MenuTrigger,
  SubMenu,
  SubMenuContent,
  SubMenuTrigger,
} from './';
import { options } from '../Select/Select.stories';
import { type SelectOptions } from '../Select';
import React, { type FC, useRef, useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof MenuContent> = {
  component: MenuContent,
  excludeStories: ['MenuStory'],
  parameters: {
    componentSubtitle:
      'Menu displays a list of actions or selectable options for a user.',
    docs: {
      description: {
        component:
          'The component uses `@radix-ui/react-dropdown-menu` under the hood. View <a href="https://www.radix-ui.com/docs/primitives/components/dropdown-menu" target="_blank">@radix-ui/react-dropdown-menu</a> for additional properties and information.',
      },
    },
  },
  subcomponents: {
    Menu,
    MenuContent,
    MenuGroup,
    MenuItem,
    MenuSelect,
    MenuSeparator,
    MenuText,
    MenuTrigger,
    SubMenu,
    SubMenuContent,
    SubMenuTrigger,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Overlay/Menu',
};

export default meta;

type Story = StoryObj<typeof Menu | typeof MenuContent>;

export const MenuComponent: Story = {
  args: {
    align: 'start',
    width: 'medium',
  },
  name: 'Menu',
  render: function Component({ ...props }) {
    const [open, setOpen] = useState(false);
    const { dir, container, modal, ...contentProps } = props;

    return (
      <Menu
        container={container}
        dir={dir}
        modal={modal}
        onOpenChange={setOpen}
        open={open}
      >
        <MenuTrigger asChild>
          <Button>Open Menu</Button>
        </MenuTrigger>
        <MenuContent {...contentProps}>
          <MenuGroup label="Workspace">
            <MenuItem skipFocus>
              <Avatar
                image={<MarkProduct />}
                meta
                name="Sandell farm"
                text="Lite plan"
              />
            </MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuItem skipFocus>
            <Avatar
              meta
              name="Forename Lastname"
              text="forename.lastname@biocode.io"
            />
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <MenuText>
              <Icon name="copy" />
              <MenuText>Menu item</MenuText>
            </MenuText>
            <MenuText color="light" truncate={false}>
              Culpa mollit velit in nostrud ad sint cillum quis nostrud nisi
            </MenuText>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <MenuText>Menu item with description</MenuText>
            <MenuText color="light" truncate={false}>
              Menu text above can be used without MenuText if it shouldn't be
              truncated or no icon is used
            </MenuText>
          </MenuItem>
          <MenuSeparator />
          <MenuItem>
            <MenuText>
              <Icon name="copy" />
              <MenuText>Duplicate</MenuText>
            </MenuText>
          </MenuItem>
          <MenuItem>
            <MenuText>
              <Icon name="plus" />
              <MenuText>New calculation</MenuText>
            </MenuText>
          </MenuItem>
          <MenuSeparator />
          <MenuGroup label="Language">
            <MenuItem>
              <MenuText>In Finnish</MenuText>
            </MenuItem>
            <MenuItem>
              <MenuText>In English</MenuText>
            </MenuItem>
          </MenuGroup>
          <MenuSeparator />
          <MenuItem>
            <MenuText justifyContent="space-between">
              <MenuText>
                Badge with truncation, badges should be aligned to right
              </MenuText>
              <Badge size="small" variant="success">
                Pro
              </Badge>
            </MenuText>
          </MenuItem>
          <MenuItem>
            <MenuText justifyContent="space-between">
              <MenuText truncate={false}>
                With badge and without truncation
              </MenuText>
              <Badge size="small" variant="success">
                Pro
              </Badge>
            </MenuText>
          </MenuItem>
          <MenuItem
            asChild
            onSelect={e => {
              e.preventDefault();
              alert('Link clicked');
            }}
          >
            <a>Link as child</a>
          </MenuItem>
          <MenuItem>
            <MenuText>
              Long item is automatically truncated with the MenuText component
              unless fit-content is set to true
            </MenuText>
          </MenuItem>
          <MenuItem>
            Long item is automatically truncated above however if truncation is
            not needed, MenuText can be left out
          </MenuItem>
          <MenuItem disabled>
            <MenuText>
              <Icon name="copy" />
              <MenuText>Disabled</MenuText>
            </MenuText>
          </MenuItem>
          <MenuSeparator />
          <SubMenu>
            <SubMenuTrigger>Sub menu</SubMenuTrigger>
            <SubMenuContent>
              <MenuGroup label="My account">
                <MenuItem>
                  <MenuText>Update Profile</MenuText>
                </MenuItem>
                <MenuItem>
                  <MenuText>Change Password</MenuText>
                </MenuItem>
              </MenuGroup>
              <MenuSeparator />
              <MenuItem>Menu item</MenuItem>
            </SubMenuContent>
          </SubMenu>
          <MenuSeparator />
          <MenuItem onSelect={() => alert('Log out')}>
            <MenuText>Log out</MenuText>
          </MenuItem>
        </MenuContent>
      </Menu>
    );
  },
};

export const MenuStory: FC<Partial<MenuProps>> = composeStory(
  MenuComponent,
  meta,
);

/* =======================================
 * With Dialog
 * ======================================= */

export const MenuWithDialog: Story = {
  name: 'With Dialog',
  render: function Component({ ...props }) {
    const [open, setOpen] = useState(false);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [alertDialogOpen, setAlertDialogOpen] = useState(false);
    const [dialogOpenExp2, setDialogOpenExp2] = useState(false);
    const alertDialogTriggerRef = useRef<any>();

    return (
      <>
        <Menu {...props} onOpenChange={setOpen} open={open}>
          <MenuTrigger asChild>
            <Button icon="arrowDown" iconActive={open}>
              Actions
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuGroup>
              <DialogComponent
                open={dialogOpen}
                setOpen={setDialogOpen}
                triggerComponent={
                  <MenuItem onSelect={e => e.preventDefault()}>
                    <MenuText>
                      <Icon name="import" />
                      <MenuText>Import</MenuText>
                    </MenuText>
                  </MenuItem>
                }
              />
              <MenuItem
                onSelect={e => {
                  e.preventDefault();
                  setDialogOpenExp2(true);
                }}
              >
                <MenuText>
                  <Icon name="export" />
                  <MenuText>Export</MenuText>
                </MenuText>
              </MenuItem>
              <MenuItem disabled>
                <MenuText>
                  <Icon name="copy" />
                  <MenuText>Duplicate</MenuText>
                </MenuText>
              </MenuItem>
            </MenuGroup>
            <MenuSeparator />
            <MenuGroup>
              <AlertDialogTrigger
                alertDialogId="unique-alert-dialog-id"
                asChild
                open={alertDialogOpen}
                triggerRef={alertDialogTriggerRef}
              >
                <MenuItem
                  onSelect={e => {
                    e.preventDefault();
                    setAlertDialogOpen(true);
                  }}
                >
                  <MenuText>
                    <Icon name="trash" />
                    <MenuText>Delete</MenuText>
                  </MenuText>
                </MenuItem>
              </AlertDialogTrigger>
            </MenuGroup>
          </MenuContent>
        </Menu>
        <AlertDialogComponent
          open={alertDialogOpen}
          setOpen={setAlertDialogOpen}
          triggerRef={alertDialogTriggerRef}
        />
        <DialogComponent
          open={dialogOpenExp2}
          setOpen={setDialogOpenExp2}
          triggerComponent={<></>}
        />
      </>
    );
  },
};

/* =======================================
 * With MenuSelect
 * ======================================= */

export const MenuWithMenuSelect: Story = {
  name: 'With Select',
  parameters: {
    docs: {
      description: {
        story:
          'Use `<MenuSelect />` to apply Select usage inside Menu. MenuSelect applies essential props and styles to make Select work properly inside the Menu.',
      },
    },
  },
  render: function Component() {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<SelectOptions>(options[0].options[0]);

    return (
      <Menu onOpenChange={setOpen} open={open}>
        <MenuTrigger asChild>
          <Button>Menu with Select</Button>
        </MenuTrigger>
        <MenuContent width="large">
          <MenuSelect
            id="menu-select"
            onChange={value => {
              setValue(value as SelectOptions);
              setOpen(false);
            }}
            options={options}
            placeholder="Search..."
            value={value}
          />
        </MenuContent>
      </Menu>
    );
  },
};
