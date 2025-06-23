import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


let url = "http://localhost:3002/gender"


export const getGender = createAsyncThunk('category/getGender', async () => {
    let res = await axios.get(url)
    return res.data
})

// export const check = createAsyncThunk("category/check",async([id,checked])=>{
//     await axios.patch(url+"/"+id,{checked:!checked})
//     return  {id,checked : !checked}
// })



export const GenderSlice = createSlice({
    name: "gender",
    initialState: {
        gender: [],
        search: ''
        // search:  localStorage.getItem("search")||"",

    },
    extraReducers: {
        [getGender.fulfilled]: (state, action) => {
            state.gender = action.payload
        },
        // [check.fulfilled]:(state,action)=>{
        //     state.gender.find((e)=>e.id == action.payload.id).checked = action.payload.checked
        // }
    },

    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
            // localStorage.setItem('search', action.payload)
        }
    }
})

export const { setSearch } = GenderSlice.actions;
export default GenderSlice.reducer


