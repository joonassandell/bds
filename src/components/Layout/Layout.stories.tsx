import { AsideBox, AsideMain } from '../Aside';
import { AsideComponent } from '../Aside/Aside.stories';
import { Button, type ButtonProps } from '../Button';
import { Digit } from '../Digit';
import { Flex } from '../Flex';
import { Heading } from '../Heading';
import { HeadingSelectStory } from '../../stories/examples/HeadingSelect/HeadingSelect.stories';
import { Icon } from '../Icon';
import {
  Layout,
  LayoutAside,
  type LayoutAsideProps,
  LayoutAsideTrigger,
  LayoutBar,
  LayoutBarLabel,
  LayoutBox,
  LayoutMain,
  LayoutMainAside,
  LayoutMainAsideTrigger,
  LayoutMainInner,
} from './';
import { Media, useMediaQueries } from '../Media';
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
import { Progress } from '../Progress';
import { Separator } from '../Separator';
import { Tab, TabContent, Tabs, TabsList } from '../Tabs';
import { Text } from '../Text';
import { Theme } from '../Theme';
import React, { useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Layout> = {
  component: Layout,
  parameters: {
    componentSubtitle: 'Layout to be utilized in the consuming applications.',
    layout: 'fullscreen',
  },
  subcomponents: {
    LayoutAside,
    LayoutAsideTrigger,
    LayoutBar,
    LayoutBarLabel,
    LayoutBox,
    LayoutMain,
    LayoutMainInner,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Layout/Layout',
};

export default meta;

type Story = StoryObj<typeof Layout>;

export const LayoutComponent: Story = {
  name: 'Layout',
  render: function Component({ ...props }) {
    const { mq: l } = useMediaQueries();
    const mqL = l('greaterOrEqual', 'l');

    const { children: asideComponentChildren, ...asideComponentArgs } =
      AsideComponent.args as LayoutAsideProps;

    return (
      <Layout {...props}>
        <LayoutAside {...asideComponentArgs}>
          <AsideMain>{asideComponentChildren}</AsideMain>
        </LayoutAside>
        <LayoutMain>
          <LayoutBar sticky={false}>
            <Flex
              alignItems="center"
              gap="small"
              justifyContent="space-between"
              width="100%"
            >
              <Flex gap="xSmall" height="100%" minWidth={0} width="100%">
                <Flex
                  alignItems="center"
                  flexShrink={mqL ? 0 : undefined}
                  gap="xSmall"
                  maxWidth={mqL ? '24ch' : '90%'}
                >
                  <LayoutAsideTrigger />
                  <LayoutBarLabel>
                    Crop model with possible long name that should be truncated
                  </LayoutBarLabel>
                </Flex>
                <Media asChild greaterThanOrEqual="l">
                  <Flex alignSelf="end" minWidth={0}>
                    <Tabs defaultValue="2023">
                      <TabsList border={false}>
                        <Tab value="2023">2023</Tab>
                        <Tab value="2022">2022</Tab>
                        <Tab value="2021">2021</Tab>
                        <Tab value="2020">2020</Tab>
                        <Tab value="2019">2019</Tab>
                        <Tab value="2018">2018</Tab>
                      </TabsList>
                    </Tabs>
                  </Flex>
                </Media>
              </Flex>
              <Flex gap="xSmall">
                <Media asChild lessThan="l">
                  <Button icon="calendar" justify="block" />
                </Media>
                <Button icon="help" justify="block" />
              </Flex>
            </Flex>
          </LayoutBar>
          <LayoutBar>
            <Flex
              alignItems="center"
              gap="small"
              justifyContent="space-between"
              width="100%"
            >
              <Flex minWidth={0}>
                <Tabs defaultValue="main-calculation">
                  <TabsList border={false} variant="primary">
                    <Tab value="main-calculation">Main calculation</Tab>
                    <Tab value="scenario">Scenario</Tab>
                    <Tab value="test-scenario">Test scenario</Tab>
                    <Tab value="another-scenario">Another test scenario</Tab>
                  </TabsList>
                </Tabs>
              </Flex>
              <Flex gap="xSmall">
                <Media asChild lessThan="l">
                  <Button
                    icon="ellipsisHorizontal"
                    justify="block"
                    size="small"
                  />
                </Media>
                <Media asChild greaterThanOrEqual="l">
                  <Button icon="plus" size="small">
                    New field plot
                  </Button>
                </Media>
                <Media asChild greaterThanOrEqual="l">
                  <Button icon="plus" size="small">
                    New draft
                  </Button>
                </Media>
              </Flex>
            </Flex>
          </LayoutBar>
          <LayoutBox marginTop="medium">
            <Heading>Heading</Heading>
            <Text>
              <p>
                We shouldn't display that much tabs in the first LayoutBar; that
                example is there just to demonstrate that the content aligns
                properly in all viewports if there happens to be a lot of tabs.
              </p>
              <LayoutAsideTrigger asChild>
                <Button marginBottom="medium">Custom aside trigger</Button>
              </LayoutAsideTrigger>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis nulla assumenda consectetur quam, sapiente tempore
                deserunt expedita vero necessitatibus optio possimus. Qui omnis
                repudiandae nam deserunt cumque eos, cupiditate corrupti.
              </p>
            </Text>
          </LayoutBox>
          <LayoutBox marginLeft={0} marginRight={0} marginTop="medium">
            <Tabs defaultValue="companies">
              <TabsList
                paddingLeft={{
                  base: 'base',
                  l: 'large',
                }}
              >
                <Tab value="companies">Companies</Tab>
                <Tab value="products">Products</Tab>
                <Tab disabled key="disabled" value="disabled">
                  Disabled tab
                </Tab>
              </TabsList>
              <TabContent value="companies">
                <LayoutBox>
                  <Text>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis nulla assumenda consectetur quam, sapiente
                      tempore deserunt expedita vero necessitatibus optio
                      possimus. Qui omnis repudiandae nam deserunt cumque eos,
                      cupiditate corrupti.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis nulla assumenda consectetur quam, sapiente
                      tempore deserunt expedita vero necessitatibus optio
                      possimus. Qui omnis repudiandae nam deserunt cumque eos,
                      cupiditate corrupti.
                    </p>
                  </Text>
                </LayoutBox>
              </TabContent>
              <TabContent value="products">
                <LayoutBox>
                  <Text>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veritatis nulla assumenda consectetur quam, sapiente
                      tempore deserunt. Lorem ipsum dolor sit amet consectetur
                      adipisicing elit. Veritatis nulla assumenda consectetur
                      quam, sapiente tempore deserunt expedita vero
                      necessitatibus optio possimus. Qui omnis repudiandae nam
                      deserunt cumque eos, cupiditate corrupti.
                    </p>
                  </Text>
                </LayoutBox>
              </TabContent>
            </Tabs>
            <Separator marginBottom="medium" marginTop="medium" />
          </LayoutBox>
          <LayoutBox>
            <Text marginBottom="base">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis nulla assumenda consectetur quam, sapiente tempore
                deserunt expedita vero necessitatibus optio possimus. Qui omnis
                repudiandae nam deserunt cumque eos, cupiditate corrupti.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis nulla assumenda consectetur quam, sapiente tempore
                deserunt expedita vero necessitatibus optio possimus. Qui omnis
                repudiandae nam deserunt cumque eos, cupiditate corrupti.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis nulla assumenda consectetur quam, sapiente tempore
                deserunt expedita vero necessitatibus optio possimus. Qui omnis
                repudiandae nam deserunt cumque eos, cupiditate corrupti.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Veritatis nulla assumenda consectetur quam, sapiente tempore
                deserunt expedita vero necessitatibus optio possimus. Qui omnis
                repudiandae nam deserunt cumque eos, cupiditate corrupti.
              </p>
            </Text>
          </LayoutBox>
        </LayoutMain>
      </Layout>
    );
  },
};

/* =======================================
 * With LayoutMainAside and LayoutMainInner
 * ======================================= */

export const LayoutWithMainAsideAndMainInner: Story = {
  name: 'Layout with MainAside',
  parameters: {
    docs: {
      description: {
        story:
          'Use `LayoutMainAside` together with `LayoutMainInner` to apply second right aligned Aside. LayoutMainAside can be controlled with context just like LayoutAside.',
      },
    },
  },
  render: function Component({ ...props }) {
    const [scenarioMenuOpen, setScenarioMenuOpen] = useState(false);
    const [newMenuOpen, setNewMenuOpen] = useState(false);

    const { mq: l } = useMediaQueries();
    const { mq: xxl } = useMediaQueries();
    const mqL = l('greaterOrEqual', 'l');
    const mqXXL = xxl('greaterOrEqual', 'xxl');

    const CalculationYearMenu = ({
      buttonProps,
    }: {
      buttonProps?: ButtonProps;
    }) => {
      const [calcMenu, setCalcMenuOpen] = useState(false);
      return (
        <Menu onOpenChange={setCalcMenuOpen} open={calcMenu}>
          <MenuTrigger asChild>
            <Button
              icon="ellipsisHorizontal"
              justify="block"
              variant="plain"
              {...buttonProps}
            >
              Calculation years and actions
            </Button>
          </MenuTrigger>
          <MenuContent align="end">
            <MenuItem>
              <MenuText>
                <Icon name="plus" />
                <MenuText>New calculation year</MenuText>
              </MenuText>
            </MenuItem>
            <MenuItem>
              <MenuText>
                <Icon name="pen" />
                <MenuText>Edit calculation years</MenuText>
              </MenuText>
            </MenuItem>
            <MenuSeparator />
            <MenuGroup label="Calculation years">
              <MenuItem>
                <MenuText>2023</MenuText>
              </MenuItem>
              <MenuItem>
                <MenuText>2022</MenuText>
              </MenuItem>
              <MenuItem>
                <MenuText>2021</MenuText>
              </MenuItem>
              <MenuItem>
                <MenuText>2020</MenuText>
              </MenuItem>
              <MenuItem>
                <MenuText>2019</MenuText>
              </MenuItem>
              <MenuItem>
                <MenuText>2018</MenuText>
              </MenuItem>
            </MenuGroup>
          </MenuContent>
        </Menu>
      );
    };

    const { children: asideComponentChildren, ...asideComponentArgs } =
      AsideComponent.args as LayoutAsideProps;

    return (
      <Layout {...props}>
        <LayoutAside {...asideComponentArgs}>
          <AsideMain>{asideComponentChildren}</AsideMain>
        </LayoutAside>
        <LayoutMain>
          <LayoutMainInner>
            <LayoutBar>
              <Flex
                alignItems="center"
                gap="small"
                justifyContent="space-between"
                width="100%"
              >
                <Flex
                  alignItems="center"
                  gap="xSmall"
                  height="100%"
                  minWidth={0}
                  width="100%"
                >
                  <Flex
                    alignItems="center"
                    flexShrink={mqL ? 0 : undefined}
                    gap="xSmall"
                    maxWidth={mqL ? '24ch' : '90%'}
                  >
                    <LayoutAsideTrigger />
                    <LayoutBarLabel>Acme Pasta</LayoutBarLabel>
                  </Flex>
                  <Media asChild greaterThanOrEqual="l">
                    <Flex
                      alignItems="flex-end"
                      gap="small"
                      height="100%"
                      minWidth={0}
                    >
                      <Flex minWidth={0}>
                        <Tabs defaultValue="2023">
                          <TabsList border={false}>
                            <Tab value="2023">2023</Tab>
                            <Tab value="2022">2022</Tab>
                            <Tab value="2021">2021</Tab>
                          </TabsList>
                        </Tabs>
                      </Flex>
                      <CalculationYearMenu
                        buttonProps={{
                          marginBottom: 'small',
                          size: 'xSmall',
                        }}
                      />
                    </Flex>
                  </Media>
                </Flex>
                <Flex alignItems="center" gap="xSmall">
                  <Media asChild lessThan="l">
                    <CalculationYearMenu
                      buttonProps={{ icon: 'calendar', variant: 'default' }}
                    />
                  </Media>
                  <Media asChild greaterThanOrEqual="l">
                    <Menu onOpenChange={setNewMenuOpen} open={newMenuOpen}>
                      <MenuTrigger asChild>
                        <Button
                          icon="plus"
                          variant={mqXXL ? 'primary' : 'default'}
                        >
                          New
                        </Button>
                      </MenuTrigger>
                      <MenuContent align="end" width="large">
                        <MenuItem>
                          <MenuText>Calculation year</MenuText>
                          <MenuText color="light" truncate={false}>
                            Add new calculation every year to track your
                            product's progress
                          </MenuText>
                        </MenuItem>
                        <MenuSeparator />
                        <MenuItem>
                          <MenuText>Scenario</MenuText>
                          <MenuText color="light" truncate={false}>
                            Scenarios are a great way to compare and test
                            calculations
                          </MenuText>
                        </MenuItem>
                      </MenuContent>
                    </Menu>
                  </Media>
                  <LayoutMainAsideTrigger asChild>
                    <Button variant="primary">Summary</Button>
                  </LayoutMainAsideTrigger>
                </Flex>
              </Flex>
            </LayoutBar>
            <LayoutBar sticky={false}>
              <Flex alignItems="center" gap={0} width="100%">
                <Flex minWidth={0}>
                  <Tabs defaultValue="main-calculation">
                    <TabsList border={false} variant="primary">
                      <Tab value="main-calculation">Main calculation</Tab>
                      <Tab value="scenario">Scenario</Tab>
                      <Tab value="test-scenario">Test scenario</Tab>
                      <Tab value="another-scenario">Another test scenario</Tab>
                    </TabsList>
                  </Tabs>
                </Flex>
                <Menu
                  onOpenChange={setScenarioMenuOpen}
                  open={scenarioMenuOpen}
                >
                  <MenuTrigger asChild>
                    <Button
                      icon="ellipsisHorizontal"
                      justify="block"
                      size="xSmall"
                      variant="plain"
                    >
                      Scenarios
                    </Button>
                  </MenuTrigger>
                  <MenuContent align="end">
                    <MenuItem>
                      <MenuText>
                        <Icon name="plus" />
                        <MenuText>New scenario</MenuText>
                      </MenuText>
                    </MenuItem>
                    <MenuItem>
                      <MenuText>
                        <Icon name="pen" />
                        <MenuText>Edit scenarios</MenuText>
                      </MenuText>
                    </MenuItem>
                    <MenuSeparator />
                    <MenuGroup label="Scenarios">
                      <MenuItem>
                        <MenuText>Scenario</MenuText>
                      </MenuItem>
                      <MenuItem>
                        <MenuText>Scenario</MenuText>
                      </MenuItem>
                      <MenuItem>
                        <MenuText>Scenario</MenuText>
                      </MenuItem>
                    </MenuGroup>
                  </MenuContent>
                </Menu>
              </Flex>
            </LayoutBar>
            <LayoutBox marginBottom="medium" marginTop="medium">
              <Heading>Heading</Heading>
              <Text marginBottom="medium">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis nulla assumenda consectetur quam, sapiente tempore
                  deserunt expedita vero necessitatibus optio possimus. Qui
                  omnis repudiandae nam deserunt cumque eos, cupiditate
                  corrupti.
                </p>
              </Text>
              <Flex flexDirection="column" gap="large">
                <HeadingSelectStory />
                <HeadingSelectStory />
              </Flex>
            </LayoutBox>
            <LayoutBox>
              <Text>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis nulla assumenda consectetur quam, sapiente tempore
                  deserunt expedita vero necessitatibus optio possimus. Qui
                  omnis repudiandae nam deserunt cumque eos, cupiditate
                  corrupti.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis nulla assumenda consectetur quam, sapiente tempore
                  deserunt expedita vero necessitatibus optio possimus. Qui
                  omnis repudiandae nam deserunt cumque eos, cupiditate
                  corrupti.
                </p>
              </Text>
            </LayoutBox>
            <LayoutBox marginLeft={0} marginRight={0} marginTop="medium">
              <Tabs defaultValue="companies">
                <TabsList
                  paddingLeft={{
                    base: 'base',
                    l: 'large',
                  }}
                >
                  <Tab value="companies">Companies</Tab>
                  <Tab value="products">Products</Tab>
                  <Tab disabled key="disabled" value="disabled">
                    Disabled tab
                  </Tab>
                </TabsList>
                <TabContent value="companies">
                  <LayoutBox>
                    <Text>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis nulla assumenda consectetur quam, sapiente
                        tempore deserunt expedita vero necessitatibus optio
                        possimus. Qui omnis repudiandae nam deserunt cumque eos,
                        cupiditate corrupti.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis nulla assumenda consectetur quam, sapiente
                        tempore deserunt expedita vero necessitatibus optio
                        possimus. Qui omnis repudiandae nam deserunt cumque eos,
                        cupiditate corrupti.
                      </p>
                    </Text>
                  </LayoutBox>
                </TabContent>
                <TabContent value="products">
                  <LayoutBox>
                    <Text>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis nulla assumenda consectetur quam, sapiente
                        tempore deserunt. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Veritatis nulla assumenda consectetur
                        quam, sapiente tempore deserunt expedita vero
                        necessitatibus optio possimus. Qui omnis repudiandae nam
                        deserunt cumque eos, cupiditate corrupti.
                      </p>
                    </Text>
                  </LayoutBox>
                </TabContent>
              </Tabs>
              <Separator marginBottom="medium" marginTop="medium" />
            </LayoutBox>
            <LayoutBox>
              <Text marginBottom="base">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis nulla assumenda consectetur quam, sapiente tempore
                  deserunt expedita vero necessitatibus optio possimus. Qui
                  omnis repudiandae nam deserunt cumque eos, cupiditate
                  corrupti.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis nulla assumenda consectetur quam, sapiente tempore
                  deserunt expedita vero necessitatibus optio possimus. Qui
                  omnis repudiandae nam deserunt cumque eos, cupiditate
                  corrupti.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis nulla assumenda consectetur quam, sapiente tempore
                  deserunt expedita vero necessitatibus optio possimus. Qui
                  omnis repudiandae nam deserunt cumque eos, cupiditate
                  corrupti.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis nulla assumenda consectetur quam, sapiente tempore
                  deserunt expedita vero necessitatibus optio possimus. Qui
                  omnis repudiandae nam deserunt cumque eos, cupiditate
                  corrupti.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veritatis nulla assumenda consectetur quam, sapiente tempore
                  deserunt expedita vero necessitatibus optio possimus. Qui
                  omnis repudiandae nam deserunt cumque eos, cupiditate
                  corrupti.
                </p>
              </Text>
              <Flex gap="small" marginBottom="base">
                <LayoutAsideTrigger asChild>
                  <Button flexShrink={1} minWidth={0}>
                    Custom aside trigger
                  </Button>
                </LayoutAsideTrigger>
                <LayoutMainAsideTrigger asChild>
                  <Button flexShrink={1} minWidth={0}>
                    Custom main aside trigger
                  </Button>
                </LayoutMainAsideTrigger>
              </Flex>
            </LayoutBox>
          </LayoutMainInner>
          <Theme asChild mode="dark">
            <LayoutMainAside
              closeAriaLabel="Close"
              titleAriaLabel="Summary and Help sidebar"
            >
              <AsideMain>
                <AsideBox marginLeft={0} marginRight={0}>
                  <Tabs defaultValue="summary">
                    <TabsList>
                      <Tab value="summary">Summary</Tab>
                      <Tab value="help">Help</Tab>
                    </TabsList>
                    <TabContent value="summary">
                      <AsideBox margin="medium">
                        <Digit
                          number={13.37}
                          size="2xLarge"
                          subtitle={{
                            subtitle: 'Carbon footprint',
                          }}
                          truncate
                        />
                      </AsideBox>
                      <AsideBox margin="medium">
                        <Flex flexDirection="column">
                          <Progress
                            amount={10}
                            label="Raw materials"
                            percent={10}
                            progressColor="var(--b-accent-1-200)"
                          />
                          <Progress
                            amount={20}
                            label="Sourcing"
                            percent={20}
                            progressColor="var(--b-accent-4)"
                          />
                          <Progress
                            amount={20}
                            label="Production"
                            percent={20}
                            progressColor="var(--b-accent-2-200)"
                          />
                          <Progress
                            amount={20}
                            label="Packaging"
                            loading
                            percent={20}
                            progressColor="var(--b-accent-3)"
                          />
                        </Flex>
                        <Text marginTop="medium" size="small">
                          Carbon footprint by life cycle stages displayed in kg
                          CO₂e / kg
                        </Text>
                      </AsideBox>
                    </TabContent>

                    <TabContent value="help">
                      <AsideBox margin="medium">Help content</AsideBox>
                    </TabContent>
                  </Tabs>
                </AsideBox>
              </AsideMain>
            </LayoutMainAside>
          </Theme>
        </LayoutMain>
      </Layout>
    );
  },
};
