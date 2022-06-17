//brute force
const findMinDifference = function (arr) {
  let minDiff = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) < minDiff) {
        minDiff = Math.abs(arr[i] - arr[j]);
      }
    }
  }
  return minDiff;
};

//O(n log n)

const minDiff = function (arr) {
  arr.sort((a, b) => a - b);
  let minDiff = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i + 1] - arr[i]) < minDiff) {
      minDiff = Math.abs(arr[i + 1] - arr[i]);
    }
  }
  return minDiff;
};

console.log(findMinDifference([1, 5, 3, 19, 18, 25]));
console.log(minDiff([1, 5, 3, 19, 18, 25]));
