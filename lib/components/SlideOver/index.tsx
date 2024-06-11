import React, { FC } from 'react';
import s from './styles.module.css';

interface SlideOverProps {
  side?: 'left' | 'right';

  children: React.ReactNode;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  roundedCorners?: boolean;
}

const SlideOver: FC<SlideOverProps> = ({ side = 'right', children, isOpen, onOpen, onClose,roundedCorners =true, }) => {
  console.log(onOpen);
  return (
    <>
      <div
        className={`${s.slideover} ${roundedCorners? s.corners:''} ${side === 'right' ? s.right : s.left} ${isOpen ? s.one : side === 'right' ? s.two : s.three}`}
       
      >
       
        {children}
      </div>
      <div
        className={`${s.backdrop} ${isOpen ? s.open : s.close}`}
        onClick={onClose}
      ></div>
    </>
  );
};

export { SlideOver };
