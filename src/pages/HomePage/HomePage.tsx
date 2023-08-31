import { FC } from "react";
import styles from "./HomePage.module.scss";
import HeroSection from "../../components/HeroSection/HeroSection";
import i18n from "../../I18n/I18n";

const HomePage: FC = () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

export default HomePage;
