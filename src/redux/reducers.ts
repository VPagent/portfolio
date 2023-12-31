import { createReducer } from "@reduxjs/toolkit";
import {
  changeAppLanguageAction,
  changeLoadingScreenAction,
  changeThemeAction,
  getMyEducationAction,
  getMyLanguagesAction,
  getMyProjectsAction,
  getMySoftSkillsAction,
  getMyTechSkillsAction,
  getMyWorkExpAction,
  getTgKeysAction,
} from "./actions";

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

export const projectsReducer = createReducer([], {
  //@ts-ignore
  [getMyProjectsAction.pending]: (_, action) => "isLoading",
  //@ts-ignore
  [getMyProjectsAction.fulfilled]: (_, action) => action.payload,
  //@ts-ignore
  [getMyProjectsAction.rejected]: (_, action) => "error",
});

export const educationReducer = createReducer([], {
  //@ts-ignore
  [getMyEducationAction.pending]: (_, action) => "isLoading",
  //@ts-ignore
  [getMyEducationAction.fulfilled]: (_, action) => action.payload,
  //@ts-ignore
  [getMyEducationAction.rejected]: (_, action) => "error",
});

export const workExpReducer = createReducer([], {
  //@ts-ignore
  [getMyWorkExpAction.pending]: (_, action) => "isLoading",
  //@ts-ignore
  [getMyWorkExpAction.fulfilled]: (_, action) => action.payload,
  //@ts-ignore
  [getMyWorkExpAction.rejected]: (_, action) => "error",
});

export const languagesReducer = createReducer([], {
  //@ts-ignore
  [getMyLanguagesAction.pending]: (_, action) => "isLoading",
  //@ts-ignore
  [getMyLanguagesAction.fulfilled]: (_, action) => action.payload,
  //@ts-ignore
  [getMyLanguagesAction.rejected]: (_, action) => "error",
});

export const tgKeysReducer = createReducer([], {
  //@ts-ignore
  [getTgKeysAction.pending]: (_, action) => "isLoading",
  //@ts-ignore
  [getTgKeysAction.fulfilled]: (_, action) => action.payload,
  //@ts-ignore
  [getTgKeysAction.rejected]: (_, action) => "error",
});

export const themeReducer = createReducer([], {
  //@ts-ignore
  [changeThemeAction]: (_, action) => action.payload,
});

export const appLanguageReducer = createReducer("eng", {
  //@ts-ignore
  [changeAppLanguageAction]: (_, action) => action.payload,
});

export const loadingScreenReducer = createReducer(true, {
  //@ts-ignore
  [changeLoadingScreenAction]: (_, action) => action.payload,
});
