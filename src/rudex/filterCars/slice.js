import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterCars: {},
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterCars(state, action) {
      state.filterCars = action.payload;
    },
  },
});
export const filterSlice = slice.reducer;
export const { filterCars } = slice.actions;
