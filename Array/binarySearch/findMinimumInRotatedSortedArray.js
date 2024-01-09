const findMin = function (arr, low, high) {
  if (arr[low] <= arr[high]) {
    return arr[low];
  }

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] < arr[mid - 1]) {
      return arr[mid];
    }
    if (arr[mid] > arr[high]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  // If no minimum element is found, return -1
  return -1;
};
const arr = [3, 4, 5, 6, 7, 8, 9, 0, 1, 2];
console.log(findMin(arr, 0, arr.length - 1));
