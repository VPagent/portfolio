import { FC } from "react";
import styles from "./TechSkillsSection.module.scss";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";
import cn from "clsx";

type Props = {
  techSkills: any;
  softSkills: any;
};

const TechSkillsSection: FC<Props> = ({ techSkills, softSkills }) => {
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionTitle}>My techSkills</h2>
          {techSkills === "isLoading" ? (
            <Loader className={styles.loader} />
          ) : (
            <>
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
              <h2 className={cn(styles.sectionTitle, styles.softSkillsTitle)}>
                My softSkills
              </h2>
              <div className={styles.softSkillsList}>
                {softSkills === "isLoading" ? (
                  <Loader className={styles.loader} />
                ) : (
                  <>
                    {softSkills.map((skill: any) => (
                      <div className={styles.softSkillsCard}>
                        <div className={styles.softSkillsCard__contentWrapper}>
                          <div className={styles.circle}></div>
                          <p className={styles.softSkillsText}>
                            {skill.skill.eng}
                          </p>
                        </div>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TechSkillsSection;
