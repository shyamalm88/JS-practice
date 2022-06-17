const findTheSecondSmallestElement = function (arr) {
  if (arr.length < 2) {
    throw Error("invalid input");
  }

  let first = Number.MAX_VALUE,
    second = Number.MAX_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < second && arr[i] != first) {
      second = arr[i];
    }
  }
  return second;
};

console.log(findTheSecondSmallestElement([1, 3, 6, 5, 7, 2]));
