import { configureStore } from "@reduxjs/toolkit";
import { carSlice } from "./cars/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterSlice } from "./filterCars/slice";

const persistConfig = {
  key: "favoritesCar",
  version: 1,
  storage,
  whitelist: ["favoritesCar"],
};

const persistedReducer = persistReducer(persistConfig, carSlice);

export const store = configureStore({
  reducer: {
    car: persistedReducer,
    filter: filterSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
