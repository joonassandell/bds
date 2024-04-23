import { Beacon } from '../Beacon';
import { composeStory, type Meta, type StoryObj } from '@storybook/react';
import { Icon } from '../Icon';
import {
  StackedNav,
  StackedNavAvatar,
  StackedNavIcon,
  StackedNavIndicator,
  StackedNavItem,
  StackedNavLabel,
  StackedNavLink,
  type StackedNavProps,
  StackedNavSub,
} from './';
import React, { type FC, useState } from 'react';

/* =======================================
 * Default
 * ======================================= */

const meta: Meta<typeof StackedNav> = {
  component: StackedNav,
  excludeStories: ['StackedNavStory'],
  parameters: {
    componentSubtitle:
      'Vertical navigation with sub items to navigate between different views in the consuming application',
    docs: {
      description: {
        component:
          'If using `<StackedNavIndicator />` you should apply spacing around the navigation.',
      },
    },
  },
  subcomponents: {
    StackedNavAvatar,
    StackedNavIcon,
    StackedNavIndicator,
    StackedNavItem,
    StackedNavLabel,
    StackedNavLink,
    StackedNavSub,
  } as Record<string, React.ComponentType<unknown>> | undefined,
  title: 'Components/Navigation/StackedNav',
};

export default meta;

type Story = StoryObj<typeof StackedNav>;

