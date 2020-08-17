import React from 'react';

export default function TimelineList({ timelines = [] }) {
  return (
    <ul>
      {timelines.map((timeline) => {
        return <li key={timeline.id}>{timeline.desc}</li>;
      })}
    </ul>
  );
}
