import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleCampus = createAsyncThunk("campus/fetchSingleCampus", async(id)=>{
    try {
        const { data } = await axios.get(`/api/campuses/${id}`)
        return data
    }
    catch(err){
        console.log(err)
    }
})

export const singleCampusSlice = createSlice({
    name: "campus",
    initialState: {},
    reducer: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleCampus.fulfilled, (state, { payload }) => {
            return payload
        })
    }
})

export const selectCampus = state => state.campus

export default singleCampusSlice.reducer