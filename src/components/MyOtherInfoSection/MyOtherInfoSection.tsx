import { FC } from "react";
import styles from "./MyOtherInfoSection.module.scss";
import Container from "../Container/Container";
import Loader from "../Loader/Loader";
import Icon from "../Icon/Icon";
import { useTranslation } from "react-i18next";

type Props = {
  education: "isLoading" | any[];
  workExp: "isLoading" | any[];
  languages: "isLoading" | any[];
};

const MyOtherInfoSection: FC<Props> = ({ education, workExp, languages }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.sectionItem}>
            <h2 className={styles.sectionTitle}>{t("My work experience")}</h2>
            {workExp === "isLoading" ? (
              <Loader className={styles.loader} />
            ) : (
              <div className={styles.workExpList}>
                {workExp.map((workItem): any => (
                  <div key={workItem.id} className={styles.workExpItem}>
                    <p className={styles.workExpTitle}>{workItem.name}</p>
                    <p className={styles.workExpText}>{workItem.decsription}</p>
                    <p className={styles.workExpDuration}>
                      {workItem.duration}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.sectionItem}>
            <h2 className={styles.sectionTitle}>{t("My Education")}</h2>
            {education === "isLoading" ? (
              <Loader className={styles.loader} />
            ) : (
              <div className={styles.educationList}>
                {education.map((item): any => (
                  <div key={item.id} className={styles.educationItem}>
                    <p className={styles.educationTitle}>{item.title}</p>
                    <p className={styles.educationText}>{item.text}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.sectionItem}>
            <h2 className={styles.sectionTitle}>{t("My languages")}</h2>
            {languages === "isLoading" ? (
              <Loader className={styles.loader} />
            ) : (
              <div className={styles.languagesList}>
                {languages.map((languagesItem): any => (
                  <div key={languagesItem.id} className={styles.languagesItem}>
                    <div className={styles.languagesItemHeader}>
                      <Icon
                        name={languagesItem.title
                          .split("-")[0]
                          .trim()
                          .toLowerCase()}
                        className={styles.langIcon}
                        type="png"
                      />
                      <p className={styles.languagesTitle}>
                        {languagesItem.title.split(" -")[0]}
                      </p>
                    </div>

                    <p className={styles.languagesText}>
                      {languagesItem.title.split(" -")[1]}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyOtherInfoSection;
