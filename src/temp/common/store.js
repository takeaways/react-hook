import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import friend from '../state/friend';
import timeline from '../state/timeline';
const reducer = combineReducers({
  friend,
  timeline,
});

const composeEnhanders = composeWithDevTools({});
const store = createStore(reducer, composeEnhanders(applyMiddleware()));
export default store;
