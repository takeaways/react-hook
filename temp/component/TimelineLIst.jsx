import React from 'react';

export default function TimelineList({ timelines = [], onLike }) {
  return (
    <ul>
      {timelines.map((timeline) => {
        return (
          <li key={timeline.id}>
            {timeline.desc}
            <button
              data-id={timeline.id}
              onClick={onLike}
            >{`Like(${timeline.likes})`}</button>
          </li>
        );
      })}
    </ul>
  );
}
