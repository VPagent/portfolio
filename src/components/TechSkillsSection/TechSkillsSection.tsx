import { FC } from "react";
import styles from "./TechSkillsSection.module.scss";
import Container from "../Container/Container";

const TechSkillsSection: FC = () => {
  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.sectionTitle}>My techSkills</h2>
      </Container>
    </section>
  );
};

export default TechSkillsSection;
