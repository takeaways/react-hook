import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getNextTimeline } from '../common/mockData';
import { actions } from '../state/timeline';

import TimelineList from '../component/TimelineLIst';

export default function TimelineMain() {
  const dispatch = useDispatch();
  const timelines = useSelector((state) => state.timeline.timelines);
  const isLoading = useSelector((state) => state.timeline.isLoading);
  function onAdd() {
    const timeline = getNextTimeline();
    dispatch(actions.addTimeline(timeline));
  }
  function onLike(e) {
    const id = Number(e.target.dataset.id);
    const timeline = timelines.find((item) => item.id === id);
    dispatch(actions.requestLike(timeline));
  }
  return (
    <div>
      <button onClick={onAdd}>add timeline</button>
      <TimelineList timelines={timelines} onLike={onLike} />
      {isLoading && <p>전송중....</p>}
    </div>
  );
}
