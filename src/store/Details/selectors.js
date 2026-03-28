export const selectListState = (state) => state.details;

export const isLoadingDetailsSelector = (state) => selectListState(state).isLoadingDetails;
export const productDetailsSelector = (state) => selectListState(state).productDetails;

export const isLoadingSizesSelector = (state) => selectListState(state).isLoadingSizes;
export const productSizesSelector = (state) => selectListState(state).productSizes;