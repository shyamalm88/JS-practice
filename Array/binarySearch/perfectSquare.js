const isPerfectSquare = function (num) {
  let start = 0;
  let end = num / 2;
  if (num == 1) return true;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (mid * mid === num) {
      return true;
    } else {
      if (mid * mid < num) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return false;
};

console.log(isPerfectSquare(9));
