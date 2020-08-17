import { createSelector } from 'reselect';
const getFriends = (state) => state.friend.friends;

export const getAgeLimit = (state) => state.friend.ageLimit;
export const getShowLimt = (state) => state.friend.showLimit;

export const getFriendsWithAgeLimit = createSelector(
  [getFriends, getAgeLimit],
  (friends, ageLimit) => friends.filter((item) => item.age <= ageLimit)
);

export const getFriendsWithShowLimit = createSelector(
  [getFriendsWithAgeLimit, getShowLimt],
  (friendsWithAgeLimit, showLimit) => friendsWithAgeLimit.slice(0, showLimit)
);
