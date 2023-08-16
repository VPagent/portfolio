import { createReducer } from "@reduxjs/toolkit";
import { getMyTechSkillsAction } from "./actions";

export const techSkillsReducer = createReducer([], {
  //@ts-ignore
  [getMyTechSkillsAction.pending]: (state, action) => {
    return {
      isLoading: true,
    };
  },
  //@ts-ignore
  [getMyTechSkillsAction.fulfilled]: (_, action) => {
    return {
      isLoading: true,
      techSkills: action.payload,
    };
  },
  //@ts-ignore
  [getMyTechSkillsAction.rejected]: (state, action) => {
    return {
      isLoading: "error",
    };
  },
});
