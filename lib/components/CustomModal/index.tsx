import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment } from "react";
import s from "./styles.module.css";
interface customModalProps {
  isOpen: boolean;
  setOpen: (_o: boolean) => void;
  children?: any;
  panelclassName?: string;
}
export const CustomModal = ({
  panelclassName = "",
  isOpen,
  setOpen,
  children,
}: customModalProps) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className={s["dialog-div"]} onClose={setOpen}>
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className={s["transition-child-div"]} />
        </TransitionChild>

        <div className={s["container"]}>
          <div className={s["sub-container"]}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className={`${s.panel} ${panelclassName}  `}>
                {children}
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CustomModal;
