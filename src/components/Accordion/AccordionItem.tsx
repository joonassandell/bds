import { type AccordionItemProps } from './';
import { AccordionItemProvider } from './Accordion.context';
import { getCssSpaceHelpers } from '../../lib/utils';
import { HELPER } from '../../lib/config';
import { AccordionItem as Item } from '@radix-ui/react-accordion';
import c from 'clsx';
import omit from 'ramda/es/omit';
import React, { type FC } from 'react';

export const AccordionItem: FC<AccordionItemProps> = ({
  children,
  className,
  value,
  ...props
}) => {
  const classes = c(className, 'b-Accordion-item', {
    ...getCssSpaceHelpers(props),
  });
  const restProps = omit(HELPER, props);

  return (
    <AccordionItemProvider itemValue={value}>
      <Item className={classes} value={value} {...restProps}>
        {children}
      </Item>
    </AccordionItemProvider>
  );
};
