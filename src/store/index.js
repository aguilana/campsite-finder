import { configureStore } from "@reduxjs/toolkit";
import campgroundReducer from "../features/campgroundSlice"

const store = configureStore({
  reducer: {
    campgrounds: campgroundReducer
  },
});

export default store;
