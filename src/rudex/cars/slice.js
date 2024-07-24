import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getCarsThunk, getModelThunk } from "./operations";
import { selectSelect } from "./selectors";
import { selectFilter } from "../filterCars/selectors";

const initialState = {
  cars: [],
  favoritesCar: [],
  select: [],
};
const slice = createSlice({
  name: "car",
  initialState,
  reducers: {
    toggleLike(state, action) {
      const carLike = action.payload;
      if (state.favoritesCar.some((item) => item.id === carLike.id)) {
        state.favoritesCar = state.favoritesCar.filter(
          (item) => item.id !== carLike.id
        );
      } else {
        state.favoritesCar.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.cars = action.payload;
      })
      .addCase(getModelThunk.fulfilled, (state, action) => {
        state.select = action.payload;
      });
  },
});
export const selectFilterMemo = createSelector(
  [selectSelect, selectFilter],
  (select, filter) => {
    return select.filter((car) => {
      return (
        (Number(filter.mileageMin) < Number(car.mileage) &&
          Number(car.mileage) < Number(filter.mileageMax)) ||
        car.make === filter.make ||
        car.rentalPrice === filter.price
      );
    });
  }
);
export const { toggleLike } = slice.actions;
export const carSlice = slice.reducer;
