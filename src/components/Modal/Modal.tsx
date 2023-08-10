import { FC, ReactNode } from "react";
import styles from "./Modal.module.scss";
import cn from "clsx";

type Props = {
  className: string;
  children: ReactNode;
  onClose: () => void;
};

const Modal: FC<Props> = ({ className, children, onClose }) => {
  return (
    <div className={styles.backDrop}>
      <div className={cn(styles.modal, className)}>{children}</div>
    </div>
  );
};

export default Modal;
