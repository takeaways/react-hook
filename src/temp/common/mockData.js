const friends = [
  { name: 'friend1', age: 21 },
  { name: 'friend2', age: 22 },
  { name: 'friend3', age: 23 },
  { name: 'friend4', age: 24 },
];

const timelines = [
  { desc: 'desc1', likes: 0 },
  { desc: 'desc2', likes: 2 },
  { desc: 'desc3', likes: 3 },
  { desc: 'desc4', likes: 4 },
];

function makeDataGenerator(items) {
  let itemIndex = 0;
  return function getNextData() {
    const item = items[itemIndex % items.length];
    itemIndex += 1;
    return { ...item, id: itemIndex };
  };
}
export const getNextFreind = makeDataGenerator(friends);
export const getNextTimeline = makeDataGenerator(timelines);
