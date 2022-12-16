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
      throw err
    }
  }
);

export const addStudentAsync = createAsyncThunk(
  "students/addStudent",
  async ({ firstName, lastName, email, campusId }) => {
    console.log("FORM DATA", firstName, lastName, email)
    try {
      const { data } = await axios.post("/api/students", {
        firstName,
        lastName,
        email,
        campusId: campusId
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteStudentAsync = createAsyncThunk("students/deleteStudent", async (id) => {
  try{

    const { data } = await axios.delete(`/api/students/${id}`)
    return data;
  }
  catch(err){
    console.log(err)
  }
})


export const studentsSlice = createSlice({
  name: "students",
  initialState: [],
  extraReducers: (builder) => {

    builder.addCase(fetchAllStudents.fulfilled, (state, { payload }) => {
      return payload
    })

    builder.addCase(addStudentAsync.fulfilled, (state, { payload }) => {
      console.log("FORM PAYLOAD: ", payload)
      state.push(payload)
    });

    builder.addCase(deleteStudentAsync.fulfilled, (state, { payload }) => {
      return state.filter(student=>student.id !== payload.id)
    })
  },
});

export const selectStudents = (state) => {
  return state.students
}

export default studentsSlice.reducer;
