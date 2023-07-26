import styles from "./Button.module.scss";
import { FC, ReactNode } from "react";
import cn from "clsx";

type Props = {
  children: ReactNode | string;
  className?: string;
  onClick: () => void;
};

const Button: FC<Props> = ({ children, className, onClick }) => {
  return (
    <button className={cn(styles.button, className)} onClick={() => onClick()}>
      {children}
    </button>
  );
};

export default Button;
