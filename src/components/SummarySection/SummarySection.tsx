import { FC } from "react";
import styles from "./SummarySection.module.scss";
import Container from "../Container/Container";
import SummarySkeleton from "../SummarySkeleton/SummarySkeleton";
import { useTranslation } from "react-i18next";

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
          <SummarySkeleton className={styles.summaryCard} loading={isLoading}>
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
