import { FC, useEffect } from "react";
import styles from "./SummarySection.module.scss";
import Container from "../Container/Container";
import SummarySkeleton from "../SummarySkeleton/SummarySkeleton";
import { InitialSummary } from "../../redux/slices";
import { useTranslation } from "react-i18next";
import Loader from "../Loader/Loader";

type Props = {
  summary: string;
  isLoading: boolean | "error";
};

const SummarySection: FC<Props> = ({ summary, isLoading }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.sectionWrapper}>
      <Container>
        <div className={styles.contentWrapper}>
          <SummarySkeleton loading={isLoading}>
            {summary && <p className={styles.text}>{summary}</p>}
          </SummarySkeleton>
          <div className={styles.openToWorkBox}>
            <h2 className={styles.openToWorkText}>
              {t("I'm looking for job opportunities")}
            </h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SummarySection;
