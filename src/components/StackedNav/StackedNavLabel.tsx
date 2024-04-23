import { getCssSpaceHelpers } from '../../lib/utils';
import { type StackedNavLabelProps } from './';
import { Subtitle } from '../Subtitle';
import c from 'clsx';
import React, { type FC } from 'react';

export const StackedNavLabel: FC<StackedNavLabelProps> = ({
  children,
  ...props
}) => {
  const classes = c('b-StackedNav-label', {
    ...getCssSpaceHelpers(props),
  });
  return <Subtitle className={classes}>{children}</Subtitle>;
};
