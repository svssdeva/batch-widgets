// src/FAQAccordion.tsx
import React, { useState } from "react";
import { renderIcon } from "../../utils";
import s from "./styles.module.css";


interface FAQAccordionProps {
  question?: string;
  answer?: string;
  upIcon?: React.ReactNode;
  downIcon?: React.ReactNode;
}
const Accordion: React.FC<FAQAccordionProps> = ({
  question,
  answer,
  upIcon,
  downIcon,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.faqitem}>
      <div className={s.faqquestion} onClick={toggleFAQ}>
        {question}
        {isOpen ? renderIcon(upIcon) : renderIcon(downIcon)}
      </div>
       <div    className={`${s.faqanswer} ${isOpen ? s.open : ""}`} >
      <span className={s.ans} dangerouslySetInnerHTML={{ __html: answer || '' }}></span>
          </div>
    </div>
  );
};

export { Accordion };
