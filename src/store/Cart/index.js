import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProductColor, getSize} from "../../services/api";

const initialState = {
    isLoadingSize: false,
    productSize: null,
    productSizeError: null,

    isLoadingColor: false,
    productColor: null,
    productColorError: null,

    addedProductsInfo: []
}

export const getProductSize = createAsyncThunk(
    'list/GET_PRODUCT_SIZE',
    (sizeID) => getSize(sizeID)
);

export const getAddedProductColor = createAsyncThunk(
    'list/GET_PRODUCT_COLOR',
    (params) => getProductColor(params.productID, params.colorID)
);

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct: (store, action) => {
            store.addedProductsInfo.push(action.payload);
        },
        deleteProduct: (store, action) => {
            store.addedProductsInfo = store.addedProductsInfo.filter(product => product.key !== action.payload);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductSize.pending, (state) => {
                state.isLoadingSize = true;
            })
            .addCase(getProductSize.fulfilled, (state, action) => {
                state.isLoadingSize = false;
                state.productSize = action.payload;
            })
            .addCase(getProductSize.rejected, (state, action) => {
                state.isLoadingSize = false;
                state.productSizeError = action.payload;
            })

            .addCase(getAddedProductColor.pending, (state) => {
                state.isLoadingColor = true;
            })
            .addCase(getAddedProductColor.fulfilled, (state, action) => {
                state.isLoadingColor = false;
                state.productColor = action.payload;
            })
            .addCase(getAddedProductColor.rejected, (state, action) => {
                state.isLoadingColor = false;
                state.productColorError = action.payload;
            })
    }
});

export const { addProduct, deleteProduct } = cartSlice.actions;

export default cartSlice.reducer;
export * from './selectors'