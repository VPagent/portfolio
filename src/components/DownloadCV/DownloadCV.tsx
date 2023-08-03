import { FC } from "react";
import styles from "./DownloadCV.module.scss";
import cn from "clsx";

const textArray = [
  "D",
  "o",
  "w",
  "n",
  "l",
  "o",
  "a",
  "d",
  " ",
  "M",
  "y",
  " ",
  "C",
  "V",
];

const rotateEl = 20;

type Props = {
  className: string;
};

const DownloadCV: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.wrapper, className)}>
      <div className={styles.inner}>
        {textArray.map((item, index) => (
          <p
            key={index + 1}
            className={styles.content}
            style={{ rotate: `${(index + 1) * rotateEl}deg` }}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DownloadCV;
