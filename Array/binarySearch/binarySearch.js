const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const binarySearch = function (arr, target) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

const binarySearchRecursion = function (arr, target) {
  return helper(arr, 0, arr.length - 1, target);
};

const helper = function (arr, low, high, target) {
  if (high >= low) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] >= target) {
      return helper(arr, low, mid - 1, target);
    } else {
      return helper(arr, mid + 1, high, target);
    }
  }
  return -1;
};

console.log(binarySearch(a, 7));
console.log(binarySearchRecursion(a, 7));
