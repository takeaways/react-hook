import React from 'react';
import { Provider } from 'react-redux';

import store from './common/store';
import TimelineMain from './container/TimelineMain';
import FriendMain from './container/FriendMain';

export default function Redux() {
  return (
    <Provider store={store}>
      <FriendMain />
      <TimelineMain />
    </Provider>
  );
}
