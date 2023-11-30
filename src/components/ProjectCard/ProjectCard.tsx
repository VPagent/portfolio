import { FC } from "react";
import styles from "./ProjectCard.module.scss";
import VideoPlayer from "../VideoPlayer/VideoPlayer";
import { techIconsCreator } from "../../helpers";
import Icon, { IconName } from "../Icon/Icon";
import cn from "clsx";

type Props = {
  project: any;
  className?: string;
};

const ProjectCard: FC<Props> = ({ project, className }) => {
  const { name, description, id, livePageLink, repoLink } = project;

  const iconNames = techIconsCreator(description);

  return (
    <div key={id} className={cn(styles.cardWrapper, className)}>
      <div className={styles.videoWrapper}>
        <VideoPlayer name={name} className={styles.video} />
      </div>
      <div className={styles.textBox}>
        <a className={styles.nameLink} href={livePageLink} target="_blank">
          {name}
        </a>
        <div className={styles.techImagesBox}>
          {iconNames.map((iconName: any) => (
            <Icon key={iconName} name={iconName} type="png" className={styles.techIcon} />
          ))}
        </div>
        <p className={styles.description}>{description}</p>
        <div className={styles.controls}>
          <a href={livePageLink} className={styles.linkButton} target="_blank">
            Live page
          </a>
          <a href={repoLink} className={cn(styles.linkButton, !repoLink && styles.disabled)} target="_blank">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
