import produce from 'immer';

export default function createReducer(initialStata, handlerMap) {
  return (state = initialStata, action) => {
    return produce(state, (draft) => {
      const handler = handlerMap[action.type];
      if (handler) {
        handler(draft, action);
      }
    });
  };
}
