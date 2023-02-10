const minMeetingRooms = function (intervals) {
  intervals.sort(([a, b], [c, d]) => {
    if (a !== c) {
      return a - c;
    }
    return d - b;
  });
  if (!intervals.length) {
    return 0;
  }
  const rooms = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    const room = rooms.find((x) => x[1] <= current[0]);
    if (room) {
      room[1] = Math.max(room[1], current[1]);
      rooms.sort((a, b) => a[1] - b[1]);
    } else {
      rooms.push(current);
    }
  }
  return rooms.length;
};
