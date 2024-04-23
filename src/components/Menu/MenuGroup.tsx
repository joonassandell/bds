import { getCssSpaceHelpers } from '../../lib/utils';
import { Group, Label } from '@radix-ui/react-dropdown-menu';
import { HELPER } from '../../lib/config';
import { type MenuGroupProps } from './';
import { omit } from 'ramda';
import { Subtitle } from '../Subtitle';
import c from 'clsx';
import React, { forwardRef } from 'react';

export const MenuGroup = forwardRef<HTMLDivElement, MenuGroupProps>(
  (
    { children, className, label, labelVariant = 'subtitle', ...props },
    forwardedRef,
  ) => {
    const classes = c('b-Menu-group', className, {
      ...getCssSpaceHelpers(props),
    });
    const omitProps = omit(HELPER, props);

    return (
      <Group className={classes} ref={forwardedRef} {...omitProps}>
        {label && labelVariant === 'subtitle' && (
          <Label asChild className="b-Menu-label">
            <Subtitle>{label}</Subtitle>
          </Label>
        )}
        {label && labelVariant === 'text' && (
          <Label className="b-Menu-label">{label}</Label>
        )}
        {children}
      </Group>
    );
  },
);
