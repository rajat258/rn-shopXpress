import {createSlice} from '@reduxjs/toolkit';

const initialState = {products: null};

const productSlice = createSlice({
  name: 'products',
  initialState: initialState,
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload.products.data;
    },
    deleteProducts: state => {
      state.products = null;
    },
    defaultActionAddProduct: () => {},
  },
});

export const productSliceAction = productSlice.actions;
export const productSliceReducer = productSlice.reducer;
