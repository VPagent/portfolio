import { FC } from "react";
import styles from "./ProjectsSection.module.scss";
import Container from "../Container/Container";
import Loader from "../Loader/Loader";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useTranslation } from "react-i18next";

type Props = {
  projects: any;
};

const ProjectsSection: FC<Props> = ({ projects }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.sectionTitle}>{t("My projects")}</h1>
        <p className={styles.sectionDescription}>
          {t(
            "This page includes full-fledged applications and also small functional pages"
          )}
        </p>
        {projects === "isLoading" ? (
          <Loader className={styles.loader} />
        ) : (
          <div className={styles.projectsList}>
            {projects.map((project: any) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProjectsSection;
