import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let url = "http://localhost:3002/products"

export const getProduct = createAsyncThunk("category/getProduct", async () => {
    let res = await axios.get(url)
    return res.data
})

export const getFilter = createAsyncThunk("category/getFilter", async ([value1]) => {
    let res = await axios.get(url)
    let data = res.data
    let filterData = data.filter(product =>
        product.price >= value1[0] && product.price <= value1[1]
    );

    return filterData;
});

export const getFilter2 = createAsyncThunk("category/getFilter", async ([value2]) => {
    let res = await axios.get(url)
    let data = res.data
    let filterData2 = data.filter(filter2 =>
        filter2.price >= value2[0] && filter2.price <= value2[1]
    );

    return filterData2;
});

export const getFilter3 = createAsyncThunk("category/getFilter", async ([value3]) => {
    let res = await axios.get(url)
    let data = res.data
    let filterData2 = data.filter(filter3 =>
        filter3.price >= value3[0] && filter3.price <= value3[1]
    );

    return filterData2;
});

// export const getSearch = createAsyncThunk("category/getSearch",async(searchTerm)=>{
//     let res = await axios.get(url)
//     const searchData = res.data.filter(product =>
//         product.item.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       return searchData;
// })

export const addProduct = createAsyncThunk("category/addProduct", async ([item, price, images, assortmentQuery, carat, weight, jeweler, file, itog, quantity, comment, type, diameter, number, stone, prob, name]) => {
    let res = await axios.post(url, {
        PID: assortmentQuery,
        item: item,
        price: price,
        img: images[0].data_url,
        carat: carat,
        weight: weight,
        jeweler: jeweler,
        file: file,
        itog: itog,
        quantity: quantity,
        comment: comment,
        type: type,
        diameter: diameter,
        number: number,
        stone: stone,
        prob: prob,
        name: name
    })
    return res.data
})
export const delet = createAsyncThunk("todo/clea", async (id) => {
    await axios.delete(url + "/" + id)
    return id
})

export const ProductSlicce = createSlice({
    name: "product",
    initialState: {
        product: []
    },
    extraReducers: {
        [getProduct.fulfilled]: (state, action) => {
            state.product = action.payload
        },
        [addProduct.fulfilled]: (state, action) => {
            state.product.push(action.payload)
        },
        [getFilter.fulfilled]: (state, action) => {
            state.product = action.payload
        },
        [getFilter2.fulfilled]: (state, action) => {
            state.product = action.payload
        },
        [getFilter3.fulfilled]: (state, action) => {
            state.product = action.payload
        },
        [delet.fulfilled]: (state, action) => {
            state.product = state.product.filter((e) => e.id !== action.payload)
        }
        // [getSearch.fulfilled]:(state,action)=>{
        //     state.product=action.payload
        // },
    }
})

export default ProductSlicce.reducer