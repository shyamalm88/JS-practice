const findMin = function (arr) {
  let start = 0;
  let end = arr.length - 1;
  let res = arr[0];
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    res = Math.min(res, arr[mid]);
    if (arr[mid] >= arr[start]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return res;
};

console.log(findMin([3, 4, 5, 6, 7, 8, 9, 0, 1, 2]));
console.log(findMin([0, 1, 2, 3]));
