import { takeLeading, put, call, all } from 'redux-saga/effects';
import { actions, types } from './timeline';
import { callApiLike } from '../common/api';

export function* fetchData(action) {
  yield console.log(action);
  yield put(actions.setLoading(true));
  yield put(actions.addLike(action.timeline.id, 1));
  yield call(callApiLike);
  yield put(actions.setLoading(false));
}

export default function* () {
  console.log('--');
  yield all([takeLeading(types.REQUEST_LIKE, fetchData)]);
}

/*
[saga의 부수 효과]
  put[action을 발생시킨다]
  call[]
   all



*/
