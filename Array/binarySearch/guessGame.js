const guessNumber = function (n) {
  let start = 1;
  let end = n;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let res = guess(mid);
    if (res === 0) {
      return mid;
    } else if (res == 1) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};
