import { FC, ReactNode, useState } from "react";
import styles from "./SharedLayout.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useSelector } from "react-redux";
import { getLoadingScreenSelector } from "../../redux/selectors";
import LoadingScreen from "../LoadingScreen/LoadingScreen";

type Props = {
  children: ReactNode;
};

const SharedLayout: FC<Props> = ({ children }) => {
  const isLoadingScreen = useSelector(getLoadingScreenSelector);

  return (
    <div className={styles.wrapper}>
      {isLoadingScreen && <LoadingScreen />}
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default SharedLayout;
