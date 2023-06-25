import {rootReducer} from '../reducer';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import {rootSaga} from '../saga';
const saga = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [saga],
});

saga.run(rootSaga);

export {store};
