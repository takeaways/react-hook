import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { getNextFreind } from '../common/mockData';

import FriendList from '../component/FriendList';
import NumberSelect from '../component/NumberSelect';
import { addFriend, setAgeLimit, setShowLimit } from '../state/friend';
import { MAX_AGE_LIMIT, MAX_SHOW_LIMIT } from '../common';
import {
  getAgeLimit,
  getShowLimt,
  getFriendsWithAgeLimit,
  getFriendsWithShowLimit,
} from '../state/selector';

export default function FriendMain() {
  const dispatch = useDispatch();
  const {
    ageLimit,
    showLimit,
    friendsWithAgeLimit,
    friendsWithShowLimit,
  } = useSelector((state) => {
    return {
      ageLimit: getAgeLimit(state),
      showLimit: getShowLimt(state),
      friendsWithAgeLimit: getFriendsWithAgeLimit(state),
      friendsWithShowLimit: getFriendsWithShowLimit(state),
    };
  });
  function onAdd() {
    const friend = getNextFreind();
    dispatch(addFriend(friend));
  }
  return (
    <div>
      <button onClick={onAdd}>add friend</button>
      <NumberSelect
        onChange={(v) => dispatch(setAgeLimit(v))}
        value={ageLimit}
        options={AGE_LIMIT_OPTIONS}
        postfix='새 이하만 보기'
      />
      <FriendList friends={friendsWithAgeLimit} />
      <NumberSelect
        onChange={(v) => dispatch(setShowLimit(v))}
        value={showLimit}
        options={SHOW_LIMIT_OPTIONS}
        postfix='명 이하만 보기'
      />
      <FriendList friends={friendsWithShowLimit} />
    </div>
  );
}

const AGE_LIMIT_OPTIONS = [15, 20, 25, MAX_AGE_LIMIT];
const SHOW_LIMIT_OPTIONS = [2, 4, 6, MAX_SHOW_LIMIT];
