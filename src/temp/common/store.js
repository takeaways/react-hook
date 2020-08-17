import { createStore, combineReducers } from 'redux';
import friend from '../state/friend';
import timeline from '../state/timeline';
const reducer = combineReducers({
  friend,
  timeline,
});

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
export default store;
