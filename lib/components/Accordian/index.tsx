// src/FAQAccordion.tsx
import React, { useState } from "react";
import s from "./styles.module.css";
import { renderIcon } from "../../utils";

interface FAQAccordionProps {
  question?: string;
  answer?: string;
  UpIcon?: React.ReactNode;
  DownIcon?: React.ReactNode;
}

export const Accordion: React.FC<FAQAccordionProps> = ({
  question,
  answer,
  UpIcon,
  DownIcon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.faqitem}>
      <div className={s.faqquestion} onClick={toggleFAQ}>
        {question}
        {isOpen ? renderIcon(UpIcon) : renderIcon(DownIcon)}
      </div>
      {isOpen && <div className={s.faqanswer}>{answer}</div>}
    </div>
  );
};

export default Accordion;
