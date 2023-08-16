import { FC } from "react";
import styles from "./Loader.module.scss";
import cn from "clsx";

type Props = {
  className?: string;
};

const Loader: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.loader, className)}>
      <div className={cn(styles.loader_cube, styles.loader_cube__color)}></div>
      <div
        className={cn(styles.loader_cube, styles.loader_cube__glowing)}
      ></div>
    </div>
  );
};

export default Loader;
