import { FC, useEffect, useState } from "react";
import styles from "./AboutPage.module.scss";

import SummarySection from "../../components/SummarySection/SummarySection";
import TechSkillsSection from "../../components/TechSkillsSection/TechSkillsSection";
import { useDispatch, useSelector } from "react-redux";
import {
  getAppLanguageSelector,
  getEducationSelector,
  getLanguagesSelector,
  getLoadingScreenSelector,
  getSoftSkillsSelector,
  getSummarySelector,
  getTechSkillsSelector,
  getWorkExpSelector,
} from "../../redux/selectors";
import {
  changeLoadingScreenAction,
  getMyEducationAction,
  getMyLanguagesAction,
  getMySoftSkillsAction,
  getMySummaryAction,
  getMyTechSkillsAction,
  getMyWorkExpAction,
} from "../../redux/actions";
import MyOtherInfoSection from "../../components/MyOtherInfoSection/MyOtherInfoSection";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const AboutPage: FC = () => {
  const isLoadingScreen = useSelector(getLoadingScreenSelector);

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

    if (isLoadingScreen) {
      //@ts-ignore
      dispatch(changeLoadingScreenAction(false));
    }
  }, []);
  return (
    <>
      <SummarySection summary={summaryOnCurLang} isLoading={summary.loading} />
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
