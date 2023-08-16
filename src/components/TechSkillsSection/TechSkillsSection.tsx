import { FC } from "react";
import styles from "./TechSkillsSection.module.scss";
import Container from "../Container/Container";
import Icon from "../Icon/Icon";
import Loader from "../Loader/Loader";

type Props = {
  skillsData: { isLoading: boolean | "error"; techSkills?: any };
};

const TechSkillsSection: FC<Props> = ({ skillsData }) => {
  // const isError = skillsData?.techSkills?.isLoading === "error";

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.contentWrapper}>
          <h2 className={styles.sectionTitle}>My techSkills</h2>
          <div className={styles.cardsList}>
            {!skillsData.techSkills ? (
              <Loader className={styles.loader} />
            ) : (
              skillsData?.techSkills.map((item: any) => (
                <div key={item.id} className={styles.card}>
                  <p>{item.title}</p>
                  <Icon
                    name={item.name}
                    type="png"
                    className={styles.skillsImage}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TechSkillsSection;
