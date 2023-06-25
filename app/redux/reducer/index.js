import {combineReducers} from 'redux';
import {activeUserReducer} from './activeUserSliceReducer';
import {cartReducer} from './cartSlice';
import {orderSliceReducer} from './orderSlice';
import {productSliceReducer} from './productSlice';
const rootReducer = combineReducers({
  activeUser: activeUserReducer,
  product: productSliceReducer,
  cart: cartReducer,
  order: orderSliceReducer,
});

export {rootReducer};
export * from './activeUserSliceReducer';
export * from './productSlice';
export * from './cartSlice';
export * from './orderSlice';
