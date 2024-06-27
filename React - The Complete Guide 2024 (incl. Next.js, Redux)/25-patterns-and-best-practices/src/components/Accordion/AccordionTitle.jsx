import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionTitle({ children, className }) {
  const itemId = useAccordionItemContext();
  const { toggleItem } = useAccordionContext();
  return (
    <h3 onClick={() => toggleItem(itemId)} className={className}>
      {children}
    </h3>
  );
}
