import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCampuses = createAsyncThunk(
  "campuses/fetchAllCampuses",
  async () => {
    try {
      const { data } = await axios.get("/api/campuses");
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const addCampusAsync = createAsyncThunk(
  "campuses/addCampus",
  async ({ name, address, description }) => {
    try {
      const { data } = await axios.post("/api/campuses", {
        name,
        address,
        description,
      });
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const deleteCampusAsync = createAsyncThunk(
  "campuses/deleteCampus",
  async (id) => {
    try {
      const { data } = await axios.delete(`/api/campuses/${id}`);
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const campusesSlice = createSlice({
  name: "campuses",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(fetchAllCampuses.fulfilled, (state, { payload }) => {
      return payload;
    });

    builder.addCase(addCampusAsync.fulfilled, (state, { payload }) => {
      state.push(payload);
    });

    builder.addCase(deleteCampusAsync.fulfilled, (state, { payload }) => {
      return state.filter((campus) => campus.id !== payload.id);
    });
  },
});

export const selectCampuses = (state) => state.campuses;

export default campusesSlice.reducer;
