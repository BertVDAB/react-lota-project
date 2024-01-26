import { faqs } from "./faqData";
import AccordionItem from "./AccordionItem";

import "./Accordion.css";

const Accordion = () => {
  return (
    <ul className="accordion">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} faq={faq} />
      ))}
    </ul>
  );
};

export default Accordion;
