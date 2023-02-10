const canAttendMeetings = function (intervals) {
  intervals.sort(([a, b], [c, d]) => {
    if (a !== c) {
      return a - c;
    }
    return b - d;
  });
  return intervals.every((current, index) => {
    if (index === 0) {
      return true;
    }
    const previous = intervals[index - 1];
    if (current[0] >= previous[1]) {
      return true;
    }
    return false;
  });
};
