import { Aside, AsideBox, AsideClose, AsideMain, AsideTrigger } from './';
import { Avatar } from '../Avatar';
import { Box } from '../Box';
import { Button, Buttons } from '../Button';
import { Icon } from '../Icon';
import { MarkProduct } from '../Mark';
import { Media } from '../Media';
import {
  Menu,
  MenuContent,
  MenuGroup,
  MenuItem,
  MenuSeparator,
  MenuText,
  MenuTrigger,
} from '../Menu';
import { type Meta, type StoryObj } from '@storybook/react';
import { Separator } from '../Separator';
import { StackedNavStory } from '../StackedNav/StackedNav.stories';
import { Subtitle } from '../Subtitle';
import { Tab, TabContent, Tabs, TabsList } from '../Tabs';
import { Text } from '../Text';
import React, { useRef, useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Aside> = {
  component: Aside,
  parameters: {
    componentSubtitle:
      'The Aside component is a panel that slides out from the edge of the screen. It can be useful when you need users to complete a task or view some details without leaving the current page.',
    docs: {
      description: {
        component:
          'In `drawer` mode (default mode) Aside is always hidden and its visibility needs to be controlled with the the `open` and `onOpenChange` properties. This component uses `@radix-ui/react-dialog` under the hood. View <a href="https://www.radix-ui.com/docs/primitives/components/dialog" target="_blank">@radix-ui/react-dialog</a> for additional properties and information.',
      },
    },
    layout: 'fullscreen',
  },
  subcomponents: {
    AsideBox,
    AsideClose,
    AsideMain,
    AsideTrigger,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Overlay/Aside',
};

export default meta;

type Story = StoryObj<typeof Aside>;

export const AsideComponent: Story = {
  args: {
    avatar: {
      icon: 'chalkboard',
      name: 'Overview',
    },
    children: (function Component() {
      const AsideMainContent = () => {
        const [workspaceMenuOpen, setWorkspaceMenuOpen] = useState(false);
        const [calcMenuOpen, setCalcMenuOpen] = useState(false);

        return (
          <>
            <AsideBox
              marginBottom="small"
              marginRight={{
                l: 'large',
              }}
              marginTop="small"
            >
              <Menu
                onOpenChange={setWorkspaceMenuOpen}
                open={workspaceMenuOpen}
              >
                <MenuTrigger asChild>
                  <Button
                    icon="select"
                    image={<MarkProduct />}
                    size="medium"
                    variant="plain"
                  >
                    Acme Foods
                  </Button>
                </MenuTrigger>
                <MenuContent width="large">
                  <MenuGroup
                    label="john.sandell@acmefoods.com"
                    labelVariant="text"
                  >
                    <MenuItem>
                      <Avatar
                        image={<MarkProduct />}
                        meta
                        name="Acme Foods"
                        text="Plus plan"
                      />
                    </MenuItem>
                    <MenuItem>
                      <Avatar meta name="Another workspace" text="Free trial" />
                    </MenuItem>
                  </MenuGroup>
                  <MenuSeparator />
                  <MenuItem>
                    <MenuText>
                      <Icon name="cog" />
                      <MenuText>Workspace settings</MenuText>
                    </MenuText>
                  </MenuItem>
                  <MenuItem>
                    <MenuText>
                      <Icon name="users" />
                      <MenuText>Manage & invite members</MenuText>
                    </MenuText>
                  </MenuItem>
                  <MenuSeparator />
                  <MenuItem>
                    <MenuText>
                      <Icon name="producer" />
                      <MenuText>Biocode for producers</MenuText>
                    </MenuText>
                    <MenuText color="light" truncate={false}>
                      Free for farmers and producers
                    </MenuText>
                  </MenuItem>
                  <MenuSeparator />
                  <MenuItem>
                    <MenuText>
                      <Icon name="user" />
                      <MenuText>Profile</MenuText>
                    </MenuText>
                  </MenuItem>
                  <MenuItem onSelect={() => alert('Log out')}>
                    <MenuText>
                      <Icon name="logOut" />
                      <MenuText>Log out</MenuText>
                    </MenuText>
                  </MenuItem>
                </MenuContent>
              </Menu>
            </AsideBox>
            <AsideBox marginTop={false}>
              <Menu onOpenChange={setCalcMenuOpen} open={calcMenuOpen}>
                <MenuTrigger asChild>
                  <Button
                    iconLeft="plus"
                    justify="stretchBetween"
                    size="medium"
                  >
                    New calculation
                  </Button>
                </MenuTrigger>
                <MenuContent width="large">
                  <MenuItem>
                    Company calculation
                    <MenuText color="light" truncate={false}>
                      Calculate carbon footprint by creating a new company or by
                      adding year to an existing one
                    </MenuText>
                  </MenuItem>
                  <MenuSeparator />
                  <MenuItem>
                    Product calculation
                    <MenuText color="light" truncate={false}>
                      Calculate carbon footprint by creating a new product or by
                      adding year to an existing one
                    </MenuText>
                  </MenuItem>
                </MenuContent>
              </Menu>
            </AsideBox>
            <StackedNavStory />
          </>
        );
      };
      return <AsideMainContent />;
    })(),
    closeAriaLabel: 'Close',
    titleAriaLabel: 'Navigation',
  },
  name: 'Aside',
  render: function Component({
    closeAriaLabel,
    children,
    mode,
    layoutBreakpoint,
    titleAriaLabel,
    ...props
  }) {
    const [open, setOpen] = useState(false);

    return (
      <Aside
        {...props}
        closeAriaLabel={closeAriaLabel}
        layoutBreakpoint={layoutBreakpoint}
        mode={mode}
        onOpenChange={setOpen}
        open={open}
        titleAriaLabel={titleAriaLabel}
      >
        <AsideMain>{children}</AsideMain>
        {mode != 'layout' && (
          <Box padding="medium">
            <AsideTrigger asChild>
              <Button>Trigger aside</Button>
            </AsideTrigger>
          </Box>
        )}
        {mode === 'layout' && (
          <Media asChild lessThan={layoutBreakpoint}>
            <Box padding="medium">
              <AsideTrigger asChild>
                <Button>Trigger aside: Layout mode</Button>
              </AsideTrigger>
            </Box>
          </Media>
        )}
      </Aside>
    );
  },
};

/* =======================================
 * Layout mode
 * ======================================= */

export const AsideLayoutMode: Story = {
  ...AsideComponent,
  args: {
    ...AsideComponent.args,
    layoutBreakpoint: 'l',
    mode: 'layout',
  },
  name: 'Layout Mode',
  parameters: {
    docs: {
      description: {
        story:
          "In `layout` mode together with `breakpoint` the panel stays visible starting at the applied breakpoint width but acts like in the drawer mode below the breakpoint width. It's recommended to hide the trigger button with `Media` etc. at the same breakpoint the layout is activated. Layout mode is used for example in Layout component.",
      },
    },
  },
};

/* =======================================
 * Trigger outside the root (outside context)
 * ======================================= */

export const AsideTriggerOutside: Story = {
  name: 'AsideTrigger Outside of Aside',
  parameters: {
    docs: {
      description: {
        story:
          'If `AsideTrigger` is used outside the `Aside` component: add `id`, `asideId`, `triggerRef` and `open` props to `<Aside id="unique-aside-id" triggerRef={ref} open={open} />` and to `<AsideTrigger asideId="unique-aside-id" triggerRef={ref} open={open} />` with `useRef`. This makes sure that triggers are focused after the Aside is closed and the triggers have their intended functionalities.',
      },
    },
  },
  render: function Component() {
    const [open, setOpen] = useState(false);
    const triggerRef = useRef<HTMLButtonElement>();

    return (
      <>
        <Aside
          closeAriaLabel="Close"
          id="unique-aside-id"
          onOpenChange={setOpen}
          open={open}
          titleAriaLabel="Navigation"
          triggerRef={triggerRef}
        >
          <AsideMain>{AsideComponent.args?.children}</AsideMain>
        </Aside>
        <Box padding="medium">
          <Buttons>
            <AsideTrigger
              asChild
              asideId="unique-aside-id"
              onClick={() => setOpen(!open)}
              open={open}
              triggerRef={triggerRef}
            >
              <Button>Trigger aside</Button>
            </AsideTrigger>
            <AsideTrigger
              asChild
              asideId="unique-aside-id"
              onClick={() => setOpen(!open)}
              open={open}
              triggerRef={triggerRef}
            >
              <Button>Another trigger</Button>
            </AsideTrigger>
          </Buttons>
        </Box>
      </>
    );
  },
};

/* =======================================
 * Close & Tabs
 * =======================================
 *
 * Focus gets looped although modal is false, this concenrs Dialog as well:
 * https://github.com/radix-ui/primitives/issues/1338#issuecomment-1108430964
 * https://github.com/radix-ui/primitives/issues/1308
 */

export const AsideCloseAndTabs: Story = {
  name: 'With Tabs and Visible Close Button',
  parameters: {
    docs: {
      description: {
        story:
          "Add `<TabsList tabIndex={-1}>` to disable focusing if there's only one tab.",
      },
    },
  },
  render: function Component() {
    const [open, setOpen] = useState(false);

    return (
      <Aside
        align="right"
        close
        closeAriaLabel="Close"
        modal={false}
        onOpenChange={setOpen}
        open={open}
        titleAriaLabel="Help"
      >
        <Box padding="medium">
          <AsideTrigger asChild>
            <Button>Trigger aside</Button>
          </AsideTrigger>
        </Box>
        <AsideMain>
          <AsideBox marginLeft={0} marginRight={0}>
            <Tabs defaultValue="help">
              <TabsList paddingLeft="medium" tabIndex={-1}>
                <Tab value="help">Help</Tab>
                <Tab value="some-other-tab-in-the-future">
                  Other tab with very long name
                </Tab>
              </TabsList>
              <TabContent value="help">
                <AsideBox margin="medium">
                  <Box marginBottom="medium">
                    <Subtitle color="strong" subtitle="Input name" />
                    <Text>Input name here</Text>
                  </Box>
                  <Box marginBottom="medium">
                    <Subtitle color="strong" subtitle="Information" />
                    <Text>
                      Information about the input etc. here dolor sit amet
                      consectetur adipisicing elit.
                    </Text>
                  </Box>
                </AsideBox>
              </TabContent>
              {/* <TabContent value="some-other-tab-in-the-future">
              <AsideBox>
                <Alert marginBottom="medium" icon={false} size="small">
                  Information about various elements will appear here when you
                  activate info buttons in the application.
                </Alert>
              </AsideBox>
            </TabContent> */}
            </Tabs>
          </AsideBox>
          <Separator decorative={false} />
          <AsideBox margin="medium">
            <Subtitle color="strong" subtitle="Help centre" />
            <Text marginBottom="small">
              <p>The Help Centre has answers to the most common questions.</p>
            </Text>
            <Button href="#" icon="arrowTopRight">
              Help centre
            </Button>
          </AsideBox>
          <Separator />
        </AsideMain>
      </Aside>
    );
  },
};
