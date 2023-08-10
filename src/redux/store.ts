import { configureStore } from "@reduxjs/toolkit";
import { summarySliceRed } from "./slices";

const store = configureStore({
  reducer: {
    summary: summarySliceRed,
    // softSkills: twoSlice.reducer,
    // techSkills: techSkillsSlice,
    // education: educationSkills,
    // workExp: workExpSlice,
    // projects: projectsReducer,
    // languages: languagesSlice,
  },
});

export default store;
