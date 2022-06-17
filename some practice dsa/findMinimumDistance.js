// brute force approach
const findMinDistance = function (arr, x, y) {
  let minDistance = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (
        ((x === arr[i] && y === arr[j]) || (x === arr[j] && y === arr[i])) &&
        minDistance > Math.abs(i - j)
      ) {
        minDistance = Math.abs(i - j);
      }
    }
  }

  return minDistance;
};

// O(n) time complexity
const minDistance = function (arr, x, y) {
  let i, prev;
  let minDistance = Number.MAX_VALUE;

  for (i = 0; i < arr.length; i++) {
    if (x === arr[i] || y === arr[i]) {
      prev = i;
      break;
    }
  }

  for (; i < arr.length; i++) {
    if (x === arr[i] || y === arr[i]) {
      if (arr[prev] != arr[i] && minDistance > i - prev) {
        minDistance = i - prev;
        prev = i;
      } else {
        prev = i;
      }
    }
  }
  return minDistance;
};

console.log(
  findMinDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 3, 5, 6, 4], 3, 6)
);

console.log(minDistance([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 3, 5, 6, 4], 3, 6));
