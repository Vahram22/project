import { createAsyncThunk, createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

let url = "http://localhost:3002/register"

export const getRegistration = createAsyncThunk("akaunt/getRegistration", async () => {
    let res = await axios.get(url)
    return res.data
})

export const addRegistration = createAsyncThunk("akaunt/addRegistration", async (userData) => {
    let res = await axios.get(url)
    let t = res.data.filter(compare => compare.mail == userData.email)
    if (t.length == 0) {
        let res1 = await axios.post(url, {
            name: userData.name,
            mail: userData.email,
            password: userData.password
        })
        return res1.data
    } else {
        alert("ka mail")
    }

})

export const compareLogin = createAsyncThunk("akaunt/compareLogin", async ([mailvalue, passvalue, setUsename]) => {

    let res = await axios.get(url)
    let account = res.data.find(compare =>
        compare.mail == mailvalue && compare.password == passvalue
    )
    if (account) {
        localStorage.setItem("user", JSON.stringify(account))
        return { account }
    }
    else {
        alert("wrong password")
        return { account: false }
    }
})

export const onChangeAccount = createAsyncThunk("akaunt/onChangeAccaunt", async ([account, img, newName, oldPassword, newPassword], { rejectWithValue }) => {
    const id = account.id

    try {
        const res = await axios.get(url + "/" + id)
        const user = res.data

        if (newName || newPassword) {
            if (user.password != oldPassword) {
                alert("wrong password")
                return rejectWithValue("wrong password")

            }
            else {
                alert("changing successfuly")
            }
        }
        const updateData = {
            img: img.length > 0 ? img[0].data_url : account.img,
            name: newName || account.name,
            password: newPassword || user.password
        }
        await axios.patch(url + "/" + id, updateData)
        const updateUser = { ...account, ...updateData }
        localStorage.setItem("user", JSON.stringify(updateUser))
        return updateUser
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});

export const RegisterSlice = createSlice({
    name: "registration",
    initialState: {
        account: false,
        registration: [],
        user:null
    },
    extraReducers: {
        [getRegistration.fulfilled]: (state, action) => {
            state.registration = action.payload
        },
        [addRegistration.fulfilled]: (state, action) => {
            state.registration.push(action.payload)
        },
        [compareLogin.fulfilled]: (state, action) => {
            state.account = action.payload.account
        },
        [onChangeAccount.fulfilled]:(state,action)=>{
            state.account=action.payload
        }
    },
    reducers:{
        logaut:(state)=>{
            state.account=false
            localStorage.removeItem("user")
        },
        loadingUser:(state)=>{
            const savedUser=JSON.parse(localStorage.getItem("user"))
            if (savedUser) {
                state.account=savedUser
            }
        }
    }
})

export const {logaut,loadingUser} = RegisterSlice.actions
export default RegisterSlice.reducer