import React, { FC } from "react";
import { cn } from "../../utils";
import s from "./styles.module.css";

interface SlideOverProps {
  side?: "left" | "right";

  children: React.ReactNode;
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
  roundedCorners?: boolean;
  containerClassName?: string;
  backDropClassName?: string;
}

const SlideOver: FC<SlideOverProps> = ({
  side = "right",
  children,
  isOpen,
  onOpen,
  onClose,
  roundedCorners = true,
  containerClassName,
  backDropClassName,
}) => {
  console.log(onOpen);
  return (
    <>
      <div
        className={cn(
          s.slideover,
          side === "right" ? s.right : s.left,
          isOpen ? s.one : side === "right" ? s.two : s.three,
          {
            [s.corners]: roundedCorners,
          },
          containerClassName,
        )}
      >
        {children}
      </div>
      <div
        className={cn(s.backdrop, isOpen ? s.open : s.close, backDropClassName)}
        onClick={onClose}
      ></div>
    </>
  );
};

export { SlideOver };
// `${s.slideover} ${roundedCorners? s.corners:''} ${side === 'right' ? s.right : s.left} ${isOpen ? s.one : side === 'right' ? s.two : s.three}`
