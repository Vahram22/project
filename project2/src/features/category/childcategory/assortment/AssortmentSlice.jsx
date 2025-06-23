import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

let url = "http://localhost:3002/assortment"

export const getAssortment = createAsyncThunk("category/getAssortment", async () => {
    let res = await axios.get(url)
    return res.data
})
export const addAssortment = createAsyncThunk("category/addAssortment", async ([name_ass,categoryQuery]) => {
    let res = await axios.post(url, {
        parId:categoryQuery,
        Name: name_ass
    })
    console.log('API Response:', res.data) // Add this line
    return res.data
})

export const AssortmentSlice = createSlice({
    name: "assortment",
    initialState: {
        assortment: []
    },
    extraReducers: {
        [getAssortment.fulfilled]: (state, action) => {
            state.assortment = action.payload
        },
        [addAssortment.fulfilled]: (state, action) => {
            state.assortment.push(action.payload)
        }
    }
})

export default AssortmentSlice.reducer