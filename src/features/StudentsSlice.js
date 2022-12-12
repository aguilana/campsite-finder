import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllStudents = createAsyncThunk(
  "students/fetchAllStudents",
  async () => {
    try {
      const { data } = await axios.get("/api/students");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addStudentAsync = createAsyncThunk(
  "students/addStudent",
  async ({ firstName, lastName, email, gpa }) => {
    try {
      const { data } = await axios.post("/api/students", {
        firstName,
        lastName,
        email,
        gpa,
      });
      console.log("data from form studentsSlice: ", data);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const studentsSlice = createSlice({
  name: "students",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllStudents.fulfilled, (state, { payload }) => {
      return payload;
    });

    builder.addCase(addStudentAsync.fulfilled, (state, { payload }) => {
      state.push(payload);
    });
  },
});

export const selectStudents = (state) => state.students;

export default studentsSlice.reducer;
