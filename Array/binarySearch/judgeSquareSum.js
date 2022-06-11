const judgeSquareSum = function (num) {
  let start = 0;
  let end = Math.floor(Math.sqrt(num));
  while (start <= end) {
    let value = start * start + end * end;
    if (value === num) {
      return true;
    } else if (value < num) {
      start = start + 1;
    } else {
      end = end - 1;
    }
  }
  return false;
};

console.log(judgeSquareSum(6));
