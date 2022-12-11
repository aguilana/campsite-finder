import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllStudents = createAsyncThunk("students/fetchAllStudents", async()=>{
    try{
        const { data } = await axios.get("/api/students")
        return data
    }
    catch(err){
        console.log(err)
    }
})

export const studentsSlice = createSlice({
    name: "students",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllStudents.fulfilled, ( state, { payload }) => {
            return payload
        })
    }
})

export const selectStudents = state=>state.students

export default studentsSlice.reducer