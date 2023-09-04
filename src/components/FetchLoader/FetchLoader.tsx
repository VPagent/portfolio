import { FC } from "react";
import styles from "./FetchLoader.module.scss";
import cn from "clsx";

type Props = {
  className?: string;
};

const FetchLoader: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.loaderWrapper, className)}>
      <div className={styles.loader}>
        <div className={styles.box_load1}></div>
        <div className={styles.box_load2}></div>
        <div className={styles.box_load3}></div>
      </div>
    </div>
  );
};

export default FetchLoader;
