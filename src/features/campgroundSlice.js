import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllCampgrounds = createAsyncThunk('campgrounds/fetchAll', async()=>{
    try{
        const { data } = await axios.get('/api/campgrounds')
        return data
    }
    catch(err){
        console.log("error: ", err)
    }
})

export const campgroundsSlice = createSlice({
    name: "campgrounds",
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(fetchAllCampgrounds.fulfilled, (state, { payload }) => {
            return payload
        })
    }
})

export const selectCampgrounds = (state) => {
    return state.campgrounds
}

export default campgroundsSlice.reducer