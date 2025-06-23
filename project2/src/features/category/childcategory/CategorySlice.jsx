import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

let url = "http://localhost:3002/category"

export const getCategory = createAsyncThunk("category/getCategory", async () => {
    let res = await axios.get(url)
    return res.data
})

export const addCategory = createAsyncThunk("category/addCategory", async ([text1,modalgender,images]) => {
    let res = await axios.post(url, {
        parentid: modalgender,
        img: images[0].data_url,
        name: text1
    })
    return res.data
})
export const CategorySlice = createSlice({
    name: 'category',
    initialState: {
        category: []
    },
    extraReducers: {
        [getCategory.fulfilled]: (state, action) => {
            state.category = action.payload
        },
        [addCategory.fulfilled]: (state, action) => {
           state.category.push(action.payload)
        }
    }
})
export default CategorySlice.reducer