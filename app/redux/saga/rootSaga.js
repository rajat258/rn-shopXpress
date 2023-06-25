import {all} from 'redux-saga/effects';
import activeUserSaga from './activeUserSaga';
import cartSaga from './cartSaga';
import orderSaga from './orderSaga';
import productSaga from './productSaga';

export function* rootSaga() {
  yield all([activeUserSaga(), productSaga(), cartSaga(), orderSaga()]);
}
