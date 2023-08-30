import { FC } from "react";
import styles from "./Switch.module.scss";
import cn from "clsx";

type Props = {
  className?: string;
  isActive: boolean;
  onChange: () => void;
};

const Switch: FC<Props> = ({ className, isActive, onChange }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <div
        className={cn(styles.switch, isActive && styles.active)}
        onClick={() => onChange()}
      >
        <div className={cn(styles.circle, isActive && styles.active)}></div>
      </div>
    </div>
  );
};

export default Switch;
