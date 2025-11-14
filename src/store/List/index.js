import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProducts} from "../../services/api";

const initialState = {
    isLoading: false,
    productList: []
}

export const getProductList = createAsyncThunk(
    'list/GET_PRODUCT_LIST',
    () => getProducts()
);

const listSlice = createSlice({
    name: "list",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProductList.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProductList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productList = action.payload;
            })
    }
});

export default listSlice.reducer;
export * from './selectors'