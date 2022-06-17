const findMin = function (arr) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] > arr[mid + 1]) return arr[mid + 1];
    if (arr[mid] > arr[mid - 1]) return arr[mid - 1];
    if (arr[mid] > arr[0]) {
      end = mid + 1;
    } else {
      start = mid - 1;
    }
  }
  return -1;
};

console.log(findMin([3, 4, 5, 6, 7, 8, 9, 0, 1, 2]));
