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
      const { id } = student;
      const { data } = await axios.put(`/api/students/${id}`, {
        campusId: null,
      });
      return data;
    } catch (err) {
      console.log(err);
      return err.message;
    }
  }
);

export const editSingleCampus = createAsyncThunk(
  "campus/editCampus",
  async ({ theCampusId, name, address }) => {
    try {
      const { data } = await axios.put(`/api/campuses/${theCampusId}`, {
        name,
        address,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const singleCampusSlice = createSlice({
  name: "campus",
  initialState: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCampus.fulfilled, (state, { payload }) => {
        return payload;
      })
      .addCase(fetchSingleCampus.rejected, (state, { error }) => {
        return error;
      });

    builder.addCase(
      unregisterStudentAsync.fulfilled,
      (state, { payload }) => {}
    );

    builder.addCase(editSingleCampus.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export const selectCampus = (state) => state.campus;

export default singleCampusSlice.reducer;