export const StackedNavComponent: Story = {
  name: 'StackedNav',
  render: function Component({ ...props }) {
    const [href, setHref] = useState(window.location.hash);

    const changeLink = e => {
      e.preventDefault();
      history.pushState(null, '', e.target.hash);
      setHref(e.target.hash);
    };

    return (
      <StackedNav {...props}>
        <StackedNavItem>
          <StackedNavLink active={href === '#1'} href="#1" onClick={changeLink}>
            <StackedNavIcon name="chalkboard" />
            Overview
          </StackedNavLink>
        </StackedNavItem>
        <StackedNavItem>
          <StackedNavLink
            active={href === '#1.1'}
            href="#1.1"
            onClick={changeLink}
          >
            <StackedNavIcon name="box" />
            All products
          </StackedNavLink>
        </StackedNavItem>
        <StackedNavItem>
          <StackedNavLink
            active={href === '#1.2'}
            href="#1.2"
            onClick={changeLink}
          >
            <StackedNavIcon name="building" />
            All companies
          </StackedNavLink>
        </StackedNavItem>
        <StackedNavItem>
          <StackedNavLink
            active={href === '#1.3'}
            href="#1.3"
            onClick={changeLink}
          >
            <StackedNavIcon name="seedling" />
            Supply chain
          </StackedNavLink>
        </StackedNavItem>
        <StackedNavLabel>Companies</StackedNavLabel>
        <StackedNavItem>
          <StackedNavLink href="#acme-foods-results" onClick={changeLink}>
            <StackedNavAvatar name="Acme Foods" />
            Acme Foods Ltd.
          </StackedNavLink>
          <StackedNavSub>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-foods-scope-1'}
                href="#acme-foods-scope-1"
                onClick={changeLink}
              >
                Scope 1
              </StackedNavLink>
              <StackedNavIndicator>
                <Icon name="check" />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-foods-scope-2'}
                href="#acme-foods-scope-2"
                onClick={changeLink}
              >
                Scope 2
              </StackedNavLink>
              <StackedNavIndicator>
                <Icon name="check" />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-foods-scope-3-upstream'}
                href="#acme-foods-scope-3-upstream"
                onClick={changeLink}
              >
                Scope 3 Upstream
              </StackedNavLink>
              <StackedNavIndicator>
                <Beacon />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-foods-scope-3-downstream'}
                href="#acme-foods-scope-3-downstream"
                onClick={changeLink}
              >
                Scope 3 Downstream
              </StackedNavLink>
              <StackedNavIndicator>
                <Beacon />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-foods-results'}
                href="#acme-foods-results"
                onClick={changeLink}
              >
                Results
              </StackedNavLink>
              <StackedNavIndicator>
                <Beacon />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-foods-settings'}
                href="#acme-foods-settings"
                onClick={changeLink}
              >
                Company settings
              </StackedNavLink>
            </StackedNavItem>
          </StackedNavSub>
        </StackedNavItem>
        <StackedNavItem>
          <StackedNavLink
            active={href === '#subsidiary'}
            href="#subsidiary"
            onClick={changeLink}
          >
            <StackedNavAvatar name="Subsidiary company" />
            Subsidiary company
          </StackedNavLink>
        </StackedNavItem>
        <StackedNavItem>
          <StackedNavLink
            active={href === '#example'}
            href="#example"
            onClick={changeLink}
          >
            <StackedNavAvatar image="/avatar-image.jpg" name="Example" />
            Example
          </StackedNavLink>
        </StackedNavItem>
        <StackedNavLabel>Products</StackedNavLabel>
        <StackedNavItem>
          <StackedNavLink href="#acme-pasta-results" onClick={changeLink}>
            <StackedNavAvatar name="Acme Pasta" />
            Acme Pasta
          </StackedNavLink>
          <StackedNavSub>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-pasta-raw-materials'}
                href="#acme-pasta-raw-materials"
                onClick={changeLink}
              >
                Raw materials
              </StackedNavLink>
              <StackedNavIndicator>
                <Beacon />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-pasta-sourcing'}
                href="#acme-pasta-sourcing"
                onClick={changeLink}
              >
                Sourcing
              </StackedNavLink>
              <StackedNavIndicator>
                <Beacon />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-pasta-production'}
                href="#acme-pasta-production"
                onClick={changeLink}
              >
                Production
              </StackedNavLink>
              <StackedNavIndicator>
                <Beacon />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-pasta-packaging'}
                href="#acme-pasta-packaging"
                onClick={changeLink}
              >
                Packaging
              </StackedNavLink>
              <StackedNavIndicator>
                <Icon name="check" />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-pasta-scope-delivery'}
                href="#acme-pasta-scope-delivery"
                onClick={changeLink}
              >
                Delivery
              </StackedNavLink>
              <StackedNavIndicator>
                <Icon name="check" />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-pasta-scope-use'}
                href="#acme-pasta-scope-use"
                onClick={changeLink}
              >
                Use
              </StackedNavLink>
              <StackedNavIndicator>
                <Beacon />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-pasta-scope-end-of-life'}
                href="#acme-pasta-scope-end-of-life"
                onClick={changeLink}
              >
                End of life
              </StackedNavLink>
              <StackedNavIndicator>
                <Beacon />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-pasta-land-use'}
                href="#acme-pasta-land-use"
                onClick={changeLink}
              >
                Land use
              </StackedNavLink>
              <StackedNavIndicator>
                <Beacon />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-pasta-results'}
                href="#acme-pasta-results"
                onClick={changeLink}
              >
                Results
              </StackedNavLink>
              <StackedNavIndicator>
                <Beacon />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#acme-pasta-settings'}
                href="#acme-pasta-settings"
                onClick={changeLink}
              >
                Product settings
              </StackedNavLink>
            </StackedNavItem>
          </StackedNavSub>
        </StackedNavItem>
        <StackedNavItem>
          <StackedNavLink
            active={href === '#acme-tofu'}
            href="#acme-tofu"
            onClick={changeLink}
          >
            <StackedNavAvatar name="Acme Tofu" />
            Acme Tofu
          </StackedNavLink>
        </StackedNavItem>
        <StackedNavItem>
          <StackedNavLink
            active={href === '#test-product'}
            href="#test-product"
            onClick={changeLink}
          >
            <StackedNavAvatar name="Test product" />
            Test product
          </StackedNavLink>
        </StackedNavItem>
        <StackedNavLabel>Assessments</StackedNavLabel>
        <StackedNavItem>
          <StackedNavLink href="#open-link-and-sub-nav" onClick={changeLink}>
            <StackedNavIcon name="seedling" />
            Crop production
          </StackedNavLink>
          <StackedNavSub>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#open-link-and-sub-nav'}
                href="#open-link-and-sub-nav"
                onClick={changeLink}
              >
                Crop model
              </StackedNavLink>
              <StackedNavIndicator>
                <Beacon />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#3'}
                href="#3"
                onClick={changeLink}
              >
                Another crop model
              </StackedNavLink>
              <StackedNavIndicator>
                <Beacon />
              </StackedNavIndicator>
            </StackedNavItem>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#4'}
                href="#4"
                onClick={changeLink}
              >
                Third crop model
              </StackedNavLink>
              <StackedNavIndicator>
                <Beacon />
              </StackedNavIndicator>
            </StackedNavItem>
          </StackedNavSub>
        </StackedNavItem>
        <StackedNavItem>
          <StackedNavLink active={href === '#5'} href="#5" onClick={changeLink}>
            <StackedNavIcon name="pig" />
            Pig meat
          </StackedNavLink>
        </StackedNavItem>
        <StackedNavItem>
          <StackedNavLink active={href === '#6'} href="#6" onClick={changeLink}>
            <StackedNavIcon name="egg" />
            Broiler meat
          </StackedNavLink>
        </StackedNavItem>
        <StackedNavItem>
          <StackedNavLink
            active={href === '#open-this-link-rather-than-sub-but-open-subnav'}
            href="#open-this-link-rather-than-sub-but-open-subnav"
            onClick={changeLink}
          >
            <StackedNavAvatar name="Model group" />
            Model group
          </StackedNavLink>
          <StackedNavSub>
            <StackedNavItem>
              <StackedNavLink
                active={href === '#parent-doesnt-set-this-active'}
                href="#parent-doesnt-set-this-active"
                onClick={changeLink}
              >
                Some model
              </StackedNavLink>
              <StackedNavIndicator>
                <Beacon />
              </StackedNavIndicator>
            </StackedNavItem>
          </StackedNavSub>
        </StackedNavItem>
        <StackedNavItem>
          <StackedNavLink
            active={href === '#open-link-but-dont-open-the-subnav'}
            href="#open-link-but-dont-open-the-subnav"
            initialSubNavOpen={false}
            onClick={changeLink}
          >
            <StackedNavAvatar name="Another group" />
            Another group
          </StackedNavLink>

          <StackedNavSub>
            <StackedNavItem>
              <StackedNavLink
                active={
                  href === '#parent-doesnt-set-this-active-or-open-the-subnav'
                }
                href="#parent-doesnt-set-this-active-or-open-the-subnav"
                onClick={changeLink}
              >
                Some model
              </StackedNavLink>
              <StackedNavIndicator>
                <Beacon />
              </StackedNavIndicator>
            </StackedNavItem>
          </StackedNavSub>
        </StackedNavItem>
      </StackedNav>
    );
  },
};

export const StackedNavStory: FC<StackedNavProps> = composeStory(
  StackedNavComponent,
  meta,
);
