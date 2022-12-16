import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleStudent = createAsyncThunk(
  "student/fetchOneStudent",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/students/${id}`);
      console.log("THIS IS DATA: ", data)
      if(!data){
        let err = new Error("uhoh, no user with this data")
        err.message
      } else {return data};
    } catch (err) {
      console.log(err);
      throw err
    }
  }
);

export const editSingleStudent = createAsyncThunk(
  "student/editStudent",
  async ({ studentId, firstName, lastName, email, gpa, campusId }) => {
    try {
      const { data } = await axios.put(`/api/students/${studentId}`, {
        firstName,
        lastName,
        email,
        gpa,
        campusId: campusId
      });
      return data;
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }
);

export const singleStudentSlice = createSlice({
  name: "student",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(fetchSingleStudent.fulfilled, (state, { payload }) => {
      return payload;
    })
    builder.addCase(fetchSingleStudent.rejected, (state, { payload }) => {
      return payload
    });

    builder.addCase(editSingleStudent.fulfilled, (state, { payload }) => {
        return payload
    })
  },
});

export const selectStudent = (state) => {
  return state.student;
};

export default singleStudentSlice.reducer;
