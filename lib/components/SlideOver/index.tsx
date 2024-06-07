import React, { Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import s from "./styles.module.css";
export const SlideOver = ({
  children,
  open,
  setOpen,
  roundedCorners,
  disableBackdropClick,
}: {
  children: React.ReactNode;
  open: boolean;
  setOpen: (open: boolean) => void;
  roundedCorners: boolean;
  disableBackdropClick?: boolean;
}) => {
  return (
    <Transition show={open} as={Fragment}>
      <Dialog
        as="div"
        className={s["container"]}
        onClose={() => {
          if (!disableBackdropClick) {
            setOpen(false);
          }
        }}
      >
        <TransitionChild
          as={Fragment}
          enter={s["enter"]}
          enterFrom={s["enterFrom"]}
          enterTo={s["enterTo"]}
          leave={s["enter"]}
          leaveFrom={s["enterTo"]}
          leaveTo={s["enterFrom"]}
        >
          <div className={s["subContainer"]} />
        </TransitionChild>

        <div className={s["card"]}>
          <div className={s["subCard"]}>
            <div className={s["child"]}>
              <TransitionChild
                as={Fragment}
                enter={s["childEnter"]}
                enterFrom={s["leave"]}
                enterTo="translate-x-0"
                leave={s["childEnter"]}
                leaveTo={s["leave"]}
              >
                <DialogPanel
                  className={`${s.panel} ${roundedCorners ? s.rounded : ""}`}
                >
                  <div className={s.panelChild}>
                    <div className={s["panel-sub-child"]}>{children}</div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SlideOver;
