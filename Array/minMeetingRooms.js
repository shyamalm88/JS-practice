//Given an array of meeting time intervals intervals where
//intervals[i] = [starti, endi], return the minimum number of conference rooms required.

const minMeetingRooms = (intervals) => {
  let rooms = 0;
  let end = 0;
  let starts = intervals.map((a) => a[0]).sort((a, b) => a - b);
  let ends = intervals.map((a) => a[1]).sort((a, b) => a - b);

  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[end]) {
      rooms++;
    } else {
      end++;
    }
  }
  return rooms;
};

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
);
