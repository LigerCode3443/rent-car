import { createAsyncThunk } from "@reduxjs/toolkit";
import { carsApi } from "../../config/carsApi";

export const getCarsThunk = createAsyncThunk(
  "getCars",
  async (page, thunkApi) => {
    try {
      const { data } = await carsApi.get("rent_car", {
        params: {
          page,
          limit: 12,
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getModelThunk = createAsyncThunk(
  "getModel",
  async (_, thunkApi) => {
    try {
      const { data } = await carsApi.get("rent_car");

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
