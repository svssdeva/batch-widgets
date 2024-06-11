import React, { FC, ReactNode, useEffect, useRef } from 'react';
import s from './styles.module.css';

interface CustomModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;

}

const CustomModal: FC<CustomModalProps> = ({ children, open, onClose, }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
      dialogRef.current?.classList.add('pw-ui-animate-fadeIn');
      dialogRef.current?.classList.remove('pw-ui-animate-fadeOut');
    } else {
      dialogRef.current?.classList.remove('pw-ui-animate-fadeIn');
      dialogRef.current?.classList.add('pw-ui-animate-fadeOut');
      setTimeout(() => {
        dialogRef.current?.close();
      }, 300);
    }
  }, [open]);

  const handleClose = () => {
    dialogRef.current?.classList.remove('animate-fadeIn');
    dialogRef.current?.classList.add('animate-fadeOut');
    setTimeout(() => {
      dialogRef.current?.close();
      onClose();
    }, 300);
  };

  const handleBackdropClick = (event: React.MouseEvent) => {
    if ( event.target === dialogRef.current) {
      handleClose();
    }
  };

  return (
    <>
     {open && <div className={s['modal-backdrop']} />}
    <dialog
      ref={dialogRef}
      className={s['modal-dialog']}
      onClick={handleBackdropClick}
      onClose={handleClose}
     
    >
      {children}
    </dialog>
    </>
  );
};

export { CustomModal };
