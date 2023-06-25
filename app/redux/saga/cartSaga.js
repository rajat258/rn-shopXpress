import {call, takeEvery, put, select} from 'redux-saga/effects';
import {deleteData, getData, putData} from '../../api';
import {cartActions} from '../reducer';

function* workerInitializeSaga() {
  try {
    yield put(cartActions.updateLoad());
    const activeUser = yield select(state => state.activeUser?.data);
    const res = yield call(() => getData(`carts/${activeUser?.meta?.cartId}`));
    yield put(
      cartActions.initializeCounter({
        count: res?.line_items?.length,
        cart: res,
      }),
    );
    yield put(cartActions.updateLoad());
  } catch (error) {
    yield put(cartActions.updateLoad());
    if (__DEV__) {
      console.error('Cart Error', error);
    }
  }
}

function* workerIncrementSaga(action) {
  try {
    yield put(cartActions.incrementCounter({cart: action.payload.cart}));
  } catch (error) {
    if (__DEV__) {
      console.error('Cart Error', error);
    }
  }
}

function* workerDecrementSaga(action) {
  try {
    yield put(cartActions.decrementCounter({cart: action.payload.cart}));
  } catch (error) {
    if (__DEV__) {
      console.error('Cart Error', error);
    }
  }
}

function* workerUpdateSaga(action) {
  try {
    yield put(cartActions.updateLoad());
    const activeUser = yield select(state => state.activeUser?.data);
    const res = yield call(() =>
      putData({
        endpoint: `carts/${activeUser?.meta?.cartId}/items/${action.payload.itemId}`,
        body: {quantity: action.payload.quantity},
      }),
    );
    yield put(cartActions.updateCart({cart: res}));
    yield put(cartActions.updateLoad());
  } catch (error) {
    yield put(cartActions.updateLoad());
    if (__DEV__) {
      console.error('Cart Error', error);
    }
  }
}

function* workerDeleteItemSaga(action) {
  try {
    yield put(cartActions.updateLoad());
    const activeUser = yield select(state => state.activeUser?.data);
    const res = yield call(() =>
      deleteData(
        `carts/${activeUser?.meta?.cartId}/items/${action.payload.itemId}`,
      ),
    );
    yield put(cartActions.decrementCounter({cart: res}));
    yield put(cartActions.updateLoad());
  } catch (error) {
    yield put(cartActions.updateLoad());
    if (__DEV__) {
      console.error('Cart Error', error);
    }
  }
}

function* cartSaga() {
  yield takeEvery(cartActions.defaultInitializeCounter, workerInitializeSaga);
  yield takeEvery(cartActions.defaultDecrementCounter, workerDecrementSaga);
  yield takeEvery(cartActions.defaultIncrementCounter, workerIncrementSaga);
  yield takeEvery(cartActions.defaultUpdateCart, workerUpdateSaga);
  yield takeEvery(cartActions.defaultDeleteItem, workerDeleteItemSaga);
}
export default cartSaga;
