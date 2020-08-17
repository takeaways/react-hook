import React from 'react';
import { Provider } from 'react-redux';
import produce from 'immer';
import { createStore, applyMiddleware } from 'redux';

const INITIAL_STATE = {
  todos: [],
};
const REMOVE_ALL = 'REMOVE_ALL';
//reducer 는 순수 함수 이여야 합니다. 부수 효과를 발생 시키면 안됩니다.
function reducer(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case REMOVE_ALL: {
        draft.todos = [];
        break;
      }
      default: {
        return state;
      }
    }
  });
}
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());

export default function Redux() {
  return <Provider store={store}>Redux Test</Provider>;
}
