import { Button } from '../Button';
import { getCurrentYear } from '../../lib/utils';
import { Link } from '../Link';
import { SERVICE_URL } from '../../lib/config';
import { type SiteFooterProps } from './';
import { Subtitle } from '../Subtitle';
import { WordmarkBiocode } from '../Wordmark';
import c from 'clsx';
import React, { type FC } from 'react';

export const SiteFooter: FC<SiteFooterProps> = ({
  className,
  language,
  environment,
  navigation,
}) => {
  const classes = c(className, 'b-SiteFooter');
  let biocodeURL, bottomText, youTubeText, linkedInText, facebookText;
  const fi = language === 'fi';

  switch (language) {
    case 'fi':
      bottomText = 'Hiilijalanjälkilaskuri maalaisjärjellä';
      facebookText = "Navigate to Biocode's Facebook page";
      linkedInText = "Navigate to Biocode's LinkedIn page";
      youTubeText = "Navigate to Biocode's Youtube page";
      break;
    default:
      bottomText = 'Carbon footprint calculator that makes sense';
      facebookText = 'Siirry Biocoden Facebook sivulle';
      linkedInText = 'Siirry Biocoden LinkedIn sivulle';
      youTubeText = 'Siirry Biocoden Youtube sivulle';
  }

  switch (environment) {
    case 'development':
      biocodeURL = SERVICE_URL.website.development.en;

      if (fi) {
        biocodeURL = SERVICE_URL.website.development.fi;
      }

      break;
    case 'staging':
      biocodeURL = SERVICE_URL.website.staging.en;

      if (fi) {
        biocodeURL = SERVICE_URL.website.staging.fi;
      }

      break;
    default:
      biocodeURL = SERVICE_URL.website.production.en;

      if (fi) {
        biocodeURL = SERVICE_URL.website.production.fi;
      }
  }

  return (
    <footer className={classes}>
      <div className="b-SiteFooter-wrap">
        <div className="b-SiteFooter-side">
          <a
            aria-label="Navigate to Biocode Home page"
            className="b-SiteFooter-wordmark"
            href={biocodeURL}
          >
            <WordmarkBiocode />
          </a>
        </div>
        <div className="b-SiteFooter-main">
          {navigation && (
            <nav className="b-SiteFooter-nav">
              <ul>
                {navigation.map((item, key: number) => (
                  <li
                    className={c('b-SiteFooter-nav-item', {
                      'is-active': item.active,
                    })}
                    key={key}
                  >
                    <div className="b-SiteFooter-nav-subtitle">
                      <Subtitle
                        color="strong"
                        marginBottom={{
                          base: 'small',
                          ml: 'medium',
                        }}
                        size="large"
                        tag="span"
                      >
                        {item.text}
                      </Subtitle>
                    </div>
                    {item.items?.length >= 0 && (
                      <ul className="b-SiteFooter-nav-sub">
                        {item.items.map((item, key: number) => (
                          <li key={key}>
                            <Link
                              aria-label={`Navigate to ${item.text} page`}
                              className="b-SiteFooter-nav-link"
                              color="var(--b-text-100)"
                              href={item.href}
                              size="large"
                              target={item.target}
                            >
                              {item.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
        <div className="b-SiteFooter-side b-SiteFooter-side--bottom">
          <Subtitle marginBottom={false} tag="span">
            &copy; {getCurrentYear()} Biocode
          </Subtitle>
          <div className="b-SiteFooter-icons">
            <Button
              href="https://www.facebook.com/people/Biocode/100089699333131"
              icon="facebook"
              justify="block"
              target="_blank"
              variant="plain"
            >
              {facebookText}
            </Button>
            <Button
              href="https://www.linkedin.com/company/biocode-oy"
              icon="linkedIn"
              justify="block"
              target="_blank"
              variant="plain"
            >
              {linkedInText}
            </Button>
            <Button
              href="https://www.youtube.com/channel/UCSMo0b1wPQFL6JT18KzZYzg"
              icon="youTube"
              justify="block"
              target="_blank"
              variant="plain"
            >
              {youTubeText}
            </Button>
          </div>
        </div>
        <div className="b-SiteFooter-main b-SiteFooter-main--bottom">
          {bottomText}
          <div className="b-SiteFooter-icons">
            <Button
              href="https://www.facebook.com/people/Biocode/100089699333131"
              icon="facebook"
              justify="block"
              size="xSmall"
              target="_blank"
              variant="plain"
            >
              {facebookText}
            </Button>
            <Button
              href="https://www.linkedin.com/company/biocode-oy"
              icon="linkedIn"
              justify="block"
              size="xSmall"
              target="_blank"
              variant="plain"
            >
              {linkedInText}
            </Button>
            <Button
              href="https://www.youtube.com/channel/UCSMo0b1wPQFL6JT18KzZYzg"
              icon="youTube"
              justify="block"
              size="xSmall"
              target="_blank"
              variant="plain"
            >
              {youTubeText}
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
