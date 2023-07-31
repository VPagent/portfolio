import { FC } from "react";
import styles from "./SummarySection.module.scss";

const SummarySection: FC = () => {
  return (
    <div className={styles.summaryWrapper}>
      <p>Summary</p>
    </div>
  );
};

export default SummarySection;
