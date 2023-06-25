import {createSlice} from '@reduxjs/toolkit';

const initialState = {counter: 0, cart: null, load: false};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    initializeCounter: (state, action) => {
      state.cart = action.payload.cart;
      state.counter = action.payload.count;
    },
    updateCart: (state, action) => {
      state.cart = action.payload.cart;
    },
    incrementCounter: (state, action) => {
      state.cart = action.payload.cart;
      state.counter += 1;
    },
    decrementCounter: (state, action) => {
      state.cart = action.payload.cart;
      state.counter -= 1;
    },
    updateLoad: state => {
      state.load = !state.load;
    },
    clearCart: state => {
      state.counter = 0;
      state.cart = null;
    },
    defaultInitializeCounter: () => {},
    defaultUpdateCart: () => {},
    defaultDeleteItem: () => {},
    defaultIncrementCounter: () => {},
    defaultDecrementCounter: () => {},
    defaultClearCounter: () => {},
  },
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;
