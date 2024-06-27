import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionContent({ className, children }) {
  const itemId = useAccordionItemContext();
  const { openItemId } = useAccordionContext();
  const isOpen = openItemId === itemId;

  return (
    <div className={isOpen ? `${className} open` : `${className} closed`}>
      {children}
    </div>
  );
}
