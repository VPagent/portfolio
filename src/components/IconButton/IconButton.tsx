import { FC, ReactNode } from "react";
import styles from "./IconButton.module.scss";
import cn from "clsx";

type Props = {
  icon: ReactNode | string;
  className?: string;
  onClick: () => void;
};

const IconButton: FC<Props> = ({ icon, className, onClick }) => {
  return (
    <button
      className={cn(styles.button && className)}
      onClick={() => onClick()}
    >
      {icon}
    </button>
  );
};

export default IconButton;
