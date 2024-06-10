// src/FAQAccordion.tsx
import React, { useState } from "react";
import { renderIcon } from "../../utils";
import s from "./styles.module.css";

interface FAQAccordionProps {
  question?: string;
  answer?: string;
  UpIcon?: React.ReactNode;
  DownIcon?: React.ReactNode;
}
const Accordion: React.FC<FAQAccordionProps> = ({
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

export { Accordion };
