import { getCssSpaceHelpers } from '../../lib/utils';
import { HELPER } from '../../lib/config';
import { omit } from 'ramda';
import { Root } from '@radix-ui/react-separator';
import { type SeparatorProps } from './';
import c from 'clsx';
import React, { type FC } from 'react';

export const Separator: FC<SeparatorProps> = ({
  className,
  border = 'small',
  color,
  decorative = true,
  ...props
}) => {
  const classes = c(className, 'b-Separator', {
    '-border:size:l': border === 'large',
    ...getCssSpaceHelpers(props),
  });
  const restProps = omit(HELPER, props);

  return (
    <Root
      className={classes}
      decorative={decorative}
      style={{
        ['--b-Separator-color' as string]: color,
      }}
      {...restProps}
    />
  );
};
