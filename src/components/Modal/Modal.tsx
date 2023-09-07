import { FC, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./Modal.module.scss";
import cn from "clsx";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";
import { TRANSITION_TIME } from "../../constants";

type Props = {
  className?: string;
  children: ReactNode;
  variant?: string;
  isOpen: boolean;
  onClose: () => void;
};

const portal = document.getElementById("portal")!;

const Modal: FC<Props> = ({ className, children, isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackDropClick = (event: any) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.backDrop} onClick={handleBackDropClick}>
      <div className={cn(styles.modal, className)}>{children}</div>
    </div>,

    portal
  );
};

export default Modal;
