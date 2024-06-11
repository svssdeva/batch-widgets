import React, { FC } from "react";
import { cn } from "../../utils";
import s from "./styles.module.css";

interface SlideOverProps {
  side?: "left" | "right";
  children: React.ReactNode;
  isOpen: boolean;

  onClose: () => void;
  roundedCorners?: boolean;
  containerClassName?: string;
  backDropClassName?: string;
  backdropClick?: boolean;
}

const SlideOver: FC<SlideOverProps> = ({
  side = "right",
  children,
  isOpen,

  onClose,
  roundedCorners = true,
  containerClassName,
  backDropClassName,
  backdropClick = true,
}) => {
  const handleBackdropClick = () => {
    if (backdropClick) {
      onClose();
    }
  };

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
        onClick={handleBackdropClick}
      ></div>
    </>
  );
};

export { SlideOver };
