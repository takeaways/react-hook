import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getNextFreind } from '../common/mockData';

import FriendList from '../component/FriendList';
import { addFriend } from '../state/friend';

export default function FriendMain() {
  const dispatch = useDispatch();
  const friends = useSelector((state) => state.friend.friends);
  function onAdd() {
    const friend = getNextFreind();
    dispatch(addFriend(friend));
  }
  return (
    <div>
      <button onClick={onAdd}>add friend</button>
      <FriendList friends={friends} />
    </div>
  );
}
