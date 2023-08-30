import { FC, useEffect } from "react";
import styles from "./SummarySection.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getSummarySelector } from "../../redux/selectors";
import { getMySummaryAction } from "../../redux/actions";
import Container from "../Container/Container";
import SummarySkeleton from "../SummarySkeleton/SummarySkeleton";
import { InitialSummary } from "../../redux/slices";

type Props = {
  summary: InitialSummary;
};

const SummarySection: FC<Props> = ({ summary }) => {
  return (
    <section className={styles.sectionWrapper}>
      <Container>
        <div className={styles.contentWrapper}>
          <SummarySkeleton loading={summary.loading}>
            {summary && <p className={styles.text}>{summary.eng}</p>}
          </SummarySkeleton>
          <div className={styles.openToWorkBox}>
            <h2 className={styles.openToWorkText}>
              I'm looking for job opportunities
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SummarySection;