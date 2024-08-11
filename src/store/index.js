// STORE
import players from "../reducer/players";
import filters from "../reducer/filters";
import { configureStore } from "@reduxjs/toolkit";

const stringMiddleware = () => (next) => (action) => {
  if (typeof action === "string") {
    return next({ type: action });
  }

  return next(action);
};

const store = configureStore({
  reducer: { players, filters },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stringMiddleware),
  devTools: true,
});

export default store;
