import {call, takeEvery, put} from 'redux-saga/effects';
import {getData} from '../../api';
import {productSliceAction} from '../reducer';

function* workerFunctionSaga() {
  try {
    const products = yield call(() => getData('products'));
    yield put(productSliceAction.addProducts({products}));
  } catch (error) {
    if (__DEV__) {
      console.error('Product Error', error);
    }
  }
}

function* productSaga() {
  yield takeEvery(
    productSliceAction.defaultActionAddProduct,
    workerFunctionSaga,
  );
}
export default productSaga;
