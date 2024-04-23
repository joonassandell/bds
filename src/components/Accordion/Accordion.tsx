import { type AccordionProps } from './';
import { AccordionProvider } from './Accordion.context';
import { getCssSpaceHelpers } from '../../lib/utils';
import { HELPER } from '../../lib/config';
import { Root } from '@radix-ui/react-accordion';
import c from 'clsx';
import omit from 'ramda/es/omit';
import React, { type FC } from 'react';

export const Accordion: FC<AccordionProps> = ({
  children,
  className,
  value,
  ...props
}) => {
  const classes = c(className, 'b-Accordion', {
    ...getCssSpaceHelpers(props),
  });
  const restProps = omit(HELPER, props);

  return (
    <AccordionProvider value={value}>
      <Root
        className={classes}
        collapsible={true}
        type="single"
        value={value}
        {...restProps}
      >
        {children}
      </Root>
    </AccordionProvider>
  );
};
