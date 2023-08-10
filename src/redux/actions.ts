import { AsyncThunkAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getSummary } from "../services/http";

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
