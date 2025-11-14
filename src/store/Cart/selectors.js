export const selectListState = (state) => state.cart;

export const addedProductsInfoSelector = (state) => selectListState(state).addedProductsInfo;