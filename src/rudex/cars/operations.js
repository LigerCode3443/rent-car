import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsAoi } from "../../config/carsApi";

export const getCarsThunk = createAsyncThunk(
  "getCars",
  async (page, thunkApi) => {
    try {
      const { data } = await carsAoi.get("rent_car", {
        params: {
          page,
          limit: 12,
        },
      });
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
