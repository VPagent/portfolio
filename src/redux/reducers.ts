import { createReducer } from "@reduxjs/toolkit";
import { getMyTechSkillsAction } from "./actions";

export const techSkillsReducer = createReducer([], {
  //@ts-ignore
  [getMyTechSkillsAction.fulfilled]: (_, action) => {
    return {
      techSkills: action.payload,
    };
  },
  //@ts-ignore
  [getMyTechSkillsAction.rejected]: (state, action) => {
    return {
      error: true,
    };
  },
});
