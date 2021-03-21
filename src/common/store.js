import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

//reducer
import searchReducer from '../search/state';
import userReducer from '../user/state';
//saga
import searchSaga from '../search/state/saga';
import userSaga from '../user/state/saga';

const reducer = combineReducers({
  search: searchReducer,
  user: userReducer,
});

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

function* rootSaga() {
  yield all([searchSaga(), userSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;
