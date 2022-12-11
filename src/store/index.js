import { configureStore } from "@reduxjs/toolkit";
import campusesReducer from "../features/CampusesSlice";

const store = configureStore({
  reducer: {
    campuses: campusesReducer,
  },
});

export default store;
