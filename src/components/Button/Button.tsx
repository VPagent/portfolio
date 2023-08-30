import styles from "./Button.module.scss";
import { FC, ReactNode } from "react";
import cn from "clsx";

type Props = {
  children: ReactNode | string;
  className?: string;
  type?: string;
  onClick: () => void;
};

const Button: FC<Props> = ({ children, className, type, onClick }) => {
  const isIconBtn = type === "icon";
  return (
    <button
      className={cn(!isIconBtn ? styles.button : styles.iconButton, className)}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
