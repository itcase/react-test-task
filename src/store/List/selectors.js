export const selectListState = (state) => state.list;

export const isListLoadingSelector = (state) => selectListState(state).isLoading;
export const productListSelector = (state) => selectListState(state).productList;