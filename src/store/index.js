import { configureStore } from "@reduxjs/toolkit";
import campgroundReducer from "../features/campgroundSlice"
import singleCampgroundReducer from "../features/singleCampgroundSlice"

const store = configureStore({
  reducer: {
    campgrounds: campgroundReducer,
    campground: singleCampgroundReducer
  },
});

export default store;
