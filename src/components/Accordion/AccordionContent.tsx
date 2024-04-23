import { type AccordionContentProps } from './';
import { getCssSpaceHelpers } from '../../lib/utils';
import { HELPER } from '../../lib/config';
import c from 'clsx';
import omit from 'ramda/es/omit';
import React, { type FC } from 'react';

export const AccordionContent: FC<AccordionContentProps> = ({
  children,
  className,
  paddingTop = 'small',
  ...props
}) => {
  const classes = c(className, 'b-Accordion-content', {
    ...getCssSpaceHelpers({ paddingTop, ...props }),
  });
  const restProps = omit(HELPER, props);

  return (
    <div className={classes} {...restProps}>
      {children}
    </div>
  );
};
