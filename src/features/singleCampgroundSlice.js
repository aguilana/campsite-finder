import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const singleCampground = createAsyncThunk("campground/fetchSingle", async(id)=>{
    try{
        const { data } = await axios.get(`/api/campgrounds/${id}`)
        return data
    }
    catch(err){
        console.log("error: ", err)
    }
});

export 