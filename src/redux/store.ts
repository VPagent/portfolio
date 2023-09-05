import { configureStore } from "@reduxjs/toolkit";
import { summarySliceRed } from "./slices";
import {
  appLanguageReducer,
  educationReducer,
  languagesReducer,
  loadingScreenReducer,
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
    isLoadingScreen: loadingScreenReducer,
  },
});

export default store;
