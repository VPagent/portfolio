import { FC } from "react";
import styles from "./AboutPage.module.scss";
import Container from "../../components/Container/Container";
import SummarySection from "../../components/SummarySection/SummarySection";
import TechSkillsSection from "../../components/TechSkillsSection/TechSkillsSection";

const AboutPage: FC = () => {
  return (
    <>
      <SummarySection />
      <TechSkillsSection />
    </>
  );
};

export default AboutPage;
