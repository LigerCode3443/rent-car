import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getCarsThunk, getModelThunk } from "./operations";
import { selectSelect } from "./selectors";
import { selectFilter } from "../filterCars/selectors";

const initialState = {
  cars: [],
  page: 1,
  totalPage: null,
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
    togglePage(state) {
      state.page = state.page + 1;
    },
    totalPage(state) {
      state.totalPage = Math.ceil(state.select.length / 12);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        if (state.cars.length === 0) {
          state.cars = action.payload;
        } else {
          const actualCars = action.payload.filter(
            (car) => !state.cars.some((item) => item.id === car.id)
          );
          state.cars = [...state.cars, ...actualCars];
        }
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
export const { toggleLike, togglePage, totalPage } = slice.actions;
export const carSlice = slice.reducer;
