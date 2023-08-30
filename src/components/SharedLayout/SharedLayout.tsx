import { FC, ReactNode } from "react";
import styles from "./SharedLayout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type Props = {
  children: ReactNode;
};

const SharedLayout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default SharedLayout;
