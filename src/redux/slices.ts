import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getMySummaryAction } from "./actions";

export interface InitialSummary {
  loading?: boolean | "error";
  eng: string;
  ru: string;
  ukr: string;
}

const initialState: InitialSummary = {
  loading: false,
  eng: "",
  ru: "",
  ukr: "",
};

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {},
  extraReducers: {
    //@ts-ignore
    [getMySummaryAction.pending]: (state, _) => {
      state.loading = true;
    },
    //@ts-ignore
    [getMySummaryAction.fulfilled]: (_, { payload }) => {
      return {
        ...payload,
        loading: false,
      };
    },
    //@ts-ignore
    [getMySummaryAction.pending]: (state, _) => {
      state.loading = "error";
    },
  },
});

export const summarySliceRed = summarySlice.reducer;
