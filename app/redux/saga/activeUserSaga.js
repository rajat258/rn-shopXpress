import {put, takeEvery} from 'redux-saga/effects';
import {activeUserActions} from '../reducer';

function* workerFunctionSaga(action) {
  yield put(activeUserActions.addUser({body: action.payload.body}));
}

function* activeUserSaga() {
  yield takeEvery(activeUserActions.defaultActionAddUser, workerFunctionSaga);
}
export default activeUserSaga;
