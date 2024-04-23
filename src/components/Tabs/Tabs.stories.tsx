import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import {
  Tab,
  TabContent,
  TabLink,
  Tabs,
  TabsList,
  type TabsListProps,
  type TabsProps,
} from './';
import React, { type FC, useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  excludeStories: ['TabsStory'],
  parameters: {
    componentSubtitle:
      'A set of layered sections of disclosured content — known as tab panels — that are displayed one at a time. Tabs can also be used as a navigation.',
    docs: {
      description: {
        component:
          'This component uses `@radix-ui/react-tabs` under the hood. View <a href="https://www.radix-ui.com/docs/primitives/components/tabs" target="_blank">@radix-ui/react-tabs documentation</a> for additional properties and information.',
      },
    },
  },
  subcomponents: {
    Tab,
    TabLink,
    TabsList,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Navigation/Tabs',
};

export default meta;

type Story = StoryObj<
  typeof Tabs & {
    args?: {
      tabsListProps?: TabsListProps;
    };
  }
>;

export const TabsComponent: Story = {
  args: {},
  name: 'Tabs',
  render: ({
    ...props
  }: TabsProps & {
    tabsListProps?: TabsListProps;
  }) => {
    const { tabsListProps, ...restProps } = props;

    return (
      <Tabs
        defaultValue="companies"
        onValueChange={value => console.log(`Tab changed to ${value}`)}
        {...restProps}
      >
        <TabsList {...tabsListProps}>
          <Tab value="companies">Companies</Tab>
          <Tab value="products">Products</Tab>
          <Tab value="2023">Very long tab name if really needed</Tab>
          <Tab disabled key="disabled" value="disabled">
            Disabled tab
          </Tab>
        </TabsList>
        <TabContent value="companies">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea id
            laudantium perferendis odit, ratione, cum a beatae sit facere saepe
            dicta iste commodi, architecto iure nulla itaque? Ex, alias animi!
          </p>
        </TabContent>
        <TabContent value="products">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid, cum
            fictas fabulas, e quibus utilitas nulla elici potest, cum voluptate
            legimus? Duo Reges: constructio interrete. Summus dolor plures dies
            manere non potest? At ille pellit, qui permulcet sensum voluptate.
            Quid enim me prohiberet Epicureum esse, si probarem, quae ille
            diceret? Parvi enim primo ortu sic iacent, tamquam omnino sine animo
            sint. Aliis esse maiora, illud dubium, ad id, quod summum bonum
            dicitis, ecquaenam possit fieri accessio. Quis istum dolorem timet?
            Sed quid attinet de rebus tam apertis plura requirere?
          </p>
        </TabContent>
        <TabContent value="2023">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et hunc
            idem dico, inquieta sed ad virtutes et ad vitia nihil interesse.
            Vitiosum est enim in dividendo partem in genere numerare. Equidem,
            sed audistine modo de Carneade? Nam Metrodorum non puto ipsum
            professum, sed, cum appellaretur ab Epicuro, repudiare tantum
            beneficium noluisse; Dolor ergo, id est summum malum, metuetur
            semper, etiamsi non aderit; Duo Reges: constructio interrete.
          </p>
        </TabContent>
        <TabContent value="disabled">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et hunc
            idem dico, inquieta sed ad virtutes et ad vitia nihil interesse.
            Vitiosum est enim in dividendo partem in genere numerare. Equidem,
            sed audistine modo de Carneade? Nam Metrodorum non puto ipsum
            professum, sed, cum appellaretur ab Epicuro, repudiare tantum
            beneficium noluisse; Dolor ergo, id est summum malum, metuetur
            semper, etiamsi non aderit; Duo Reges: constructio interrete.
          </p>
        </TabContent>
      </Tabs>
    );
  },
};

export const TabsStory: FC<
  TabsProps & {
    args?: {
      tabsListProps?: TabsListProps;
    };
  }
> = composeStory(TabsComponent, meta);

/* =======================================
 * With links
 * =======================================
 *
 * https://codesandbox.io/s/zen-frog-88tv3?file=/src/App.js
 */
export const TabsWithLinks: Story = {
  name: 'As Links',
  parameters: {
    docs: {
      description: {
        story:
          'Tabs can also be used with `<Tab asChild ...` with children as links. You need to control the value. Useful with routers such as <a href="https://v5.reactrouter.com/web/guides/quick-start" target="_blank">react-router-dom</a> or <a href="https://nextjs.org/docs/api-reference/next/router" target="_blank">next/router</a>.',
      },
    },
  },
  render: function Component() {
    const [value, setValue] = useState(window.location.hash || '#2022');

    const changeHash = e => {
      window.location.hash = e.target.href;
      setValue(e.target.hash);
    };

    return (
      <Tabs onValueChange={value => setValue(value)} value={value}>
        <TabsList>
          <Tab asChild type={undefined} value="#2022">
            <a href="#2022" onClick={e => changeHash(e)}>
              2022
            </a>
          </Tab>
          <Tab asChild type={undefined} value="#2021">
            <a href="#2021" onClick={e => changeHash(e)}>
              2021
            </a>
          </Tab>
          <Tab asChild type={undefined} value="#next-link">
            <a href="#next-link" onClick={e => changeHash(e)}>
              Usage with next/link
            </a>
          </Tab>
        </TabsList>
        <TabContent key="2022" value="#2022">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea id
            laudantium perferendis odit, ratione, cum a beatae sit facere saepe
            dicta iste commodi, architecto iure nulla itaque? Ex, alias animi!
          </p>
        </TabContent>
        <TabContent value="#2021">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid, cum
            fictas fabulas, e quibus utilitas nulla elici potest, cum voluptate
            legimus? Duo Reges: constructio interrete. Summus dolor plures dies
            manere non potest? At ille pellit, qui permulcet sensum voluptate.
            Quid enim me prohiberet Epicureum esse, si probarem, quae ille
            diceret? Parvi enim primo ortu sic iacent, tamquam omnino sine animo
            sint. Aliis esse maiora, illud dubium, ad id, quod summum bonum
            dicitis, ecquaenam possit fieri accessio. Quis istum dolorem timet?
            Sed quid attinet de rebus tam apertis plura requirere?
          </p>
        </TabContent>
        <TabContent value="#next-link">
          <p>
            Note that with{' '}
            <a
              href="https://nextjs.org/docs/api-reference/next/link"
              rel="noreferrer"
              target="_blank"
            >
              next/link
            </a>{' '}
            you need wrap the <code>{'<Tab />'}</code> or{' '}
            <code>{'<TabLink />'}</code> with <code>{'<Link />'}</code>.
          </p>
          <code
            dangerouslySetInnerHTML={{
              __html: `
              &lt;Link href="/" passHref&gt;<br />
                &nbsp;&lt;Tab asChild value="/"&gt;<br />
                  &nbsp&nbsp&lt;a&gt;I'm link&lt;/a&gt;<br />
                &nbsp;&lt;/Tab&gt;<br />
              &lt;/Link&gt;
           `,
            }}
          />
        </TabContent>
      </Tabs>
    );
  },
};

/* =======================================
 * Tabs: Navigation (Tabs without <TabContent />)
 * =======================================
 *
 * https://codesandbox.io/s/zen-frog-88tv3?file=/src/App.js
 */
export const TabsNavigationMode: Story = {
  name: 'Navigation Mode',
  parameters: {
    docs: {
      description: {
        story:
          "Use `mode=\"navigation\"` together with `<TabLink asChild ... />` if you're using Tabs without `<TabContent />` and use wan't to use Tabs as a navigation. You need to control the value. Here's also an example of strong border color.",
      },
    },
  },
  render: function Component() {
    const [value, setValue] = useState(window.location.hash || '#links-only');

    const changeHash = e => {
      window.location.hash = e.target.href;
      setValue(e.target.hash);
    };

    return (
      <Tabs mode="navigation">
        <TabsList borderColor="strong">
          <TabLink active={value} asChild value="#links-only">
            <a href="#links-only" onClick={e => changeHash(e)}>
              Tab nav item
            </a>
          </TabLink>
          <TabLink active={value} asChild value="#another-links-only">
            <a href="#another-links-only" onClick={e => changeHash(e)}>
              Another nav item
            </a>
          </TabLink>
          <TabLink active={value} asChild disabled value="#disabled-links-only">
            <a href="#disabled-links-only" onClick={e => changeHash(e)}>
              Third disabled nav item
            </a>
          </TabLink>
        </TabsList>
      </Tabs>
    );
  },
};

/* =======================================
 * Primary variant
 * ======================================= */

export const TabsListPrimary: Story = {
  ...TabsComponent,
  args: {
    tabsListProps: {
      color: 'red',
      variant: 'primary',
    },
  },
  name: 'Primary Variant',
  parameters: {
    docs: {
      description: {
        story:
          'Add primary variant to TabsList `<TabsList variant="primary" />` to use alternative styling.',
      },
    },
  },
};
