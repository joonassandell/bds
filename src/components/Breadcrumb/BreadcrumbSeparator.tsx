import { type BreadcrumbSeparatorProps } from './';
import { Icon } from '../Icon';
import React, { type FC } from 'react';

export const BreadcrumbSeparator: FC<BreadcrumbSeparatorProps> = () => (
  <div aria-hidden className="b-Breadcrumb-separator">
    <Icon name="caretRight" size="xSmall" />
  </div>
);
