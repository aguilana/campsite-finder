import { configureStore } from "@reduxjs/toolkit";
import campusesReducer from "../features/CampusesSlice";
import studentsReducer from "../features/StudentsSlice";

const store = configureStore({
  reducer: {
    campuses: campusesReducer,
    students: studentsReducer
  },
});

export default store;
