import { createReducer } from "@reduxjs/toolkit";
import { getMySoftSkillsAction, getMyTechSkillsAction } from "./actions";

export const techSkillsReducer = createReducer([], {
  //@ts-ignore
  [getMyTechSkillsAction.pending]: (_, action) => "isLoading",
  //@ts-ignore
  [getMyTechSkillsAction.fulfilled]: (_, action) => action.payload,
  //@ts-ignore
  [getMyTechSkillsAction.rejected]: (_, action) => "error",
});

export const softSkillsReducer = createReducer([], {
  //@ts-ignore
  [getMySoftSkillsAction.pending]: (_, action) => "isLoading",
  //@ts-ignore
  [getMySoftSkillsAction.fulfilled]: (_, action) => action.payload,
  //@ts-ignore
  [getMySoftSkillsAction.rejected]: (_, action) => "error",
});
