import { FC } from "react";
import styles from "./Logo.module.scss";

const Logo: FC = () => {
  return (
    <p className={styles.logo}>
      VPagent<span className={styles.logoSecondPart}>13</span>
    </p>
  );
};

export default Logo;
