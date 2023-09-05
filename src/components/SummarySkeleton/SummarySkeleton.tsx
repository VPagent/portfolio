import { FC, ReactNode } from "react";
import styles from "./SummarySkeleton.module.scss";
import cn from "clsx";

type Props = {
  children: ReactNode;
  loading?: boolean | "error";
  className?: string;
};

const SummarySkeleton: FC<Props> = ({ children, className, loading }) => {
  return (
    <div className={cn(styles.card, className)}>
      {!loading ? (
        children
      ) : (
        <>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLine}></div>
        </>
      )}
    </div>
  );
};

export default SummarySkeleton;
