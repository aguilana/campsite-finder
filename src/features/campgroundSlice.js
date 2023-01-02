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

// create campground
export const createCampgroundAsync = createAsyncThunk('campgrounds/createCampground', async({ name, price, description, location, imageUrl }) => {
    try {
        const { data } = await axios.post('/api/campgrounds/create', {
            name,
            price,
            description,
            location,
            imageUrl
        })
        return data
    }
    catch(err){
        console.log("error: ", err)
    }
})

export const deleteCampgroundAsync = createAsyncThunk('campgrounds/deleteCampgground', async (id)=>{
    try {
        const { data } = await axios.delete(`/api/campgrounds/${id}`)
        return data
    }
    catch(err) {
        next(err)
    }
})

const initialState = {
    campsiteList: [],
    loading: false,
    error: null
}

export const campgroundsSlice = createSlice({
    name: "campgrounds",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAllCampgrounds.fulfilled, (state, action) => {
            state.campsiteList = action.payload
        })
        builder.addCase(createCampgroundAsync.fulfilled, (state, action) => {
            state.campsiteList.push(action.payload)
        })
        builder.addCase(deleteCampgroundAsync.fulfilled, (state, { payload }) => {
            state.campsiteList = state.campsiteList.filter((campsite)=> campsite.id !== payload.id)
        })
    }
})

export const selectCampgrounds = (state) => {
    console.log("THE CURRENT STATE OF THE STORE --->", state)
    return state.campgrounds.campsiteList
}

export default campgroundsSlice.reducer