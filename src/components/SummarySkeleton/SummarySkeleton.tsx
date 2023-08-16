import { FC, ReactNode } from "react";
import styles from "./SummarySkeleton.module.scss";

type Props = {
  children: ReactNode;
  loading?: boolean | "error";
};

const SummarySkeleton: FC<Props> = ({ children, loading }) => {
  return (
    <div className={styles.card}>
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
