import styles from "./Button.module.scss";
import { FC, ReactNode, SyntheticEvent } from "react";
import cn from "clsx";

type Props = {
  children: ReactNode | string;
  className?: string;
  type?: string;
  name?: string;
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => void;
};

const Button: FC<Props> = ({ children, className, type, name, onClick }) => {
  const isIconBtn = type === "icon";
  return (
    <button
      className={cn(!isIconBtn ? styles.button : styles.iconButton, className)}
      onClick={(e) => onClick(e)}
      name={name}
    >
      {children}
    </button>
  );
};

export default Button;
