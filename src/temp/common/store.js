import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import friend from '../state/friend';
import timeline from '../state/timeline';

import timelineSaga from '../state/saga';

const reducer = combineReducers({
  friend,
  timeline,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  console.log('---2-----');
  yield all([timelineSaga()]);
}
sagaMiddleware.run(rootSaga);
export default store;
