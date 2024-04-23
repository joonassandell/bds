import { type AccordionItemProps, type AccordionProps } from './';
import React, {
  createContext,
  type FC,
  type PropsWithChildren,
  useEffect,
  useState,
} from 'react';

/* =======================================
 * Accordion context
 * ======================================= */

export interface AccordionContextProps {
  value?: AccordionProps['value'];
}

const AccordionContext = createContext<AccordionContextProps>({
  value: undefined,
});

const AccordionProvider: FC<PropsWithChildren<AccordionContextProps>> = ({
  value,
  ...props
}) => <AccordionContext.Provider value={{ value }} {...props} />;

/* =======================================
 * AccordionItem context
 * ======================================= */

export interface AccordionItemContextProps {
  itemValue?: AccordionItemProps['value'];
}

const AccordionItemContext = createContext<AccordionItemContextProps>({
  itemValue: undefined,
});

const AccordionItemProvider: FC<
  PropsWithChildren<AccordionItemContextProps>
> = ({ itemValue, ...props }) => {
  const [itemVal, setItemVal] = useState(itemValue);

  useEffect(() => {
    setItemVal(itemValue);
  }, [itemValue]);

  return (
    <AccordionItemContext.Provider value={{ itemValue: itemVal }} {...props} />
  );
};

export {
  AccordionContext,
  AccordionProvider,
  AccordionItemContext,
  AccordionItemProvider,
};
