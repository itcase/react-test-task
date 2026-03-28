import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getProduct, getSizes} from "../../services/api";

const initialState = {
    isLoadingDetails: false,
    productDetails: null,
    detailsError: null,

    isLoadingSizes: false,
    productSizes: null,
    productSizesError: null
}

export const getProductDetails = createAsyncThunk(
    'list/GET_PRODUCT_DETAILS',
    (id) => getProduct(id)
);

export const getProductSizes = createAsyncThunk(
    'list/GET_PRODUCT_SIZES',
    () => getSizes()
);

const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {
        resetDetailsData: () => {
            return initialState;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProductDetails.pending, (state) => {
                state.isLoadingDetails = true;
            })
            .addCase(getProductDetails.fulfilled, (state, action) => {
                state.isLoadingDetails = false;
                state.productDetails = action.payload;
            })
            .addCase(getProductDetails.rejected, (state, action) => {
                state.isLoadingDetails = false;
                state.detailsError = action.payload;
            })

            .addCase(getProductSizes.pending, (state) => {
                state.isLoadingSizes = true;
            })
            .addCase(getProductSizes.fulfilled, (state, action) => {
                state.isLoadingSizes = false;
                state.productSizes = action.payload;
            })
            .addCase(getProductSizes.rejected, (state, action) => {
                state.isLoadingSizes = false;
                state.productSizesError = action.payload;
            })
    }
});

export const { resetDetailsData } = detailsSlice.actions;

export default detailsSlice.reducer;
export * from './selectors'