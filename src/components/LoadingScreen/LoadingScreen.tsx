import { FC } from "react";
import styles from "./LoadingScreen.module.scss";
import Logo from "../Logo/Logo";

const LoadingScreen: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Logo className={styles.logo} />
    </div>
  );
};

export default LoadingScreen;
