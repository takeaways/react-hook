import React from 'react';

export default function FriendList({ friends = [] }) {
  return (
    <ul>
      {friends.map((friend) => {
        return (
          <li key={friend.id}>
            {friend.name}:{friend.age}
          </li>
        );
      })}
    </ul>
  );
}
