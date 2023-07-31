import { FC } from "react";
import styles from "./HomePage.module.scss";
import SharedLayout from "../../components/SharedLayout/SharedLayout";
import Container from "../../components/Container/Container";
import HeroSection from "../../components/HeroSection/HeroSection";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import SummarySection from "../../components/SummarySection/SummarySection";

const HomePage: FC = () => {
  return (
    <div>
      <HeroSection />
      <SummarySection />
    </div>
  );
};

export default HomePage;
