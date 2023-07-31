import { FC } from "react";
import styles from "./Logo.module.scss";
import cn from "clsx";

type Props = {
  className?: string;
};

const Logo: FC<Props> = ({ className }) => {
  return (
    <p className={cn(styles.logo, className)}>
      VPagent<span className={styles.logoSecondPart}>13</span>
    </p>
  );
};

export default Logo;
