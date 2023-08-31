import { FC, useEffect, useState } from "react";
import styles from "./AboutPage.module.scss";

import SummarySection from "../../components/SummarySection/SummarySection";
import TechSkillsSection from "../../components/TechSkillsSection/TechSkillsSection";
import { useDispatch, useSelector } from "react-redux";
import {
  getAppLanguageSelector,
  getEducationSelector,
  getLanguagesSelector,
  getSoftSkillsSelector,
  getSummarySelector,
  getTechSkillsSelector,
  getWorkExpSelector,
} from "../../redux/selectors";
import {
  getMyEducationAction,
  getMyLanguagesAction,
  getMySoftSkillsAction,
  getMySummaryAction,
  getMyTechSkillsAction,
  getMyWorkExpAction,
} from "../../redux/actions";
import MyOtherInfoSection from "../../components/MyOtherInfoSection/MyOtherInfoSection";

const AboutPage: FC = () => {
  const dispatch = useDispatch();
  const summary = useSelector(getSummarySelector);
  const techSkills = useSelector(getTechSkillsSelector);
  const softSkills = useSelector(getSoftSkillsSelector);
  const education = useSelector(getEducationSelector);
  const workExp = useSelector(getWorkExpSelector);
  const languages = useSelector(getLanguagesSelector);
  const appLanguage = useSelector(getAppLanguageSelector);

  const summaryOnCurLang = summary[appLanguage];

  useEffect(() => {
    Promise.all([
      //@ts-ignore
      dispatch(getMySummaryAction()),
      //@ts-ignore
      dispatch(getMyTechSkillsAction()),
      //@ts-ignore
      dispatch(getMySoftSkillsAction()),
      //@ts-ignore
      dispatch(getMyEducationAction()),
      //@ts-ignore
      dispatch(getMyWorkExpAction()),
      //@ts-ignore
      dispatch(getMyLanguagesAction()),
    ]);
  }, []);
  return (
    <>
      <SummarySection
        summary={summaryOnCurLang}
        isLoading={summary.isLoading}
      />
      <TechSkillsSection techSkills={techSkills} softSkills={softSkills} />
      <MyOtherInfoSection
        education={education}
        workExp={workExp}
        languages={languages}
      />
    </>
  );
};

export default AboutPage;
