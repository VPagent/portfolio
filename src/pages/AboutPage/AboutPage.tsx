import { FC, useEffect, useState } from "react";
import styles from "./AboutPage.module.scss";

import SummarySection from "../../components/SummarySection/SummarySection";
import TechSkillsSection from "../../components/TechSkillsSection/TechSkillsSection";
import { useDispatch, useSelector } from "react-redux";
import {
  getSoftSkillsSelector,
  getSummarySelector,
  getTechSkillsSelector,
} from "../../redux/selectors";
import {
  getMySoftSkillsAction,
  getMySummaryAction,
  getMyTechSkillsAction,
} from "../../redux/actions";

const AboutPage: FC = () => {
  const dispatch = useDispatch();
  const summary = useSelector(getSummarySelector);
  const techSkills = useSelector(getTechSkillsSelector);
  const softSkills = useSelector(getSoftSkillsSelector);

  useEffect(() => {
    //@ts-ignore
    dispatch(getMySummaryAction());
    //@ts-ignore
    dispatch(getMyTechSkillsAction());
    //@ts-ignore
    dispatch(getMySoftSkillsAction());

    console.log(summary.loading);
  }, []);
  return (
    <>
      <SummarySection summary={summary} />
      <TechSkillsSection techSkills={techSkills} softSkills={softSkills} />
    </>
  );
};

export default AboutPage;
