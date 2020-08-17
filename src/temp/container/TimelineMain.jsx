import React from 'react';
import TimelineList from '../component/TimelineLIst';
import { useSelector, useDispatch } from 'react-redux';
import { getNextTimeline } from '../common/mockData';
import { addTimeline } from '../state/timeline';

export default function TimelineMain() {
  const dispatch = useDispatch();
  const timelines = useSelector((state) => state.timeline.timelines);
  function onAdd() {
    const timeline = getNextTimeline();
    dispatch(addTimeline(timeline));
  }
  return (
    <div>
      <button onClick={onAdd}>add timeline</button>
      <TimelineList timelines={timelines} />
    </div>
  );
}
