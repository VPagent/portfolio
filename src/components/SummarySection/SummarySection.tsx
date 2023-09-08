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
        <div className={styles.pageLinkBox}>
          <a href="#techSkills" className={styles.pageLink}>
            My tech skills
          </a>
          <a href="#softSkills" className={styles.pageLink}>
            My soft skills
          </a>
          <a href="#workExperience" className={styles.pageLink}>
            My work experience
          </a>
          <a href="#education" className={styles.pageLink}>
            My eduction
          </a>
          <a href="#languages" className={styles.pageLink}>
            My languages
          </a>
        </div>
      </Container>
    </section>
  );
};

export default SummarySection;
