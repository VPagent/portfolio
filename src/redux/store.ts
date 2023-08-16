import { configureStore } from "@reduxjs/toolkit";
import { summarySliceRed } from "./slices";
import { techSkillsReducer } from "./reducers";

const store = configureStore({
  reducer: {
    summary: summarySliceRed,
    techSkills: techSkillsReducer,
    // softSkills: twoSlice.reducer,
    // techSkills: techSkillsSlice,
    // education: educationSkills,
    // workExp: workExpSlice,
    // projects: projectsReducer,
    // languages: languagesSlice,
  },
});

export default store;
