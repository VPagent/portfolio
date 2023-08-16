import { FC } from "react";
import styles from "./TechSkillsSection.module.scss";
import Container from "../Container/Container";

type Props = {
  techSkills: { isLoading: boolean | "error"; techSkills?: string[] | null };
};

const TechSkillsSection: FC<Props> = ({ techSkills }) => {
  console.log("tech", techSkills);
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.sectionTitle}>My techSkills</h2>

        <div className={styles.card}>
          <p>HTML</p>
        </div>
      </Container>
    </section>
  );
};

export default TechSkillsSection;
