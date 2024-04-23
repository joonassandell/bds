import { type AccordionIconProps } from './';
import { Icon } from '../Icon';
import { m } from 'framer-motion';
import { TRANS_DEFAULT_M } from '../../lib/config';
import { useAccordion, useAccordionItem } from './Accordion.utils';
import React, { type FC, useMemo } from 'react';

export const AccordionIcon: FC<AccordionIconProps> = ({
  icon = { close: 'minus', open: 'plus' },
  ...props
}) => {
  const { value } = useAccordion();
  const { itemValue } = useAccordionItem();
  const open = useMemo(() => value === itemValue, [value, itemValue]);
  const isDefaultIcon = icon.open === 'plus' && icon.close === 'minus';

  return isDefaultIcon ? (
    <m.span
      animate={open ? 'open' : 'closed'}
      className="b-Accordion-icon"
      initial={false}
      transition={TRANS_DEFAULT_M}
    >
      <svg viewBox="0 0 32 32">
        <Path
          variants={{
            closed: { d: 'M 16 5 L 16 27' },
            open: { d: 'M 5 16 L 27 16' },
          }}
        />
        <Path d="M 5 16 L 27 16" />
      </svg>
    </m.span>
  ) : (
    <Icon name={open ? icon?.open : icon?.close} {...props} />
  );
};

export const Path = (props: any) => (
  <m.path
    fill="transparent"
    stroke="var(--b-text-50)"
    strokeLinecap="round"
    strokeWidth="3"
    {...props}
  />
);
