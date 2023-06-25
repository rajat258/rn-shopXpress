import {call, takeEvery, put, select} from 'redux-saga/effects';
import {getData} from '../../api';
import {orderSliceAction} from '../reducer';

function* workerInitializeSaga() {
  try {
    const activeUser = yield select(state => state.activeUser?.data);
    const order = yield call(() =>
      getData(`customers/${activeUser?.id}/orders`),
    );
    yield put(orderSliceAction.addOrders({order}));
  } catch (error) {
    if (__DEV__) {
      console.error('Order Error', error);
    }
  }
}

function* workerAddSaga(action) {
  try {
    yield put(orderSliceAction.addNewOrders({order: action.payload.order}));
  } catch (error) {
    if (__DEV__) {
      console.error('Order Error', error);
    }
  }
}

function* orderSaga() {
  yield takeEvery(
    orderSliceAction.defaultActionInitializeOrders,
    workerInitializeSaga,
  );
  yield takeEvery(orderSliceAction.defaultActionAddOrders, workerAddSaga);
}
export default orderSaga;
