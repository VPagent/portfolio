import { FC } from "react";
import styles from "./TechSkillsSection.module.scss";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";
import cn from "clsx";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { getAppLanguageSelector } from "../../redux/selectors";

type Props = {
  techSkills: any;
  softSkills: any;
};

const TechSkillsSection: FC<Props> = ({ techSkills, softSkills }) => {
  const { t } = useTranslation();
  const appLanguage = useSelector(getAppLanguageSelector);

  return (
    <section className={styles.section} id="techSkills">
      <Container>
        <div className={styles.contentWrapper}>
          <div className={styles.sectionItem}>
            <h2 className={styles.sectionTitle}>{t("My techSkills")}</h2>
            {techSkills === "isLoading" ? (
              <Loader className={styles.loader} />
            ) : (
              <div className={styles.cardsList}>
                {techSkills.map((item: any) => (
                  <div key={item.id} className={styles.card}>
                    <p className={styles.cardTitle}>{item.title}</p>
                    <Icon
                      name={item.name}
                      type="png"
                      className={styles.skillsImage}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={styles.sectionItem} id="softSkills">
            <h2 className={cn(styles.sectionTitle, styles.softSkillsTitle)}>
              {t("My softSkills")}
            </h2>
            <div className={styles.softSkillsList}>
              {softSkills === "isLoading" ? (
                <Loader className={styles.loader} />
              ) : (
                <>
                  {softSkills.map((skill: any) => (
                    <div key={skill.id} className={styles.softSkillsCard}>
                      <div className={styles.softSkillsCard__contentWrapper}>
                        <div className={styles.circle}></div>
                        <p className={styles.softSkillsText}>
                          {skill.skill[appLanguage]}
                        </p>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechSkillsSection;
