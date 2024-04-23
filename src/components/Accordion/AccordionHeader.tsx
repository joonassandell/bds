import { type AccordionHeaderProps } from './';
import { AccordionIcon } from './AccordionIcon';
import { AccordionTrigger } from '@radix-ui/react-accordion';
import { Flex } from '../Flex';
import { getCssSpaceHelpers } from '../../lib/utils';
import { HELPER } from '../../lib/config';
import c from 'clsx';
import omit from 'ramda/es/omit';
import React, { type FC } from 'react';

export const AccordionHeader: FC<AccordionHeaderProps> = ({
  children,
  className,
  layout = 'default',
  ...props
}) => {
  const classes = c('b-Accordion-header', className, {
    'b-Accordion-header--default': layout === 'default',
    ...getCssSpaceHelpers(props),
  });
  const restProps = omit(HELPER, props);

  if (layout === 'custom') {
    return (
      <header className={classes} {...restProps}>
        <AccordionTrigger className="b-Accordion-trigger">
          {children}
        </AccordionTrigger>
      </header>
    );
  }

  return (
    <header className={classes} {...restProps}>
      <Flex alignItems="center" asChild justifyContent="space-between">
        <AccordionTrigger className="b-Accordion-trigger">
          {children}
          <AccordionIcon />
        </AccordionTrigger>
      </Flex>
    </header>
  );
};
