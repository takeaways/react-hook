import React from 'react';
import { Route } from 'react-router-dom';

import Search from './search/container/Search';
import User from './user/container/User';

export default function App() {
  return (
    <>
      <Route exact path={'/'} component={Search} />
      <Route exact path={'/user/:name'} component={User} />
    </>
  );
}
