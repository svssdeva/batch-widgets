import cn from "clsx";
import React from "react";
import s from "./styles.module.css";

export interface CardProps {
  children: any;
  disabled?: boolean;
  expanded?: boolean;
}

const Card: React.FC<CardProps> = ({ children, expanded, disabled }) => {
  const rootClassName = cn(
    s.root,
    {
      [" hover:pw-ui-shadow-lg"]: !disabled,
      ["pw-ui-opacity-60 "]: disabled,
      ["pw-ui-h-full pw-ui-w-full "]: expanded,
    },
    "pw-ui-transition-all pw-ui-duration-200 pw-uirounded-lg pw-ui-bg-white ",
  );

  return <div className={rootClassName}>{children}</div>;
};

export { Card };
