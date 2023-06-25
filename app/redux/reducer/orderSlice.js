import {createSlice} from '@reduxjs/toolkit';

const initialState = {order: null};

const orderSlice = createSlice({
  name: 'order',
  initialState: initialState,
  reducers: {
    addOrders: (state, action) => {
      state.order = action.payload.order;
      if (state.order?.data) {
        state.order.data = state.order?.data?.reverse();
      }
    },
    addNewOrders: (state, action) => {
      if (state.order?.data) {
        state.order.data.push(action.payload.order);
        state.order.data = state.order?.data?.reverse();
      } else {
        state.order = action.payload.order;
      }
    },
    clearOrders: state => {
      state.order = null;
    },
    defaultActionAddOrders: () => {},
    defaultActionInitializeOrders: () => {},
  },
});

export const orderSliceAction = orderSlice.actions;
export const orderSliceReducer = orderSlice.reducer;
