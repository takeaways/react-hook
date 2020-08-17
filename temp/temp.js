// const INITIAL_STATE = {
//   todos: [],
// };
// const REMOVE_ALL = 'REMOVE_ALL';
// //reducer 는 순수 함수 이여야 합니다. 부수 효과를 발생 시키면 안됩니다.
// function reducer(state = INITIAL_STATE, action) {
//   return produce(state, (draft) => {
//     switch (action.type) {
//       case REMOVE_ALL: {
//         draft.todos = [];
//         break;
//       }
//       default: {
//         return state;
//       }
//     }
//   });
// }

import produce from 'immer';
import { createStore } from 'redux';

function createReducer(initialState, handleMap) {
  return function (state = initialState, action) {
    return produce(state, (draft) => {
      const handler = handleMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}

const INITIAL_STATE = {
  todos: [],
};
const ADD = 'ADD';
const myReducer = createReducer(INITIAL_STATE, {
  [ADD]: (state, action) => state.todos.push(action.todo),
});

const store = createStore(myReducer);
