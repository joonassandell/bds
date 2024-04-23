import { type Environment, type Language } from '../../types';
import { type HTMLAttributeAnchorTarget } from 'react';
import { type MarkString } from '../Mark';

export interface SiteHeaderProps {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Set the contact link active
   */
  contactActive?: boolean;

  /**
   * Defined in which environment this component is used.
   */
  environment?: Environment;

  /**
   * Language of the navbar. By default 'en'.
   */
  language?: Language;

  /**
   * Language links
   */
  languageItems?: {
    href: string;
    text: string;
  }[];

  /**
   * Navigation items
   */
  navigation: SiteHeaderMenuItem[];

  /**
   * Set the report link active
   */
  reportActive?: boolean;
}

export interface SiteHeaderMenuItem {
  active?: boolean;
  href: string;
  items?: {
    active?: boolean;
    description?: string;
    href: string;
    mark?: MarkString;
    target?: HTMLAttributeAnchorTarget;
    text: string;
  }[];
  target?: HTMLAttributeAnchorTarget;
  text: string;
}
