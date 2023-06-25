import {createSlice} from '@reduxjs/toolkit';

const initialState = {data: null};

const activeUserSlice = createSlice({
  name: 'activeUser',
  initialState: initialState,
  reducers: {
    addUser: (state, action) => {
      state.data = {...action.payload.body};
    },
    deleteUser: (state, action) => {
      state = initialState;
      return {...state};
    },
    updateCartId: (state, action) => {
      state.data.meta.cartId = action.payload.cartId;
    },
    defaultActionAddUser: () => {},
  },
});

export const activeUserReducer = activeUserSlice.reducer;
export const activeUserActions = activeUserSlice.actions;
