import { type Environment, type Language } from '../../types';
import { type HTMLAttributeAnchorTarget } from 'react';

export interface SiteFooterProps {
  /**
   * CSS class
   */
  className?: string;

  /**
   * Defined in which environment this component is used
   */
  environment?: Environment;

  /**
   * Language of the navbar. By default 'en'.
   */
  language?: Language;

  /**
   * Navigation items
   */
  navigation: {
    active?: boolean;
    href: string;
    items: {
      active?: boolean;
      description?: string;
      href: string;
      target?: HTMLAttributeAnchorTarget;
      text: string;
    }[];
    target?: HTMLAttributeAnchorTarget;
    text: string;
  }[];
}
