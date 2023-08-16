import { FC, useEffect, useState } from "react";
import styles from "./AboutPage.module.scss";

import SummarySection from "../../components/SummarySection/SummarySection";
import TechSkillsSection from "../../components/TechSkillsSection/TechSkillsSection";
import { useDispatch, useSelector } from "react-redux";
import {
  getSummarySelector,
  getTechSkillsSelector,
} from "../../redux/selectors";
import { getMySummaryAction, getMyTechSkillsAction } from "../../redux/actions";

const AboutPage: FC = () => {
  const dispatch = useDispatch();
  const summary = useSelector(getSummarySelector);
  const techSkills = useSelector(getTechSkillsSelector);

  useEffect(() => {
    //@ts-ignore
    dispatch(getMySummaryAction());
    //@ts-ignore
    dispatch(getMyTechSkillsAction());

    console.log(summary.loading);
  }, []);
  return (
    <>
      <SummarySection summary={summary} />
      <TechSkillsSection skillsData={techSkills} />
    </>
  );
};

export default AboutPage;
