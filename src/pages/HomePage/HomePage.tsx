import { FC } from "react";
import styles from "./HomePage.module.scss";
import SharedLayout from "../../components/SharedLayout/SharedLayout";
import Container from "../../components/Container/Container";
import HeroSection from "../../components/HeroSection/HeroSection";

const HomePage: FC = () => {
  return (
    <div>
      <Container>
        <HeroSection />
      </Container>
    </div>
  );
};

export default HomePage;
