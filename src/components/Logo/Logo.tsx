import { FC } from "react";
import styles from "./Logo.module.scss";
import cn from "clsx";
import { useNavigate } from "react-router-dom";

type Props = {
  className?: string;
};

const Logo: FC<Props> = ({ className }) => {
  const navigate = useNavigate();
  return (
    <p
      className={cn(styles.logo, className)}
      onClick={() => navigate("home")}
    >
      VPagent<span className={styles.logoSecondPart}>13</span>
    </p>
  );
};

export default Logo;
