const peekIndexInMountainArray = function (arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (arr[mid] > arr[mid - 1]) {
      start = mid + 1;
    } else if (arr[mid] > arr[mid + 1]) {
      end = mid;
    }
  }
  return -1;
};

console.log(peekIndexInMountainArray([0, 2, 5, 10, 2]));
