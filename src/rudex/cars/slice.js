import { createSlice } from "@reduxjs/toolkit";
import { getCarsThunk } from "./operations";

const initialState = {
  cars: [],
};
const slice = createSlice({
  name: "car",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCarsThunk.fulfilled, (state, action) => {
      state.cars = action.payload;
    });
  },
});

export const carSlice = slice.reducer;
