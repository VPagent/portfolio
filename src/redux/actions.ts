import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getEducation,
  getLanguages,
  getProjects,
  getSoftSkills,
  getSummary,
  getTechSkills,
  getWorkExperience,
} from "../services/http";

export const getMySummaryAction = createAsyncThunk(
  "summary",
  async (_, { rejectWithValue, getState }) => {
    try {
      const summary = await getSummary();

      return summary;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
  }
);

export const getMyTechSkillsAction = createAsyncThunk(
  "techSkills",
  async (_, { rejectWithValue, getState }) => {
    try {
      const techSkills = await getTechSkills();

      return techSkills;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
  }
);

export const getMySoftSkillsAction = createAsyncThunk(
  "softSkills",
  async (_, { rejectWithValue, getState }) => {
    try {
      const softSkills = await getSoftSkills();

      return softSkills;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
  }
);

export const getMyProjectsAction = createAsyncThunk(
  "projects",
  async (_, { rejectWithValue, getState }) => {
    try {
      const projects = await getProjects();

      return projects;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
  }
);

// education: educationReducer,
// workExp: workExpReducer,
// languages: languagesReducer,

export const getMyEducationAction = createAsyncThunk(
  "education",
  async (_, { rejectWithValue, getState }) => {
    try {
      const education = await getEducation();

      return education;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
  }
);

export const getMyWorkExpAction = createAsyncThunk(
  "workExp",
  async (_, { rejectWithValue, getState }) => {
    try {
      const workExp = await getWorkExperience();

      return workExp;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
  }
);

export const getMyLanguagesAction = createAsyncThunk(
  "languages",
  async (_, { rejectWithValue, getState }) => {
    try {
      const languages = await getLanguages();

      return languages;
    } catch (error: any) {
      return rejectWithValue({
        message: error.response.data.message,
        status: error.response.status,
      });
    }
  }
);

export const changeThemeAction = createAction("theme");
