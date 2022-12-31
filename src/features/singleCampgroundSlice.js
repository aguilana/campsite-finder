import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleCampground = createAsyncThunk("campground/fetchSingle", async(id)=>{
    try{
        const { data } = await axios.get(`/api/campgrounds/${id}`)
        return data
    }
    catch(err){
        console.log("error: ", err)
    }
});

export const addReviewToCampgroundAsync = createAsyncThunk("campground/addReview", async (id, { body, rating })=> {
    try {
        const { data } = await axios.post(`/api/campgrounds/${id}/review`, { body, rating })
        console.log(data)
        return data
    }
    catch(err){
        console.log(err)
    }
})

export const editSingleCampgroundAsync = createAsyncThunk("campground/editCampground", async({ id, name, price, description, location, imageUrl })=>{
    try{
        const { data } = await axios.put(`/api/campgrounds/${id}/edit`, { name, price, description, location, imageUrl })
        return data
    }
    catch(err){

    }
})

const initialState = {
    campsite: {},
    loading: false,
    error: null
}

export const singleCampgroundSlice = createSlice({
    name: "campground",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchSingleCampground.fulfilled,  (state, { payload }) => {
            state.campsite = payload
        })
        builder.addCase(addReviewToCampgroundAsync.fulfilled, (state, { payload }) => {
            state.campsite.reviews.push(payload)
        })
    }
})

export const selectSingleCampground = state => state.campground.campsite;

export default singleCampgroundSlice.reducer