import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCampuses = createAsyncThunk(
  "campuses/fetchAllCampuses",
  async () => {
    try {
      const { data } = await axios.get("/api/campuses");
      return (data);
    } catch (err) {
      console.log(err);
    }
  }
);

export const campusesSlice = createSlice({
  name: "campuses",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCampuses.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export const selectCampuses = state=>state.campuses;

export default campusesSlice.reducer
