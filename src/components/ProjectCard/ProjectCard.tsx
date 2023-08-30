import { FC } from "react";
import styles from "./ProjectCard.module.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { techIconsCreator } from "../../helpers";
import Icon, { IconName } from "../Icon/Icon";

type Props = {
  project: any;
};

const ProjectCard: FC<Props> = ({ project }) => {
  const { name, description, id, livePageLink, repoLink } = project;

  const iconNames = techIconsCreator(description);

  return (
    <div key={id} className={styles.cardWrapper}>
      {/* <VideoPlayer name={name} className={styles.video} /> */}
      <Icon className={styles.projectIcon} name={name} type="png" />
      <div className={styles.textBox}>
        <a className={styles.nameLink} href={livePageLink} target="_blank">
          {name}
        </a>
        <div className={styles.techImagesBox}>
          {iconNames.map((iconName: any) => (
            <Icon
              key={iconName}
              name={iconName}
              type="png"
              className={styles.techIcon}
            />
          ))}
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.controls}>
          <a href={livePageLink} className={styles.linkButton} target="_blank">
            Live page
          </a>
          <a href={repoLink} className={styles.linkButton} target="_blank">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
