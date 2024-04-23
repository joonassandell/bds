import { type AccordionPanelProps } from './';
import { AnimatePresence, m } from 'framer-motion';
import { Content } from '@radix-ui/react-accordion';
import { TRANS_DEFAULT_M } from '../../lib/config';
import { useAccordion, useAccordionItem } from './Accordion.utils';
import c from 'clsx';
import React, { type FC, useMemo } from 'react';

export const AccordionPanel: FC<AccordionPanelProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = c(className, 'b-Accordion-panel');

  const { value } = useAccordion();
  const { itemValue } = useAccordionItem();
  const isOpen = useMemo(() => value === itemValue, [value, itemValue]);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <m.div
          animate="open"
          className={classes}
          exit="collapsed"
          initial="collapsed"
          key="content"
          transition={TRANS_DEFAULT_M}
          variants={{
            collapsed: { height: 0 },
            open: { height: 'auto' },
          }}
        >
          <Content forceMount {...props}>
            {children}
          </Content>
        </m.div>
      )}
    </AnimatePresence>
  );
};
