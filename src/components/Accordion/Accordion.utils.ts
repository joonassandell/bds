import { AccordionContext, AccordionItemContext } from './Accordion.context';
import { useContext } from 'react';

const useAccordionItem = () => useContext(AccordionItemContext);
const useAccordion = () => useContext(AccordionContext);

export { useAccordion, useAccordionItem };
