import { FC, ReactNode } from "react";
import styles from "./SharedLayout.module.scss";
import Header from "../Header/Header";

type Props = {
  children: ReactNode;
};

const SharedLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
    </div>
  );
};

export default SharedLayout;
