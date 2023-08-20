import { AsyncThunkAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getSoftSkills, getSummary, getTechSkills } from "../services/http";

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
