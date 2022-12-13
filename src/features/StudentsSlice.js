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

export const deleteStudentAsync = createAsyncThunk("students/deleteStudent", async (id) => {
  try{
    console.log("this is id: ", id)
    const { data } = await axios.delete(`/api/students/${id}`)
    console.log('DATA IN DELETE ASYNC', data)
    return data
  }
  catch(err){
    console.log(err)
  }
})

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

    builder.addCase(deleteStudentAsync.fulfilled, (state, { payload }) => {
      console.log('deleted student payload: ', payload)
      return state.filter(student=>student.id !== payload.id)
    })
  },
});

export const selectStudents = (state) => state.students;

export default studentsSlice.reducer;
