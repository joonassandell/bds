import { ConditionalWrapper } from '../ConditionalWrapper';
import { type ListItemHeadingTextProps } from './';
import { TooltipIfTruncated } from '../Tooltip';
import c from 'clsx';
import React, { type FC } from 'react';

export const ListItemHeadingText: FC<ListItemHeadingTextProps> = ({
  children,
  className,
  truncateTooltip,
  truncate,
}) => {
  const classes = c('b-List-heading-text', className, {
    'b-textTruncate': truncate,
  });

  return (
    <ConditionalWrapper
      condition={!!truncate}
      wrapper={wrapperChildren => (
        <TooltipIfTruncated tooltipContent={truncateTooltip ?? children}>
          {wrapperChildren}
        </TooltipIfTruncated>
      )}
    >
      <span className={classes}>{children}</span>
    </ConditionalWrapper>
  );
};
