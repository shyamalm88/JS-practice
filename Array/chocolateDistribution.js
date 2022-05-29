const arr = [12, 4, 7, 9, 2, 23, 25, 41, 30, 40, 28, 42, 30, 44, 48, 43, 50];
const m = 7;

const findMinimumChocolateDistribution = (arr, m) => {
  if (m == 0 || arr.length == 0) return 0;

  arr.sort(function (a, b) {
    return a - b;
  });

  if (arr.length < m) return -1;

  let min = Number.MAX_VALUE;

  for (let i = 0; i + m - 1 < arr.length; i++) {
    let diff = arr[i + m - 1] - arr[i];

    if (diff < min) min = diff;
  }
  return min;
};

console.log(findMinimumChocolateDistribution(arr, m));
