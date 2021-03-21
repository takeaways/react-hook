import { all, call, takeLatest, put, takeEvery } from 'redux-saga/effects';

import { Types } from '.';
import { callApi } from '../../common/util/api';
import { actions } from '.';

export function* fetchUser({ name }) {
  console.log(name);
  const { isSuccess, data } = yield call(callApi, {
    url: '/user/search',
    params: { keyword: name },
  });

  if (isSuccess && data) {
    const user = data.find((item) => item.name === name);
    if (user) {
      yield put(actions.setValue('user', user));
    }
  }
}

export default function* () {
  // yield all([takeLatest(Types.FetchUser, fetchUser)]);
  takeEvery(
    Types.FetchUser,
    makeFetchSaga({ fetchSaga: fetchUser, canCache: false })
  );
}
