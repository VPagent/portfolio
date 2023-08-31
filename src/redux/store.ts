import { configureStore } from "@reduxjs/toolkit";
import { summarySliceRed } from "./slices";
import {
  appLanguageReducer,
  educationReducer,
  languagesReducer,
  projectsReducer,
  softSkillsReducer,
  techSkillsReducer,
  themeReducer,
  workExpReducer,
} from "./reducers";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    appLanguage: appLanguageReducer,
    summary: summarySliceRed,
    techSkills: techSkillsReducer,
    softSkills: softSkillsReducer,
    projects: projectsReducer,
    education: educationReducer,
    workExp: workExpReducer,
    languages: languagesReducer,
  },
});

export default store;
