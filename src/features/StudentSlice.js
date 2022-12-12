import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSingleStudent = createAsyncThunk("student/fetchOneStudent", async(id) => {
    try{
        const { data } = await axios.get(`/api/students/${id}`)
        return data
    }
    catch(err){
        console.log(err)
    }
})

export const singleStudentSlice = createSlice({
    name: "student",
    initialState: {},
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSingleStudent.fulfilled, (state, { payload }) => {
            return payload
        })
    }
})

export const selectStudent = (state) => {
    return state.student
}

export default singleStudentSlice.reducer