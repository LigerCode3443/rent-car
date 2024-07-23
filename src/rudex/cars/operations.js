import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsAoi } from "../../config/carsApi";

export const getCarsThunk = createAsyncThunk("getCars", async (_, thunkApi) => {
  try {
    const { data } = await carsAoi.get("rent_car");

    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
