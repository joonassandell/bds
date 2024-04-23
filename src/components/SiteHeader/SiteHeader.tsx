import { Aside, AsideBox, AsideClose, AsideMain, AsideTrigger } from '../Aside';
import { Avatar } from '../Avatar';
import { Button, type ButtonProps, Buttons } from '../Button';
import { Link } from '../Link';
import { markByString } from '../Mark/Mark';
import { MarkReportSmall, MarkReportSmallMuted } from '../Mark';
import {
  Menu,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuText,
  MenuTrigger,
} from '../Menu';
import { Separator } from '../Separator';
import { SERVICE_URL } from '../../lib/config';
import { type SiteHeaderMenuItem, type SiteHeaderProps } from './';
import {
  StackedNav,
  StackedNavIcon,
  StackedNavItem,
  StackedNavLink,
  StackedNavSub,
} from '../StackedNav';
import { useTheme } from '../Theme';
import { WordmarkBiocode } from '../Wordmark';
import c from 'clsx';
import React, {
  type FC,
  Fragment,
  useCallback,
  useEffect,
  useState,
} from 'react';

export const SiteHeader: FC<SiteHeaderProps> = ({
  className,
  contactActive,
  environment = 'production',
  language = 'en',
  languageItems,
  navigation,
  reportActive,
}) => {
  const [asideOpen, setAsideOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const classes = c(className, 'b-SiteHeader', {
    'is-scrolled': scrolled,
  });
  let biocodeURL: string,
    contactText: string,
    contactURL: string,
    languageText: string,
    loginText: string,
    logInURL: string,
    logoText: string,
    menuText: string,
    reportText: string,
    reportURL: string,
    signUpText: string,
    signUpURL: string,
    asideCloseLabel: string,
    themeToggleText: string;
  const fi = language === 'fi';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 24);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  switch (language) {
    case 'fi':
      asideCloseLabel = 'Sulje valikko';
      contactText = 'Yhteystiedot';
      languageText = 'Fi';
      logoText = 'Siirry etusivulle';
      loginText = 'Kirjaudu';
      menuText = 'Valikko';
      reportText = 'Laskennat';
      signUpText = 'Kokeile nyt';
      themeToggleText = 'Vaihda dark tai light teema';
      break;
    default:
      asideCloseLabel = 'Close menu';
      contactText = 'Contact';
      languageText = 'En';
      logoText = 'Navigate to homepage';
      loginText = 'Log in';
      menuText = 'Menu';
      reportText = 'Calculations';
      signUpText = 'Try free';
      themeToggleText = 'Change dark or light theme';
  }

  switch (environment) {
    case 'development':
      biocodeURL = SERVICE_URL.website.development.en;
      contactURL = SERVICE_URL.website.development.contact.en;
      logInURL = SERVICE_URL.logIn.development.en;
      reportURL = SERVICE_URL.report.development.en;
      signUpURL = SERVICE_URL.signUp.development.en;

      if (fi) {
        biocodeURL = SERVICE_URL.website.development.fi;
        contactURL = SERVICE_URL.website.development.contact.fi;
        logInURL = SERVICE_URL.logIn.development.fi;
        reportURL = SERVICE_URL.report.development.fi;
        signUpURL = SERVICE_URL.signUp.development.fi;
      }

      break;
    case 'staging':
      biocodeURL = SERVICE_URL.website.staging.en;
      contactURL = SERVICE_URL.website.staging.contact.en;
      logInURL = SERVICE_URL.logIn.staging.en;
      reportURL = SERVICE_URL.report.staging.en;
      signUpURL = SERVICE_URL.signUp.staging.en;

      if (fi) {
        biocodeURL = SERVICE_URL.website.staging.fi;
        contactURL = SERVICE_URL.website.staging.contact.fi;
        logInURL = SERVICE_URL.logIn.staging.fi;
        reportURL = SERVICE_URL.report.staging.fi;
        signUpURL = SERVICE_URL.signUp.staging.fi;
      }

      break;
    default:
      biocodeURL = SERVICE_URL.website.production.en;
      contactURL = SERVICE_URL.website.production.contact.en;
      logInURL = SERVICE_URL.logIn.production.en;
      reportURL = SERVICE_URL.report.production.en;
      signUpURL = SERVICE_URL.signUp.production.en;

      if (fi) {
        biocodeURL = SERVICE_URL.website.production.fi;
        contactURL = SERVICE_URL.website.production.contact.fi;
        logInURL = SERVICE_URL.logIn.production.fi;
        reportURL = SERVICE_URL.report.production.fi;
        signUpURL = SERVICE_URL.signUp.production.fi;
      }
  }

  const ThemeToggleButton = useCallback(
    (props: ButtonProps) => {
      if (!theme) return null;
      return (
        <Button
          color="var(--b-text-100)"
          icon={theme === 'light' ? 'night' : 'day'}
          iconSize="small"
          justify="block"
          onClick={() =>
            theme === 'light' ? setTheme('dark') : setTheme('light')
          }
          variant="plain"
          {...props}
        >
          {themeToggleText}
        </Button>
      );
    },
    [theme, themeToggleText, setTheme],
  );

  return (
    <header className={classes}>
      <div className="b-SiteHeader-inner">
        <div className="b-SiteHeader-wrap">
          <div className="b-SiteHeader-side">
            <a
              aria-label={logoText}
              className="b-SiteHeader-wordmark"
              href={biocodeURL}
            >
              <WordmarkBiocode />
            </a>
          </div>
          <div className="b-SiteHeader-main">
            {navigation?.length > 0 && (
              <nav className="b-SiteHeader-nav">
                <ul>
                  {navigation.map((item, key) => (
                    <NavItem {...item} key={key} />
                  ))}
                  <li>
                    <Separator
                      border="small"
                      className="b-SiteHeader-buttons-separator"
                      color="var(--b-border-mute-200)"
                      decorative={false}
                      orientation="vertical"
                    />
                  </li>
                  <li
                    className={c(
                      'b-SiteHeader-nav-item b-SiteHeader-nav-item--icon',
                      {
                        'is-active': reportActive,
                      },
                    )}
                  >
                    <Link
                      className="b-SiteHeader-nav-link"
                      href={reportURL}
                      size="large"
                    >
                      <span className="b-SiteHeader-nav-item-icon b-SiteHeader-nav-item-icon--hover">
                        <MarkReportSmall />
                      </span>
                      <span className="b-SiteHeader-nav-item-icon">
                        <MarkReportSmallMuted />
                      </span>
                      {reportText}
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
            <Buttons className="b-SiteHeader-buttons" flexWrap="nowrap">
              <Buttons
                className="b-SiteHeader-buttons-icon"
                flexWrap="nowrap"
                gap="2xSmall"
              >
                <ThemeToggleButton />
                {languageItems && (
                  <Menu onOpenChange={setLangOpen} open={langOpen}>
                    <MenuTrigger asChild>
                      <Button
                        className="b-SiteHeader-buttons-languageSwitcher"
                        color="var(--b-text-100)"
                        icon="globe"
                        textStyle="subtitle"
                        variant="plain"
                      >
                        {languageText}
                      </Button>
                    </MenuTrigger>
                    <MenuContent align="end" width="fit">
                      {languageItems.map((item, i) => (
                        <MenuItem asChild key={i}>
                          <a href={item.href}>
                            <MenuText>{item.text}</MenuText>
                          </a>
                        </MenuItem>
                      ))}
                    </MenuContent>
                  </Menu>
                )}
              </Buttons>
              <Link
                className="b-SiteHeader-buttons-contact"
                color="var(--b-text-100)"
                href={contactURL}
              >
                {contactText}
              </Link>
              <Separator
                border="small"
                className="b-SiteHeader-buttons-separator"
                color="var(--b-border-mute-200)"
                decorative={false}
                orientation="vertical"
              />
              <Link color="var(--b-text-100)" href={logInURL}>
                {loginText}
              </Link>
              <Button href={signUpURL} variant="primary">
                {signUpText}
              </Button>
              <Aside
                align="right"
                className="b-SiteHeader-aside"
                close={false}
                closeAriaLabel={asideCloseLabel}
                onOpenChange={setAsideOpen}
                open={asideOpen}
                titleAriaLabel={menuText}
              >
                <AsideTrigger asChild>
                  <Button
                    className="b-SiteHeader-buttons-menu"
                    icon="hamburger"
                    iconSize="medium"
                    justify="block"
                    variant="plain"
                  >
                    {menuText}
                  </Button>
                </AsideTrigger>
                <AsideMain>
                  <AsideBox>
                    <Buttons gap="xSmall" justifyContent="end">
                      <ThemeToggleButton color="var(--b-text-200)" />
                      <AsideClose asChild>
                        <Button
                          className="b-SiteHeader-aside-menu"
                          icon="hamburger"
                          iconSize="medium"
                          justify="block"
                          variant="plain"
                        >
                          {menuText}
                        </Button>
                      </AsideClose>
                    </Buttons>
                  </AsideBox>
                  <StackedNav marginBottom="base">
                    {navigation?.map((item, key) => {
                      const { active, href, target, text } = item;

                      return (
                        <StackedNavItem
                          className="b-SiteHeader-asideNav-item"
                          key={key}
                        >
                          <StackedNavLink
                            active={active}
                            className="b-SiteHeader-asideNav-link"
                            href={href}
                            initialSubNavOpen={false}
                            {...(target && { target })}
                          >
                            {text}
                          </StackedNavLink>
                          {item.items && (
                            <StackedNavSub>
                              {item.items.map((item, key) => {
                                const { active, href, target, text } = item;

                                return (
                                  <StackedNavItem
                                    className={c('b-SiteHeader-asideNav-item')}
                                    key={key}
                                  >
                                    <StackedNavLink
                                      active={active}
                                      href={href}
                                      {...(target && { target })}
                                    >
                                      {text}
                                    </StackedNavLink>
                                  </StackedNavItem>
                                );
                              })}
                            </StackedNavSub>
                          )}
                        </StackedNavItem>
                      );
                    })}
                    <StackedNavItem>
                      <StackedNavLink active={contactActive} href={contactURL}>
                        {contactText}
                      </StackedNavLink>
                    </StackedNavItem>
                  </StackedNav>
                  <Separator
                    border="small"
                    decorative={false}
                    orientation="horizontal"
                  />
                  <StackedNav marginBottom="base" marginTop="base">
                    <StackedNavItem>
                      <StackedNavLink active={reportActive} href={reportURL}>
                        <StackedNavIcon name="reportSmall" />
                        {reportText}
                      </StackedNavLink>
                    </StackedNavItem>
                  </StackedNav>
                  <Separator
                    border="small"
                    decorative={false}
                    orientation="horizontal"
                  />
                  {languageItems && (
                    <StackedNav marginBottom="4xLarge" marginTop="base">
                      {languageItems.map((item, key) => (
                        <StackedNavItem key={key}>
                          <StackedNavLink href={item.href}>
                            {item.text}
                          </StackedNavLink>
                        </StackedNavItem>
                      ))}
                    </StackedNav>
                  )}
                </AsideMain>
              </Aside>
            </Buttons>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavItem = ({ ...props }: SiteHeaderMenuItem) => {
  const [open, setOpen] = useState(false);

  return (
    <li
      className={c('b-SiteHeader-nav-item', {
        'is-active': props.active,
      })}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        className="b-SiteHeader-nav-link"
        href={props.href}
        size="large"
        target={props.target}
      >
        <span className="b-textTruncate">{props.text}</span>
      </Link>
      {props.items && (
        <Menu onOpenChange={setOpen} open={open}>
          <MenuTrigger asChild>
            <Button
              icon="arrowDown"
              justify="block"
              size="xSmall"
              variant="secondary"
            >
              {props.text}
            </Button>
          </MenuTrigger>
          <MenuContent
            align="center"
            width={
              props.items.some(item => item.description) ? 'xLarge' : undefined
            }
          >
            {props.items.map((item, i, row) => {
              const { mark, href, target, text, description } = item;
              if (mark) {
                return (
                  <Fragment key={i}>
                    <MenuItem asChild>
                      <a href={href} {...(target && { target })}>
                        <Avatar
                          image={markByString(mark)}
                          meta
                          name={text}
                          nameTruncate={false}
                          text={description}
                          textTruncate={false}
                        />
                      </a>
                    </MenuItem>
                    {i + 1 != row.length && <MenuSeparator />}
                  </Fragment>
                );
              }

              return (
                <MenuItem asChild key={i}>
                  <a href={href} {...(target && { target })}>
                    <MenuText>{text}</MenuText>
                  </a>
                </MenuItem>
              );
            })}
          </MenuContent>
        </Menu>
      )}
    </li>
  );
};
