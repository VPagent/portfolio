import { FC } from "react";
import styles from "./Icon.module.scss";
import cn from "clsx";
import { ReactComponent as download } from "../../static/icons/download.svg";

const icons = {
  download,
};

export type IconName = keyof typeof icons;

type Props = {
  name: IconName;
  className?: string;
};

const Icon: FC<Props> = ({ name, className }) => {
  const CurrentIcon = icons[name];

  return <CurrentIcon className={cn(styles.icon, className)} />;
};

export default Icon;
