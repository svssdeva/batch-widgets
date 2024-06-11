// src/FAQAccordion.tsx
import React, { useState } from "react";
import { cn, renderIcon } from "../../utils";
import s from "./styles.module.css";

interface FAQAccordionProps {
  question?: string;
  answer?: string;
  upIcon?: React.ReactNode;
  downIcon?: React.ReactNode;
  containerClassName?: string;
  contentClassName?: string;
  questionClassName?: string;
}
const Accordion: React.FC<FAQAccordionProps> = ({
  question,
  answer,
  upIcon,
  downIcon,
  containerClassName,
  questionClassName,
  contentClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn(s.faqitem, containerClassName)}>
      <div className={cn(s.faqquestion, questionClassName)} onClick={toggleFAQ}>
        {question}
        {isOpen ? renderIcon(upIcon) : renderIcon(downIcon)}
      </div>
      <div className={cn(s.faqanswer, { [s.open]: isOpen }, contentClassName)}>
        <span
          className={s.ans}
          dangerouslySetInnerHTML={{ __html: answer || "" }}
        ></span>
      </div>
    </div>
  );
};

export { Accordion };
