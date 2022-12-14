import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleCampus = createAsyncThunk(
  "campus/fetchSingleCampus",
  async (id) => {
    try {
      const { data } = await axios.get(`/api/campuses/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const unregisterStudentAsync = createAsyncThunk(
  "campus/unregisterStudent",
  async (student) => {
    try {
    const { id } = student
    console.log("this is the student object", student)
      const { data } = await axios.put(`/api/students/${id}`, {campusId: null
      });
      return data
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }
);

export const editSingleCampus = createAsyncThunk(
  "campus/editCampus",
  async ({ campusId, name, address }) => {
    try {
      const { data } = await axios.put(`/api/campuses/${campusId}`, {
        name,
        address,
      });
      console.log("NAME: ", name, "ADDRESS: ", address);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const singleCampusSlice = createSlice({
  name: "campus",
  initialState: {},
  reducer: {},
  extraReducers: (builder) => {

    builder.addCase(fetchSingleCampus.fulfilled, (state, { payload }) => {
      return payload;
    });

    builder.addCase(unregisterStudentAsync.fulfilled, (state, { payload }) => {
        console.log("THE PAYLOAD FROM unregistering student: ", payload)
        console.log(state.students)
        // return state.filter(state.student => state.student.campusId !== state.payload)
    });

    builder.addCase(editSingleCampus.fulfilled, (state, { payload }) => {
      console.log("PAYLOAD OF THE EDIT", payload);
      return payload;
    });
  },
});

export const selectCampus = (state) => state.campus;

export default singleCampusSlice.reducer;
