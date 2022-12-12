import { configureStore } from "@reduxjs/toolkit";
import campusReducer from "../features/CampusSlice"
import campusesReducer from "../features/CampusesSlice";
import studentsReducer from "../features/StudentsSlice";
import singleStudentReducer from "../features/StudentSlice"

const store = configureStore({
  reducer: {
    campus: campusReducer,
    campuses: campusesReducer,
    students: studentsReducer,
    student: singleStudentReducer
  },
});

export default store;
